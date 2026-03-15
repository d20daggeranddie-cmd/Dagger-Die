/**
 * RPG Background CSS Particles & Runes
 * Shared script for Dagger & Die pages.
 *
 * Usage: <script src="rpg-bg-particles.js"
 *          data-particle-container="idxCssParticles"
 *          data-particle-class="idx-bg-particle"
 *          data-rune-container="idxRuneContainer"
 *          data-rune-class="idx-bg-rune"></script>
 */
(function() {
    var script = document.currentScript;
    if (!script) return;

    var particleContainerId = script.getAttribute('data-particle-container');
    var particleClass       = script.getAttribute('data-particle-class');
    var runeContainerId     = script.getAttribute('data-rune-container');
    var runeClass           = script.getAttribute('data-rune-class');

    var colors = [
        'rgba(200, 140, 50, 0.6)', 'rgba(180, 120, 60, 0.4)',
        'rgba(160, 130, 80, 0.3)', 'rgba(140, 160, 200, 0.2)',
        'rgba(200, 180, 100, 0.5)'
    ];
    var container = particleContainerId && document.getElementById(particleContainerId);
    if (container) {
        for (var i = 0; i < 30; i++) {
            var p = document.createElement('div');
            p.className = particleClass;
            var size = Math.random() * 3 + 1;
            var color = colors[Math.floor(Math.random() * colors.length)];
            p.style.cssText = 'width:' + size + 'px;height:' + size + 'px;background:' + color +
                ';box-shadow:0 0 ' + (size * 2) + 'px ' + color +
                ';left:' + (Math.random() * 100) + '%;bottom:' + (Math.random() * 20 - 10) +
                '%;animation-duration:' + (Math.random() * 15 + 10) +
                's;animation-delay:' + (Math.random() * 15) + 's;';
            container.appendChild(p);
        }
    }

    var glyphs = [
        '\u16A0','\u16A2','\u16A6','\u16A8','\u16B1','\u16B7','\u16B9','\u16BE',
        '\u16C1','\u16C3','\u16C7','\u16C8','\u16CA','\u16CF','\u16D2','\u16D6',
        '\u16DA','\u16DE','\u16DF','\u16E0'
    ];
    var runeColors = ['#b48c3c', '#8a7a5a', '#6a7aa0', '#9a8a6a', '#7a6a9a'];
    var runeContainer = runeContainerId && document.getElementById(runeContainerId);
    if (runeContainer) {
        for (var j = 0; j < 12; j++) {
            var r = document.createElement('div');
            r.className = runeClass;
            r.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
            r.style.cssText = 'left:' + (Math.random() * 90 + 5) + '%;top:' + (Math.random() * 80 + 10) +
                '%;font-size:' + (Math.random() * 18 + 14) + 'px;color:' +
                runeColors[Math.floor(Math.random() * runeColors.length)] +
                ';animation-duration:' + (Math.random() * 8 + 8) +
                's;animation-delay:' + (Math.random() * 10) + 's;';
            runeContainer.appendChild(r);
        }
    }
})();
