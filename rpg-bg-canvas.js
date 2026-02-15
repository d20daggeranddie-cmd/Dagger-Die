/**
 * RPG Background Canvas - Shared script for Dagger & Die
 * Add <canvas id="rpgParticleCanvas"></canvas> and include this script.
 * Alternatively supports: gameParticleCanvas, idxParticleCanvas (legacy IDs)
 */
(function() {
    const canvas = document.getElementById('rpgParticleCanvas') || document.getElementById('gameParticleCanvas') || document.getElementById('idxParticleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, time = 0;
    function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    const GOLD = { r: 180, g: 140, b: 50 }, SILVER = { r: 160, g: 170, b: 190 }, BLUE = { r: 100, g: 130, b: 200 }, PURPLE = { r: 140, g: 90, b: 180 };

    class Mote {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w; this.y = Math.random() * h; this.size = Math.random() * 1.5 + 0.3;
            this.speedX = (Math.random() - 0.5) * 0.3; this.speedY = (Math.random() - 0.5) * 0.2 - 0.1;
            this.opacity = Math.random() * 0.3 + 0.05; this.pulse = Math.random() * Math.PI * 2; this.pulseSpeed = Math.random() * 0.02 + 0.005;
            const t = Math.random();
            if (t < 0.4) { this.r = 180+Math.random()*40; this.g = 130+Math.random()*30; this.b = 40+Math.random()*30; }
            else if (t < 0.7) { this.r = 100+Math.random()*40; this.g = 120+Math.random()*40; this.b = 180+Math.random()*40; }
            else { this.r = 160+Math.random()*30; this.g = 160+Math.random()*30; this.b = 160+Math.random()*30; }
        }
        update() { this.x += this.speedX; this.y += this.speedY; this.pulse += this.pulseSpeed; if (this.x < -10 || this.x > w+10 || this.y < -10 || this.y > h+10) this.reset(); }
        draw() {
            const o = this.opacity * (0.5 + 0.5 * Math.sin(this.pulse));
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.r|0},${this.g|0},${this.b|0},${o})`;
            ctx.shadowColor = `rgba(${this.r|0},${this.g|0},${this.b|0},${o*0.5})`; ctx.shadowBlur = this.size * 4; ctx.fill(); ctx.shadowBlur = 0;
        }
    }
    const motes = Array.from({ length: 60 }, () => new Mote());

    class ThrowingKnife {
        constructor() { this.reset(); }
        reset() {
            this.fromLeft = Math.random() > 0.5;
            this.x = this.fromLeft ? -80 : w + 80;
            this.y = Math.random() * h * 0.7 + h * 0.1;
            this.speedX = (this.fromLeft ? 1 : -1) * (Math.random() * 1.5 + 0.8);
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (this.fromLeft ? 1 : -1) * (Math.random() * 0.06 + 0.03);
            this.scale = Math.random() * 0.5 + 0.6;
            this.opacity = 0;
            this.maxOpacity = Math.random() * 0.18 + 0.08;
            this.trail = [];
            this.wobbleAmp = Math.random() * 0.5;
            this.wobbleFreq = Math.random() * 0.02 + 0.01;
            this.wobblePhase = Math.random() * Math.PI * 2;
        }
        update() {
            this.x += this.speedX;
            this.wobblePhase += this.wobbleFreq;
            this.y += this.speedY + Math.sin(this.wobblePhase) * this.wobbleAmp;
            this.rotation += this.rotSpeed;
            const margin = 200;
            if (this.fromLeft) {
                if (this.x < margin) this.opacity = Math.min(this.maxOpacity, this.opacity + 0.002);
                else if (this.x > w - margin) this.opacity = Math.max(0, this.opacity - 0.003);
                else this.opacity = Math.min(this.maxOpacity, this.opacity + 0.001);
                if (this.x > w + 100) this.reset();
            } else {
                if (this.x > w - margin) this.opacity = Math.min(this.maxOpacity, this.opacity + 0.002);
                else if (this.x < margin) this.opacity = Math.max(0, this.opacity - 0.003);
                else this.opacity = Math.min(this.maxOpacity, this.opacity + 0.001);
                if (this.x < -100) this.reset();
            }
            this.trail.push({ x: this.x, y: this.y, opacity: this.opacity * 0.3 });
            if (this.trail.length > 15) this.trail.shift();
        }
        draw() {
            for (let i = 0; i < this.trail.length; i++) {
                const t = this.trail[i];
                const a = (i / this.trail.length) * t.opacity * 0.4;
                ctx.beginPath(); ctx.arc(t.x, t.y, 1.5 * this.scale, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(180,160,80,${a})`; ctx.fill();
            }
            if (this.opacity < 0.01) return;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.scale(this.scale, this.scale);
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.moveTo(0, -30);
            ctx.lineTo(-4.5, -10);
            ctx.lineTo(-3.5, 0);
            ctx.lineTo(3.5, 0);
            ctx.lineTo(4.5, -10);
            ctx.closePath();
            const bladeGrad = ctx.createLinearGradient(-4, -30, 4, 0);
            bladeGrad.addColorStop(0, '#d4dced');
            bladeGrad.addColorStop(0.4, '#a8b4c8');
            bladeGrad.addColorStop(0.8, '#7a8498');
            bladeGrad.addColorStop(1, '#5a6478');
            ctx.fillStyle = bladeGrad;
            ctx.fill();
            ctx.strokeStyle = 'rgba(220,235,255,0.5)';
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, -27);
            ctx.lineTo(0, -3);
            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(-1, -28);
            ctx.lineTo(-3.8, -10);
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.lineWidth = 0.4;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(-7, -1);
            ctx.lineTo(-6, 3);
            ctx.lineTo(6, 3);
            ctx.lineTo(7, -1);
            ctx.closePath();
            ctx.fillStyle = '#b48c3c';
            ctx.fill();
            ctx.strokeStyle = 'rgba(220,180,60,0.3)';
            ctx.lineWidth = 0.4;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(-3, 3);
            ctx.lineTo(-2.5, 20);
            ctx.lineTo(2.5, 20);
            ctx.lineTo(3, 3);
            ctx.closePath();
            const gripGrad = ctx.createLinearGradient(-3, 3, 3, 20);
            gripGrad.addColorStop(0, '#5a3d22');
            gripGrad.addColorStop(0.5, '#7a5835');
            gripGrad.addColorStop(1, '#3e2a16');
            ctx.fillStyle = gripGrad;
            ctx.fill();
            for (let gy = 5; gy < 19; gy += 2.5) {
                ctx.beginPath();
                ctx.moveTo(-2.5, gy);
                ctx.lineTo(2.5, gy + 1);
                ctx.strokeStyle = 'rgba(180,140,60,0.25)';
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }
            ctx.beginPath();
            ctx.moveTo(-3.5, 20);
            ctx.lineTo(-4, 23);
            ctx.lineTo(0, 25);
            ctx.lineTo(4, 23);
            ctx.lineTo(3.5, 20);
            ctx.closePath();
            ctx.fillStyle = '#b48c3c';
            ctx.fill();
            ctx.shadowColor = 'rgba(180,210,255,0.4)';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(0, -30);
            ctx.lineTo(-1.5, -22);
            ctx.lineTo(1.5, -22);
            ctx.closePath();
            ctx.fillStyle = 'rgba(200,225,255,0.12)';
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
            ctx.restore();
        }
    }
    const knives = Array.from({ length: 4 }, () => { const k = new ThrowingKnife(); k.x = Math.random() * w; return k; });

    class TumblingD20 {
        constructor() { this.reset(); }
        reset() {
            this.fromLeft = Math.random() > 0.5;
            this.x = this.fromLeft ? -60 : w + 60;
            this.y = Math.random() * h * 0.6 + h * 0.2;
            this.speedX = (this.fromLeft ? 1 : -1) * (Math.random() * 0.6 + 0.3);
            this.speedY = (Math.random() - 0.5) * 0.15;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.018;
            this.scale = Math.random() * 0.4 + 0.5;
            this.opacity = 0;
            this.maxOpacity = Math.random() * 0.14 + 0.06;
            this.faceValue = Math.floor(Math.random() * 20) + 1;
            this.faceTimer = 0;
            const tints = [GOLD, SILVER, BLUE, PURPLE];
            this.tint = tints[Math.floor(Math.random() * tints.length)];
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += this.rotSpeed;
            this.faceTimer++;
            if (this.faceTimer > 50 + Math.random() * 40) { this.faceValue = Math.floor(Math.random() * 20) + 1; this.faceTimer = 0; }
            const margin = 200;
            if (this.fromLeft) {
                if (this.x < margin) this.opacity = Math.min(this.maxOpacity, this.opacity + 0.0015);
                else if (this.x > w - margin) this.opacity = Math.max(0, this.opacity - 0.002);
                else this.opacity = Math.min(this.maxOpacity, this.opacity + 0.0008);
                if (this.x > w + 80) this.reset();
            } else {
                if (this.x > w - margin) this.opacity = Math.min(this.maxOpacity, this.opacity + 0.0015);
                else if (this.x < margin) this.opacity = Math.max(0, this.opacity - 0.002);
                else this.opacity = Math.min(this.maxOpacity, this.opacity + 0.0008);
                if (this.x < -80) this.reset();
            }
        }
        draw() {
            if (this.opacity < 0.005) return;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.scale(this.scale, this.scale);
            ctx.globalAlpha = this.opacity;
            const R = 28;
            const { r, g, b } = this.tint;
            const pts = [];
            for (let i = 0; i < 3; i++) { const angle = (i * Math.PI * 2 / 3) - Math.PI / 2; pts.push({ x: Math.cos(angle) * R, y: Math.sin(angle) * R }); }
            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y);
            ctx.lineTo(pts[1].x, pts[1].y);
            ctx.lineTo(pts[2].x, pts[2].y);
            ctx.closePath();
            const dGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, R);
            dGrad.addColorStop(0, `rgba(${r+50},${g+50},${b+50},0.35)`);
            dGrad.addColorStop(1, `rgba(${r},${g},${b},0.1)`);
            ctx.fillStyle = dGrad;
            ctx.fill();
            ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
            const inner = [];
            for (let i = 0; i < 3; i++) { const angle = (i * Math.PI * 2 / 3) + Math.PI / 6; inner.push({ x: Math.cos(angle) * R * 0.4, y: Math.sin(angle) * R * 0.4 }); }
            ctx.strokeStyle = `rgba(${r},${g},${b},0.25)`;
            ctx.lineWidth = 0.7;
            for (let i = 0; i < 3; i++) {
                ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(inner[i].x, inner[i].y); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(inner[(i+2)%3].x, inner[(i+2)%3].y); ctx.stroke();
            }
            ctx.beginPath();
            ctx.moveTo(inner[0].x, inner[0].y);
            ctx.lineTo(inner[1].x, inner[1].y);
            ctx.lineTo(inner[2].x, inner[2].y);
            ctx.closePath();
            ctx.strokeStyle = `rgba(${r},${g},${b},0.35)`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
            ctx.font = 'bold 15px serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
            ctx.shadowBlur = 8;
            ctx.fillStyle = `rgba(${r+70},${g+70},${b+70},0.85)`;
            ctx.fillText(this.faceValue.toString(), 0, 1);
            ctx.shadowBlur = 0;
            ctx.beginPath();
            ctx.arc(0, 0, R + 5, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${r},${g},${b},0.06)`;
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.globalAlpha = 1;
            ctx.restore();
        }
    }
    const dice = Array.from({ length: 3 }, () => { const d = new TumblingD20(); d.x = Math.random() * w; return d; });

    class CrossedDaggers {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.scale = Math.random() * 0.7 + 0.4;
            this.opacity = 0;
            this.maxOpacity = Math.random() * 0.07 + 0.03;
            this.phase = Math.random() * Math.PI * 2;
            this.phaseSpeed = Math.random() * 0.008 + 0.003;
            this.rotation = (Math.random() - 0.5) * 0.3;
            this.lifespan = Math.random() * 800 + 400;
            this.age = 0;
        }
        update() {
            this.age++;
            this.phase += this.phaseSpeed;
            const progress = this.age / this.lifespan;
            if (progress < 0.2) this.opacity = (progress / 0.2) * this.maxOpacity;
            else if (progress > 0.8) this.opacity = ((1 - progress) / 0.2) * this.maxOpacity;
            else this.opacity = this.maxOpacity;
            this.opacity *= (0.7 + 0.3 * Math.sin(this.phase));
            if (this.age > this.lifespan) this.reset();
        }
        draw() {
            if (this.opacity < 0.005) return;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.scale(this.scale, this.scale);
            ctx.globalAlpha = this.opacity;
            for (let side = -1; side <= 1; side += 2) {
                ctx.save();
                ctx.rotate(side * 0.5);
                ctx.beginPath();
                ctx.moveTo(0, -24);
                ctx.lineTo(-3.5, -5);
                ctx.lineTo(0, 0);
                ctx.lineTo(3.5, -5);
                ctx.closePath();
                ctx.fillStyle = 'rgba(180,190,215,0.6)';
                ctx.fill();
                ctx.strokeStyle = 'rgba(220,230,255,0.35)';
                ctx.lineWidth = 0.5;
                ctx.stroke();
                ctx.fillStyle = 'rgba(180,140,60,0.5)';
                ctx.fillRect(-6, 0, 12, 2.5);
                ctx.fillStyle = 'rgba(80,50,30,0.5)';
                ctx.fillRect(-2, 2.5, 4, 13);
                ctx.beginPath();
                ctx.arc(0, 17, 2.8, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(180,140,60,0.4)';
                ctx.fill();
                ctx.restore();
            }
            ctx.globalAlpha = 1;
            ctx.restore();
        }
    }
    const crossedDaggers = Array.from({ length: 5 }, () => new CrossedDaggers());

    class PixelIcon {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.opacity = 0;
            this.maxOpacity = Math.random() * 0.12 + 0.04;
            this.bobSpeed = Math.random() * 0.015 + 0.008;
            this.bobAmp = Math.random() * 3 + 2;
            this.bobPhase = Math.random() * Math.PI * 2;
            this.scale = Math.random() * 0.9 + 0.5;
            this.lifespan = Math.random() * 600 + 300;
            this.age = 0;
            this.type = ['sword', 'potion', 'shield', 'skull', 'chest', 'key', 'axe', 'heart'][Math.floor(Math.random() * 8)];
        }
        update() {
            this.age++;
            this.bobPhase += this.bobSpeed;
            const progress = this.age / this.lifespan;
            if (progress < 0.15) this.opacity = (progress / 0.15) * this.maxOpacity;
            else if (progress > 0.85) this.opacity = ((1 - progress) / 0.15) * this.maxOpacity;
            else this.opacity = this.maxOpacity;
            if (this.age > this.lifespan) this.reset();
        }
        draw() {
            if (this.opacity < 0.005) return;
            const bob = Math.sin(this.bobPhase) * this.bobAmp;
            ctx.save();
            ctx.translate(this.x, this.y + bob);
            ctx.scale(this.scale, this.scale);
            ctx.globalAlpha = this.opacity;
            ctx.imageSmoothingEnabled = false;
            const s = 2.5;
            switch(this.type) {
                case 'sword': this.drawSword(s); break;
                case 'potion': this.drawPotion(s); break;
                case 'shield': this.drawShield(s); break;
                case 'skull': this.drawSkull(s); break;
                case 'chest': this.drawChest(s); break;
                case 'key': this.drawKey(s); break;
                case 'axe': this.drawAxe(s); break;
                case 'heart': this.drawHeart(s); break;
            }
            ctx.globalAlpha = 1;
            ctx.restore();
        }
        px(x, y, s, color) { ctx.fillStyle = color; ctx.fillRect(x * s, y * s, s, s); }
        drawSword(s) {
            const bl = 'rgba(200,215,235,0.8)'; const bs = 'rgba(150,165,185,0.6)'; const gd = 'rgba(180,140,50,0.8)'; const hd = 'rgba(100,60,30,0.7)';
            this.px(0,-8,s,bl); this.px(-1,-7,s,bs); this.px(0,-7,s,bl); this.px(1,-7,s,bs);
            for (let y=-6;y<=-1;y++) { this.px(-1,y,s,bs); this.px(0,y,s,bl); this.px(1,y,s,bs); }
            for (let x=-3;x<=3;x++) this.px(x,0,s,gd);
            for (let y=1;y<=5;y++) this.px(0,y,s,hd);
            this.px(-1,6,s,gd); this.px(0,6,s,gd); this.px(1,6,s,gd);
        }
        drawPotion(s) {
            const lq = 'rgba(80,180,80,0.7)'; const gl = 'rgba(180,190,200,0.6)'; const ck = 'rgba(140,100,50,0.7)';
            this.px(-1,-4,s,ck); this.px(0,-4,s,ck); this.px(1,-4,s,ck);
            this.px(0,-3,s,gl); this.px(0,-2,s,gl);
            for (let y=-1;y<=3;y++) { this.px(-2,y,s,gl); this.px(-1,y,s,lq); this.px(0,y,s,lq); this.px(1,y,s,lq); this.px(2,y,s,gl); }
            this.px(-1,4,s,gl); this.px(0,4,s,gl); this.px(1,4,s,gl);
            this.px(-1,0,s,'rgba(150,255,150,0.35)');
        }
        drawShield(s) {
            const wd = 'rgba(140,100,50,0.7)'; const gd = 'rgba(180,140,60,0.8)'; const dk = 'rgba(100,70,35,0.6)';
            for (let x=-2;x<=2;x++) this.px(x,-4,s,gd);
            for (let y=-3;y<=1;y++) { this.px(-3,y,s,gd); this.px(-2,y,s,wd); this.px(-1,y,s,wd); this.px(0,y,s,dk); this.px(1,y,s,wd); this.px(2,y,s,wd); this.px(3,y,s,gd); }
            this.px(-2,2,s,gd); this.px(-1,2,s,wd); this.px(0,2,s,wd); this.px(1,2,s,wd); this.px(2,2,s,gd);
            this.px(-1,3,s,gd); this.px(0,3,s,wd); this.px(1,3,s,gd); this.px(0,4,s,gd); this.px(0,-1,s,gd);
        }
        drawSkull(s) {
            const bn = 'rgba(200,200,190,0.7)'; const sh = 'rgba(160,160,150,0.5)'; const ey = 'rgba(40,40,50,0.8)';
            this.px(-1,-3,s,bn); this.px(0,-3,s,bn); this.px(1,-3,s,bn);
            for (let x=-2;x<=2;x++) this.px(x,-2,s,bn);
            this.px(-2,-1,s,bn); this.px(-1,-1,s,ey); this.px(0,-1,s,sh); this.px(1,-1,s,ey); this.px(2,-1,s,bn);
            this.px(-2,0,s,bn); this.px(-1,0,s,sh); this.px(0,0,s,ey); this.px(1,0,s,sh); this.px(2,0,s,bn);
            this.px(-2,1,s,sh); this.px(-1,1,s,bn); this.px(0,1,s,sh); this.px(1,1,s,bn); this.px(2,1,s,sh);
            this.px(-1,2,s,sh); this.px(0,2,s,bn); this.px(1,2,s,sh);
        }
        drawChest(s) {
            const wd = 'rgba(140,90,40,0.7)'; const gd = 'rgba(180,140,50,0.8)';
            for (let x=-3;x<=3;x++) this.px(x,-3,s,gd);
            for (let x=-3;x<=3;x++) this.px(x,-2,s,wd);
            for (let y=-1;y<=2;y++) { this.px(-3,y,s,gd); this.px(3,y,s,gd); for (let x=-2;x<=2;x++) this.px(x,y,s,y===-1?gd:wd); }
            for (let x=-3;x<=3;x++) this.px(x,3,s,gd);
            this.px(0,0,s,'rgba(220,180,60,0.9)'); this.px(0,1,s,'rgba(220,180,60,0.7)');
        }
        drawKey(s) {
            const gd = 'rgba(200,170,60,0.8)'; const dk = 'rgba(160,130,40,0.6)';
            this.px(-1,-3,s,gd); this.px(0,-3,s,gd); this.px(1,-3,s,gd);
            this.px(-2,-2,s,gd); this.px(2,-2,s,gd); this.px(-2,-1,s,gd); this.px(2,-1,s,gd);
            this.px(-1,0,s,gd); this.px(0,0,s,gd); this.px(1,0,s,gd);
            for (let y=1;y<=4;y++) this.px(0,y,s,dk);
            this.px(1,3,s,gd); this.px(1,4,s,gd); this.px(2,4,s,gd);
        }
        drawAxe(s) {
            const bl = 'rgba(180,190,210,0.7)'; const hd = 'rgba(120,80,40,0.7)'; const gd = 'rgba(180,140,50,0.6)';
            this.px(-3,-3,s,bl); this.px(-2,-3,s,bl); this.px(-1,-3,s,bl);
            this.px(-4,-2,s,bl); this.px(-3,-2,s,bl); this.px(-2,-2,s,bl); this.px(-1,-2,s,bl);
            this.px(-4,-1,s,bl); this.px(-3,-1,s,bl); this.px(-2,-1,s,bl); this.px(-1,-1,s,bl);
            this.px(-3,0,s,bl); this.px(-2,0,s,bl); this.px(-1,0,s,bl);
            for (let y=-2;y<=5;y++) this.px(0,y,s,hd);
            this.px(0,6,s,gd);
        }
        drawHeart(s) {
            const rd = 'rgba(200,50,60,0.7)'; const lt = 'rgba(240,100,110,0.5)'; const dk = 'rgba(150,30,40,0.6)';
            this.px(-2,-2,s,rd); this.px(-1,-2,s,rd); this.px(1,-2,s,rd); this.px(2,-2,s,rd);
            this.px(-3,-1,s,rd); this.px(-2,-1,s,lt); this.px(-1,-1,s,rd); this.px(0,-1,s,rd); this.px(1,-1,s,rd); this.px(2,-1,s,rd); this.px(3,-1,s,rd);
            this.px(-3,0,s,rd); this.px(-2,0,s,rd); this.px(-1,0,s,rd); this.px(0,0,s,rd); this.px(1,0,s,rd); this.px(2,0,s,rd); this.px(3,0,s,rd);
            this.px(-2,1,s,dk); this.px(-1,1,s,rd); this.px(0,1,s,rd); this.px(1,1,s,rd); this.px(2,1,s,dk);
            this.px(-1,2,s,dk); this.px(0,2,s,rd); this.px(1,2,s,dk);
            this.px(0,3,s,dk);
        }
    }
    const pixelIcons = Array.from({ length: 10 }, () => new PixelIcon());

    class SparkBurst {
        constructor() { this.sparks = []; this.active = false; this.timer = Math.random() * 400 + 200; }
        reset() { this.active = false; this.timer = Math.random() * 500 + 300; this.sparks = []; }
        trigger() {
            this.active = true;
            const x = Math.random() * w, y = Math.random() * h;
            this.sparks = [];
            const count = Math.floor(Math.random() * 10) + 5;
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 2 + 0.5;
                this.sparks.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, decay: Math.random() * 0.015 + 0.008, size: Math.random() * 2.5 + 0.5, isGold: Math.random() > 0.4 });
            }
        }
        update() {
            if (!this.active) { this.timer--; if (this.timer <= 0) this.trigger(); return; }
            let alive = false;
            for (const s of this.sparks) {
                s.x += s.vx; s.y += s.vy;
                s.vy += 0.012; s.vx *= 0.995;
                s.life -= s.decay;
                if (s.life > 0) alive = true;
            }
            if (!alive) this.reset();
        }
        draw() {
            if (!this.active) return;
            for (const s of this.sparks) {
                if (s.life <= 0) continue;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
                if (s.isGold) { ctx.fillStyle = `rgba(220,180,60,${s.life * 0.18})`; ctx.shadowColor = `rgba(240,200,80,${s.life * 0.12})`; }
                else { ctx.fillStyle = `rgba(200,210,240,${s.life * 0.15})`; ctx.shadowColor = `rgba(180,200,255,${s.life * 0.1})`; }
                ctx.shadowBlur = 5; ctx.fill(); ctx.shadowBlur = 0;
            }
        }
    }
    const sparkBursts = Array.from({ length: 3 }, () => new SparkBurst());

    class FloatingD6 {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.opacity = 0;
            this.maxOpacity = Math.random() * 0.1 + 0.04;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.005;
            this.bobPhase = Math.random() * Math.PI * 2;
            this.bobSpeed = Math.random() * 0.01 + 0.005;
            this.bobAmp = Math.random() * 4 + 2;
            this.scale = Math.random() * 0.6 + 0.4;
            this.face = Math.floor(Math.random() * 6) + 1;
            this.lifespan = Math.random() * 700 + 350;
            this.age = 0;
            this.tint = [GOLD, SILVER, PURPLE][Math.floor(Math.random() * 3)];
        }
        update() {
            this.age++;
            this.rotation += this.rotSpeed;
            this.bobPhase += this.bobSpeed;
            const progress = this.age / this.lifespan;
            if (progress < 0.15) this.opacity = (progress / 0.15) * this.maxOpacity;
            else if (progress > 0.85) this.opacity = ((1 - progress) / 0.15) * this.maxOpacity;
            else this.opacity = this.maxOpacity;
            if (Math.random() < 0.003) this.face = Math.floor(Math.random() * 6) + 1;
            if (this.age > this.lifespan) this.reset();
        }
        draw() {
            if (this.opacity < 0.005) return;
            const bob = Math.sin(this.bobPhase) * this.bobAmp;
            ctx.save();
            ctx.translate(this.x, this.y + bob);
            ctx.rotate(this.rotation);
            ctx.scale(this.scale, this.scale);
            ctx.globalAlpha = this.opacity;
            const sz = 18;
            const { r, g, b } = this.tint;
            ctx.beginPath();
            const rd2 = 3;
            ctx.moveTo(-sz + rd2, -sz);
            ctx.lineTo(sz - rd2, -sz);
            ctx.quadraticCurveTo(sz, -sz, sz, -sz + rd2);
            ctx.lineTo(sz, sz - rd2);
            ctx.quadraticCurveTo(sz, sz, sz - rd2, sz);
            ctx.lineTo(-sz + rd2, sz);
            ctx.quadraticCurveTo(-sz, sz, -sz, sz - rd2);
            ctx.lineTo(-sz, -sz + rd2);
            ctx.quadraticCurveTo(-sz, -sz, -sz + rd2, -sz);
            ctx.closePath();
            const dGrad = ctx.createLinearGradient(-sz, -sz, sz, sz);
            dGrad.addColorStop(0, `rgba(${r+30},${g+30},${b+30},0.25)`);
            dGrad.addColorStop(1, `rgba(${r-20},${g-20},${b-20},0.1)`);
            ctx.fillStyle = dGrad;
            ctx.fill();
            ctx.strokeStyle = `rgba(${r},${g},${b},0.4)`;
            ctx.lineWidth = 1;
            ctx.stroke();
            const pipR = 2.5;
            const pipColor = `rgba(${r+80},${g+80},${b+80},0.7)`;
            ctx.fillStyle = pipColor;
            const pipPositions = { 1: [[0,0]], 2: [[-7,-7],[7,7]], 3: [[-7,-7],[0,0],[7,7]], 4: [[-7,-7],[7,-7],[-7,7],[7,7]], 5: [[-7,-7],[7,-7],[0,0],[-7,7],[7,7]], 6: [[-7,-7],[7,-7],[-7,0],[7,0],[-7,7],[7,7]] };
            for (const [px, py] of pipPositions[this.face]) { ctx.beginPath(); ctx.arc(px, py, pipR, 0, Math.PI * 2); ctx.fill(); }
            ctx.globalAlpha = 1;
            ctx.restore();
        }
    }
    const d6dice = Array.from({ length: 4 }, () => new FloatingD6());

    function drawCenterD20(t) {
        ctx.save();
        ctx.translate(w * 0.5, h * 0.5);
        const R = Math.min(w, h) * 0.18, rot = t * 0.0003, tilt = Math.sin(t * 0.0002) * 0.15;
        const vertices = [{ x: 0, y: -R }];
        for (let i = 0; i < 5; i++) { const a = (i * Math.PI * 2 / 5) + rot; vertices.push({ x: Math.cos(a) * R * 0.85, y: -R * 0.35 + Math.sin(a + tilt) * R * 0.15 }); }
        for (let i = 0; i < 5; i++) { const a = (i * Math.PI * 2 / 5) + rot + Math.PI / 5; vertices.push({ x: Math.cos(a) * R * 0.85, y: R * 0.35 + Math.sin(a + tilt) * R * 0.15 }); }
        vertices.push({ x: 0, y: R });
        const edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[2,3],[3,4],[4,5],[5,1],[1,6],[2,6],[2,7],[3,7],[3,8],[4,8],[4,9],[5,9],[5,10],[1,10],[6,7],[7,8],[8,9],[9,10],[10,6],[6,11],[7,11],[8,11],[9,11],[10,11]];
        const baseOpacity = 0.035 + Math.sin(t * 0.001) * 0.012;
        ctx.lineWidth = 0.8;
        for (const [a,b] of edges) { ctx.beginPath(); ctx.moveTo(vertices[a].x, vertices[a].y); ctx.lineTo(vertices[b].x, vertices[b].y); ctx.strokeStyle = `rgba(180,140,60,${baseOpacity})`; ctx.stroke(); }
        for (const v of vertices) { ctx.beginPath(); ctx.arc(v.x, v.y, 1.8, 0, Math.PI * 2); ctx.fillStyle = `rgba(180,140,60,${baseOpacity * 1.5})`; ctx.fill(); }
        ctx.font = `bold ${R * 0.35}px serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillStyle = `rgba(180,140,60,${baseOpacity * 0.8})`; ctx.fillText('20', 0, 0);
        ctx.restore();
    }

    function animate() {
        time++;
        ctx.clearRect(0, 0, w, h);
        drawCenterD20(time);
        for (const m of motes) { m.update(); m.draw(); }
        for (const cd of crossedDaggers) { cd.update(); cd.draw(); }
        for (const pi of pixelIcons) { pi.update(); pi.draw(); }
        for (const d of d6dice) { d.update(); d.draw(); }
        for (const k of knives) { k.update(); k.draw(); }
        for (const d of dice) { d.update(); d.draw(); }
        for (const sb of sparkBursts) { sb.update(); sb.draw(); }
        requestAnimationFrame(animate);
    }
    animate();
})();
