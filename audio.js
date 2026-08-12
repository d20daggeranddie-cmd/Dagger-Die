/**
 * Procedural dice rolling sounds via Web Audio API.
 * No external sound files required.
 */
const DaggerDieAudio = (() => {
    const SOUND_ENABLED_KEY = 'daggerdie_soundEnabled';
    let ctx = null;
    let rollTimer = null;

    function isEnabled() {
        const stored = localStorage.getItem(SOUND_ENABLED_KEY);
        return stored === null || stored === 'true';
    }

    function setEnabled(enabled) {
        localStorage.setItem(SOUND_ENABLED_KEY, String(enabled));
        if (!enabled) {
            stopDiceRoll(false);
        }
    }

    function toggleEnabled() {
        setEnabled(!isEnabled());
        return isEnabled();
    }

    function getContext() {
        if (!ctx) {
            ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        return ctx;
    }

    function resumeContext() {
        const c = getContext();
        if (c.state === 'suspended') {
            return c.resume();
        }
        return Promise.resolve();
    }

    function playDiceTick() {
        if (!isEnabled()) return;

        const c = getContext();
        const now = c.currentTime;
        const duration = 0.04;
        const bufferSize = Math.floor(c.sampleRate * duration);
        const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
        }

        const noise = c.createBufferSource();
        noise.buffer = buffer;

        const filter = c.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 600 + Math.random() * 1400;
        filter.Q.value = 1.5 + Math.random();

        const gain = c.createGain();
        gain.gain.setValueAtTime(0.12 + Math.random() * 0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(c.destination);
        noise.start(now);
        noise.stop(now + duration);
    }

    function playDiceSettle() {
        if (!isEnabled()) return;

        const c = getContext();
        const now = c.currentTime;

        const osc = c.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(160 + Math.random() * 50, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.18);

        const gain = c.createGain();
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(now);
        osc.stop(now + 0.2);

        playDiceTick();
    }

    function startDiceRoll() {
        if (!isEnabled()) return;
        resumeContext();
        stopDiceRoll(false);
        playDiceTick();
        rollTimer = setInterval(playDiceTick, 42);
    }

    function stopDiceRoll(playSettle = true) {
        if (rollTimer) {
            clearInterval(rollTimer);
            rollTimer = null;
        }
        if (playSettle) {
            playDiceSettle();
        }
    }

    function playNoiseBurst(c, now, dest, { duration, filterType = 'bandpass', filterFreq, filterQ, gainPeak, attack = 0.002, decay }) {
        const bufferSize = Math.floor(c.sampleRate * duration);
        const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.15));
        }

        const noise = c.createBufferSource();
        noise.buffer = buffer;

        const filter = c.createBiquadFilter();
        filter.type = filterType;
        filter.frequency.value = filterFreq;
        filter.Q.value = filterQ;

        const gain = c.createGain();
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(gainPeak, now + attack);
        gain.gain.exponentialRampToValueAtTime(0.001, now + decay);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(dest);
        noise.start(now);
        noise.stop(now + decay + 0.01);
    }

    function playPlayerHit(damage = 1) {
        if (!isEnabled()) return;
        resumeContext();

        const c = getContext();
        const now = c.currentTime;
        const intensity = Math.min(1.2, 0.55 + damage / 20);
        const master = c.createGain();
        master.gain.value = Math.min(1, 0.85 + damage / 40);
        master.connect(c.destination);

        // Muffled flesh/cloth snap — short, low, no ring
        playNoiseBurst(c, now, master, {
            duration: 0.05,
            filterType: 'lowpass',
            filterFreq: 220 + Math.min(damage * 4, 120),
            filterQ: 0.7,
            gainPeak: 0.5 * intensity,
            attack: 0.001,
            decay: 0.07
        });

        // Secondary body thwack
        playNoiseBurst(c, now + 0.008, master, {
            duration: 0.1,
            filterType: 'lowpass',
            filterFreq: 140 + Math.min(damage * 3, 80),
            filterQ: 0.5,
            gainPeak: 0.35 * intensity,
            attack: 0.003,
            decay: 0.14
        });

        // Core punch thud — deep sine drop
        const thud = c.createOscillator();
        thud.type = 'sine';
        const thudStart = 95 + Math.min(damage * 3, 50);
        thud.frequency.setValueAtTime(thudStart, now);
        thud.frequency.exponentialRampToValueAtTime(32, now + 0.22);

        const thudGain = c.createGain();
        thudGain.gain.setValueAtTime(0.001, now);
        thudGain.gain.linearRampToValueAtTime(0.75 * intensity, now + 0.006);
        thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

        thud.connect(thudGain);
        thudGain.connect(master);
        thud.start(now);
        thud.stop(now + 0.24);

        // Knuckle/body weight layer
        const body = c.createOscillator();
        body.type = 'triangle';
        body.frequency.setValueAtTime(68 + Math.min(damage * 2, 30), now + 0.004);
        body.frequency.exponentialRampToValueAtTime(28, now + 0.18);

        const bodyGain = c.createGain();
        bodyGain.gain.setValueAtTime(0.001, now + 0.004);
        bodyGain.gain.linearRampToValueAtTime(0.4 * intensity, now + 0.012);
        bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        body.connect(bodyGain);
        bodyGain.connect(master);
        body.start(now + 0.004);
        body.stop(now + 0.2);

        // Heavy hits — extra sub whump
        if (damage >= 6) {
            const sub = c.createOscillator();
            sub.type = 'sine';
            sub.frequency.setValueAtTime(52, now + 0.01);
            sub.frequency.exponentialRampToValueAtTime(20, now + 0.32);

            const subGain = c.createGain();
            subGain.gain.setValueAtTime(0.001, now + 0.01);
            subGain.gain.linearRampToValueAtTime(0.55 * intensity, now + 0.022);
            subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);

            sub.connect(subGain);
            subGain.connect(master);
            sub.start(now + 0.01);
            sub.stop(now + 0.34);
        }
    }

    return {
        SOUND_ENABLED_KEY,
        isEnabled,
        setEnabled,
        toggleEnabled,
        startDiceRoll,
        stopDiceRoll,
        playPlayerHit
    };
})();
