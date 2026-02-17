/**
 * Character avatars from dagger-die-avatars.html for Dagger & Die.
 * Use DAGGERDIE_PREFIX_SVG_IDS(svg, prefix) when injecting to avoid duplicate IDs.
 */
(function (global) {
    function prefixSvgIds(svgString, prefix) {
        if (!svgString || !prefix) return svgString;
        return svgString
            .replace(/\bid="([^"]+)"/g, 'id="' + prefix + '-$1"')
            .replace(/url\(#([^)]+)\)/g, 'url(#' + prefix + '-$1)');
    }
    const CHARACTERS = [
        { id: "knight", name: "Knight", color: "#8b7355", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="knightBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#3a4a6a"/>
          <stop offset="100%" stop-color="#1a2030"/>
        </radialGradient>
        <linearGradient id="knightHelm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a8b8cc"/>
          <stop offset="100%" stop-color="#5a6a7a"/>
        </linearGradient>
        <linearGradient id="knightArmor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8090a8"/>
          <stop offset="100%" stop-color="#4a5a6e"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#knightBg)" stroke="#4a5e80" stroke-width="2"/>
      <!-- Shoulders/Armor -->
      <path d="M25 78 Q25 62 38 58 L50 55 L62 58 Q75 62 75 78" fill="url(#knightArmor)" stroke="#6a7a90" stroke-width="0.8"/>
      <path d="M38 62 L44 60 L44 66 Z" fill="#6a7a90" opacity="0.6"/>
      <path d="M62 62 L56 60 L56 66 Z" fill="#6a7a90" opacity="0.6"/>
      <!-- Neck guard -->
      <rect x="43" y="52" width="14" height="8" rx="2" fill="#6a7a8e" stroke="#5a6a7e" stroke-width="0.5"/>
      <!-- Helmet -->
      <path d="M32 42 Q32 18 50 16 Q68 18 68 42 Q68 52 50 54 Q32 52 32 42Z" fill="url(#knightHelm)" stroke="#8a9ab0" stroke-width="1"/>
      <!-- Visor slit -->
      <path d="M36 38 Q50 42 64 38" stroke="#1a2030" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Visor dots -->
      <circle cx="40" cy="37" r="1" fill="#80d0ff" opacity="0.8"/>
      <circle cx="60" cy="37" r="1" fill="#80d0ff" opacity="0.8"/>
      <!-- Helmet crest -->
      <path d="M50 16 L50 8 Q55 10 54 16" fill="#c9a84c" stroke="#a08030" stroke-width="0.5"/>
      <path d="M50 8 Q48 6 50 4 Q52 6 54 8" fill="#d4b050" opacity="0.8"/>
      <!-- Cross emblem on chest -->
      <rect x="48" y="62" width="4" height="10" rx="1" fill="#c9a84c" opacity="0.7"/>
      <rect x="45" y="65" width="10" height="3" rx="1" fill="#c9a84c" opacity="0.7"/>
      <!-- Rim highlight -->
      <path d="M32 42 Q32 20 50 18" stroke="#c0d0e0" stroke-width="0.6" fill="none" opacity="0.4"/>
    </svg>` },
        { id: "mage", name: "Mage", color: "#6a3d9a", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mageBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#3a2a5a"/>
          <stop offset="100%" stop-color="#18102a"/>
        </radialGradient>
        <linearGradient id="mageHat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6a3aaa"/>
          <stop offset="100%" stop-color="#3a1a6a"/>
        </linearGradient>
        <linearGradient id="mageRobe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4a2888"/>
          <stop offset="100%" stop-color="#2a1555"/>
        </linearGradient>
        <filter id="mageGlow">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#mageBg)" stroke="#5a3a8a" stroke-width="2"/>
      <!-- Stars background -->
      <circle cx="20" cy="25" r="1" fill="#b090e0" opacity="0.5"/>
      <circle cx="75" cy="20" r="0.8" fill="#b090e0" opacity="0.4"/>
      <circle cx="80" cy="45" r="1.2" fill="#b090e0" opacity="0.3"/>
      <circle cx="15" cy="60" r="0.8" fill="#b090e0" opacity="0.3"/>
      <!-- Robe/body -->
      <path d="M28 78 Q30 60 40 56 L50 53 L60 56 Q70 60 72 78" fill="url(#mageRobe)" stroke="#5a3090" stroke-width="0.8"/>
      <!-- Robe collar -->
      <path d="M40 56 Q50 50 60 56" fill="#5a2e90" stroke="#6a3aa0" stroke-width="0.5"/>
      <!-- Face -->
      <ellipse cx="50" cy="44" rx="12" ry="13" fill="#d4b896" stroke="#c0a080" stroke-width="0.5"/>
      <!-- Eyes -->
      <ellipse cx="44" cy="42" rx="2.5" ry="2" fill="#1a1030"/>
      <ellipse cx="56" cy="42" rx="2.5" ry="2" fill="#1a1030"/>
      <circle cx="44" cy="41.5" r="1" fill="#a060ff"/>
      <circle cx="56" cy="41.5" r="1" fill="#a060ff"/>
      <circle cx="44.5" cy="41" r="0.4" fill="#fff"/>
      <circle cx="56.5" cy="41" r="0.4" fill="#fff"/>
      <!-- Eyebrows -->
      <path d="M41 38 Q44 36 47 38" stroke="#6a4a30" stroke-width="0.8" fill="none"/>
      <path d="M53 38 Q56 36 59 38" stroke="#6a4a30" stroke-width="0.8" fill="none"/>
      <!-- Beard -->
      <path d="M42 48 Q50 58 58 48" fill="#a0a0b0" stroke="#8888a0" stroke-width="0.3"/>
      <path d="M44 48 Q50 55 56 48" fill="#b0b0c0" stroke="none"/>
      <!-- Nose -->
      <path d="M50 43 L48 47 L52 47" fill="#c4a880" stroke="none"/>
      <!-- Hat -->
      <path d="M30 38 Q30 28 50 10 Q70 28 70 38 Q70 34 50 33 Q30 34 30 38Z" fill="url(#mageHat)" stroke="#7a4aba" stroke-width="1"/>
      <!-- Hat brim -->
      <ellipse cx="50" cy="36" rx="24" ry="5" fill="#4a2080" stroke="#6a3aa0" stroke-width="0.8"/>
      <!-- Hat star -->
      <polygon points="50,16 52,21 57,21 53,24 55,29 50,26 45,29 47,24 43,21 48,21" fill="#f0d060" filter="url(#mageGlow)" opacity="0.9"/>
      <!-- Magic orb on staff hint -->
      <circle cx="74" cy="52" r="5" fill="#a060ff" opacity="0.3" filter="url(#mageGlow)"/>
      <circle cx="74" cy="52" r="2.5" fill="#c090ff" opacity="0.6"/>
      <circle cx="74" cy="51" r="1" fill="#fff" opacity="0.7"/>
    </svg>` },
        { id: "rogue", name: "Rogue", color: "#3d4a3d", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rogueBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#2a3030"/>
          <stop offset="100%" stop-color="#101418"/>
        </radialGradient>
        <linearGradient id="rogueHood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3a3a3a"/>
          <stop offset="100%" stop-color="#1a1a1a"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#rogueBg)" stroke="#3a4a40" stroke-width="2"/>
      <!-- Body/cloak -->
      <path d="M24 78 Q28 58 40 54 L50 52 L60 54 Q72 58 76 78" fill="#1e2226" stroke="#2a3030" stroke-width="0.8"/>
      <!-- Cloak clasp -->
      <circle cx="50" cy="56" r="2.5" fill="#c9a84c" stroke="#a08030" stroke-width="0.5"/>
      <!-- Belt with dagger -->
      <path d="M34 70 L66 70" stroke="#5a4a30" stroke-width="2"/>
      <rect x="56" y="66" width="3" height="10" rx="0.5" fill="#8a8a8a" transform="rotate(15 57 71)"/>
      <rect x="56.5" y="64" width="2" height="3" rx="0.5" fill="#6a5a30" transform="rotate(15 57 65)"/>
      <!-- Face in shadow -->
      <ellipse cx="50" cy="42" rx="11" ry="12" fill="#c8a882"/>
      <!-- Hood -->
      <path d="M28 50 Q26 30 50 20 Q74 30 72 50 Q70 44 60 42 L50 48 L40 42 Q30 44 28 50Z" fill="url(#rogueHood)" stroke="#4a4a4a" stroke-width="0.8"/>
      <!-- Shadow across upper face -->
      <path d="M34 42 Q50 36 66 42 Q66 38 50 34 Q34 38 34 42Z" fill="#1a1a1a" opacity="0.5"/>
      <!-- Eyes glowing from shadow -->
      <ellipse cx="43" cy="41" rx="3" ry="1.8" fill="#0a0a0a"/>
      <ellipse cx="57" cy="41" rx="3" ry="1.8" fill="#0a0a0a"/>
      <ellipse cx="43" cy="41" rx="1.8" ry="1.2" fill="#40aa60"/>
      <ellipse cx="57" cy="41" rx="1.8" ry="1.2" fill="#40aa60"/>
      <circle cx="42.5" cy="40.5" r="0.5" fill="#80ff90" opacity="0.8"/>
      <circle cx="56.5" cy="40.5" r="0.5" fill="#80ff90" opacity="0.8"/>
      <!-- Smirk -->
      <path d="M45 48 Q50 51 56 48" stroke="#8a6a50" stroke-width="1" fill="none"/>
      <!-- Scar -->
      <path d="M58 44 L62 38" stroke="#a07060" stroke-width="0.8" opacity="0.6"/>
      <!-- Mask/bandana over lower face -->
      <path d="M36 44 Q50 46 64 44 L62 50 Q50 52 38 50Z" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="0.5" opacity="0.85"/>
    </svg>` },
        { id: "cleric", name: "Cleric", color: "#c9a227", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="clericBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#3a3a20"/>
          <stop offset="100%" stop-color="#1a1a10"/>
        </radialGradient>
        <linearGradient id="clericRobe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8e0c8"/>
          <stop offset="100%" stop-color="#b8a880"/>
        </linearGradient>
        <filter id="holyGlow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#clericBg)" stroke="#5a5a30" stroke-width="2"/>
      <!-- Holy glow behind head -->
      <circle cx="50" cy="36" r="20" fill="#f0d060" opacity="0.08" filter="url(#holyGlow)"/>
      <!-- Body/robe -->
      <path d="M26 78 Q28 60 40 56 L50 53 L60 56 Q72 60 74 78" fill="url(#clericRobe)" stroke="#c0b080" stroke-width="0.8"/>
      <!-- Stole/vestment -->
      <path d="M44 56 L44 78" stroke="#c9a84c" stroke-width="4"/>
      <path d="M56 56 L56 78" stroke="#c9a84c" stroke-width="4"/>
      <path d="M44 56 Q50 53 56 56" fill="#c9a84c" stroke="none"/>
      <!-- Cross on stole -->
      <rect x="48.5" y="62" width="3" height="8" rx="0.5" fill="#8a6a20"/>
      <rect x="46" y="64.5" width="8" height="3" rx="0.5" fill="#8a6a20"/>
      <!-- Head -->
      <ellipse cx="50" cy="40" rx="12" ry="13" fill="#d8bc96"/>
      <!-- Tonsure hair -->
      <path d="M38 36 Q38 24 50 22 Q62 24 62 36" fill="#6a4a20" stroke="none"/>
      <ellipse cx="50" cy="30" rx="8" ry="5" fill="#d8bc96"/>
      <!-- Kind eyes -->
      <ellipse cx="44" cy="40" rx="2.5" ry="2.2" fill="#1a1510"/>
      <ellipse cx="56" cy="40" rx="2.5" ry="2.2" fill="#1a1510"/>
      <circle cx="44" cy="39.5" r="1" fill="#5a8040"/>
      <circle cx="56" cy="39.5" r="1" fill="#5a8040"/>
      <circle cx="44.5" cy="39" r="0.4" fill="#fff"/>
      <circle cx="56.5" cy="39" r="0.4" fill="#fff"/>
      <!-- Warm smile -->
      <path d="M44 46 Q50 50 56 46" stroke="#a08060" stroke-width="1" fill="none"/>
      <!-- Nose -->
      <path d="M50 41 L48.5 45 L51.5 45" fill="#c8a880" stroke="none"/>
      <!-- Halo -->
      <ellipse cx="50" cy="22" rx="16" ry="4" fill="none" stroke="#f0d060" stroke-width="1.2" opacity="0.6"/>
      <ellipse cx="50" cy="22" rx="16" ry="4" fill="none" stroke="#fff" stroke-width="0.4" opacity="0.3"/>
    </svg>` },
        { id: "warrior", name: "Warrior", color: "#8b4513", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="warBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#4a2a1a"/>
          <stop offset="100%" stop-color="#1a1008"/>
        </radialGradient>
        <linearGradient id="warArmor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8a6a40"/>
          <stop offset="100%" stop-color="#5a3a20"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#warBg)" stroke="#6a4a2a" stroke-width="2"/>
      <!-- Shoulders - heavy leather -->
      <path d="M20 78 Q22 58 36 52 L50 50 L64 52 Q78 58 80 78" fill="url(#warArmor)" stroke="#7a5a30" stroke-width="0.8"/>
      <!-- Shoulder pauldrons -->
      <ellipse cx="32" cy="58" rx="10" ry="6" fill="#6a4a28" stroke="#8a6a3a" stroke-width="0.8"/>
      <ellipse cx="68" cy="58" rx="10" ry="6" fill="#6a4a28" stroke="#8a6a3a" stroke-width="0.8"/>
      <!-- Studs on shoulders -->
      <circle cx="28" cy="58" r="1.5" fill="#c9a84c"/>
      <circle cx="36" cy="58" r="1.5" fill="#c9a84c"/>
      <circle cx="64" cy="58" r="1.5" fill="#c9a84c"/>
      <circle cx="72" cy="58" r="1.5" fill="#c9a84c"/>
      <!-- Neck -->
      <rect x="44" y="48" width="12" height="6" rx="2" fill="#c8a070"/>
      <!-- Head -->
      <ellipse cx="50" cy="38" rx="14" ry="15" fill="#c8a070"/>
      <!-- War paint stripes -->
      <path d="M38 34 L42 30" stroke="#8a2020" stroke-width="2" opacity="0.7"/>
      <path d="M38 38 L42 34" stroke="#8a2020" stroke-width="2" opacity="0.7"/>
      <!-- Mohawk/wild hair -->
      <path d="M44 24 Q46 10 50 8 Q54 10 56 24" fill="#8a3020" stroke="none"/>
      <path d="M46 26 Q48 14 50 12 Q52 14 54 26" fill="#a04030" stroke="none"/>
      <!-- Fierce eyes -->
      <path d="M40 36 L48 36" stroke="#1a0a00" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M52 36 L60 36" stroke="#1a0a00" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="44" cy="36" r="1.5" fill="#e06020"/>
      <circle cx="56" cy="36" r="1.5" fill="#e06020"/>
      <!-- Angry brow -->
      <path d="M39 32 L47 34" stroke="#a08060" stroke-width="1.5" fill="none"/>
      <path d="M61 32 L53 34" stroke="#a08060" stroke-width="1.5" fill="none"/>
      <!-- Nose -->
      <path d="M50 37 L47 42 L53 42" fill="#b89060" stroke="none"/>
      <!-- Snarl mouth -->
      <path d="M43 46 Q50 44 57 46" stroke="#6a3020" stroke-width="1.2" fill="none"/>
      <!-- Jaw scar -->
      <path d="M55 44 L60 48" stroke="#d0a080" stroke-width="1" opacity="0.6"/>
    </svg>` },
        { id: "archer", name: "Archer", color: "#2d5a27", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="archBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#1a3a20"/>
          <stop offset="100%" stop-color="#0a1a0e"/>
        </radialGradient>
        <linearGradient id="archTunic" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3a6a3a"/>
          <stop offset="100%" stop-color="#1a3a1a"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#archBg)" stroke="#2a5a2a" stroke-width="2"/>
      <!-- Leaves decoration -->
      <path d="M14 30 Q18 28 20 24" stroke="#2a5a2a" stroke-width="1" fill="none" opacity="0.4"/>
      <path d="M82 65 Q78 63 76 59" stroke="#2a5a2a" stroke-width="1" fill="none" opacity="0.4"/>
      <!-- Body -->
      <path d="M28 78 Q30 60 40 55 L50 52 L60 55 Q70 60 72 78" fill="url(#archTunic)" stroke="#4a7a4a" stroke-width="0.8"/>
      <!-- Quiver strap -->
      <path d="M62 55 L38 72" stroke="#6a4a20" stroke-width="2.5"/>
      <!-- Arrow tips peeking over shoulder -->
      <line x1="68" y1="48" x2="66" y2="42" stroke="#aaa" stroke-width="1"/>
      <polygon points="66,42 64.5,44 67.5,44" fill="#aaa"/>
      <line x1="71" y1="50" x2="69" y2="44" stroke="#aaa" stroke-width="1"/>
      <polygon points="69,44 67.5,46 70.5,46" fill="#aaa"/>
      <!-- Face -->
      <ellipse cx="50" cy="40" rx="12" ry="13" fill="#c4a47a"/>
      <!-- Pointed ears (elf-like) -->
      <path d="M37 38 L28 30 L36 36" fill="#c4a47a" stroke="#b09060" stroke-width="0.5"/>
      <path d="M63 38 L72 30 L64 36" fill="#c4a47a" stroke="#b09060" stroke-width="0.5"/>
      <!-- Hair -->
      <path d="M38 36 Q38 22 50 20 Q62 22 62 36 Q58 30 50 28 Q42 30 38 36Z" fill="#4a3018" stroke="none"/>
      <!-- Focused eyes -->
      <ellipse cx="44" cy="40" rx="2.5" ry="2" fill="#0a1a0a"/>
      <ellipse cx="56" cy="40" rx="2.5" ry="2" fill="#0a1a0a"/>
      <circle cx="44" cy="39.5" r="1.2" fill="#40a060"/>
      <circle cx="56" cy="39.5" r="1.2" fill="#40a060"/>
      <circle cx="44.5" cy="39" r="0.4" fill="#fff"/>
      <circle cx="56.5" cy="39" r="0.4" fill="#fff"/>
      <!-- Thin brows -->
      <path d="M41 36 Q44 35 47 36" stroke="#3a2010" stroke-width="0.8" fill="none"/>
      <path d="M53 36 Q56 35 59 36" stroke="#3a2010" stroke-width="0.8" fill="none"/>
      <!-- Nose & mouth -->
      <path d="M50 41 L48.5 44.5 L51.5 44.5" fill="#b89468" stroke="none"/>
      <path d="M46 47 Q50 49 54 47" stroke="#8a6a48" stroke-width="0.8" fill="none"/>
      <!-- Hood outline -->
      <path d="M30 46 Q28 28 50 18 Q72 28 70 46" fill="none" stroke="#3a6a3a" stroke-width="2" opacity="0.5"/>
    </svg>` },
        { id: "bard", name: "Bard", color: "#9b5a2e", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bardBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#4a2040"/>
          <stop offset="100%" stop-color="#1a0a18"/>
        </radialGradient>
        <linearGradient id="bardTunic" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#8a2050"/>
          <stop offset="100%" stop-color="#5a1838"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#bardBg)" stroke="#6a2050" stroke-width="2"/>
      <!-- Musical notes floating -->
      <text x="18" y="30" font-size="10" fill="#c9a84c" opacity="0.4">♪</text>
      <text x="76" y="25" font-size="8" fill="#c9a84c" opacity="0.3">♫</text>
      <text x="80" y="55" font-size="9" fill="#c9a84c" opacity="0.35">♪</text>
      <!-- Body -->
      <path d="M28 78 Q30 60 40 56 L50 53 L60 56 Q70 60 72 78" fill="url(#bardTunic)" stroke="#8a3060" stroke-width="0.8"/>
      <!-- Fancy collar -->
      <path d="M40 56 Q44 50 50 53 Q56 50 60 56" fill="#a03868" stroke="#b04878" stroke-width="0.5"/>
      <circle cx="50" cy="54" r="2" fill="#c9a84c"/>
      <!-- Lute body peek -->
      <ellipse cx="30" cy="66" rx="8" ry="10" fill="#8a6030" stroke="#6a4a20" stroke-width="1" transform="rotate(-15 30 66)"/>
      <ellipse cx="30" cy="66" rx="3" ry="4" fill="#2a1a08" transform="rotate(-15 30 66)"/>
      <line x1="26" y1="56" x2="24" y2="48" stroke="#8a6030" stroke-width="1.5"/>
      <!-- Face -->
      <ellipse cx="50" cy="40" rx="12" ry="13" fill="#d4b490"/>
      <!-- Fancy hat -->
      <path d="M34 36 Q32 24 50 16 Q68 24 66 36 Q60 30 50 28 Q40 30 34 36Z" fill="#7a2050" stroke="#9a3068" stroke-width="0.8"/>
      <!-- Feather in hat -->
      <path d="M60 24 Q70 14 72 8 Q68 16 64 20" fill="#c9a84c" stroke="#a08030" stroke-width="0.5"/>
      <path d="M62 22 Q72 10 76 6" stroke="#d4b050" stroke-width="0.6" fill="none"/>
      <!-- Charming eyes -->
      <ellipse cx="44" cy="40" rx="2.8" ry="2.5" fill="#1a0a10"/>
      <ellipse cx="56" cy="40" rx="2.8" ry="2.5" fill="#1a0a10"/>
      <circle cx="44" cy="39.5" r="1.2" fill="#6050c0"/>
      <circle cx="56" cy="39.5" r="1.2" fill="#6050c0"/>
      <circle cx="44.5" cy="39" r="0.5" fill="#fff"/>
      <circle cx="56.5" cy="39" r="0.5" fill="#fff"/>
      <!-- Wink sparkle on left eye -->
      <path d="M42 37 L43 38 L44 37" stroke="#f0d060" stroke-width="0.5" opacity="0.7"/>
      <!-- Smile -->
      <path d="M43 46 Q50 51 57 46" stroke="#a07858" stroke-width="1" fill="none"/>
      <!-- Goatee -->
      <path d="M48 49 Q50 54 52 49" fill="#5a3a18" stroke="none"/>
      <!-- Nose -->
      <path d="M50 41 L48 45 L52 45" fill="#c4a480" stroke="none"/>
    </svg>` },
        { id: "paladin", name: "Paladin", color: "#4a6a8a", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="palBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#2a3050"/>
          <stop offset="100%" stop-color="#101828"/>
        </radialGradient>
        <linearGradient id="palArmor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#d0d8e8"/>
          <stop offset="100%" stop-color="#8090b0"/>
        </linearGradient>
        <linearGradient id="palGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0d060"/>
          <stop offset="100%" stop-color="#c09030"/>
        </linearGradient>
        <filter id="palGlow">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#palBg)" stroke="#4a5a80" stroke-width="2"/>
      <!-- Holy radiance -->
      <circle cx="50" cy="40" r="30" fill="#f0d060" opacity="0.04"/>
      <!-- Heavy plate armor -->
      <path d="M20 78 Q22 56 36 52 L50 49 L64 52 Q78 56 80 78" fill="url(#palArmor)" stroke="#a0b0c8" stroke-width="1"/>
      <!-- Gold trim on armor -->
      <path d="M36 52 Q50 47 64 52" stroke="#c9a84c" stroke-width="1.5" fill="none"/>
      <!-- Sun emblem on chest -->
      <circle cx="50" cy="64" r="6" fill="url(#palGold)" filter="url(#palGlow)" opacity="0.9"/>
      <circle cx="50" cy="64" r="3.5" fill="#f8e080"/>
      <!-- Sun rays -->
      <line x1="50" y1="56" x2="50" y2="58" stroke="#c9a84c" stroke-width="1"/>
      <line x1="50" y1="70" x2="50" y2="72" stroke="#c9a84c" stroke-width="1"/>
      <line x1="43" y1="64" x2="41" y2="64" stroke="#c9a84c" stroke-width="1"/>
      <line x1="57" y1="64" x2="59" y2="64" stroke="#c9a84c" stroke-width="1"/>
      <!-- Pauldrons -->
      <path d="M22 56 Q26 48 36 52 Q28 56 22 56Z" fill="#c0c8d8" stroke="#a0b0c0" stroke-width="0.5"/>
      <path d="M78 56 Q74 48 64 52 Q72 56 78 56Z" fill="#c0c8d8" stroke="#a0b0c0" stroke-width="0.5"/>
      <!-- Helm -->
      <path d="M34 44 Q34 20 50 16 Q66 20 66 44 Q66 50 50 52 Q34 50 34 44Z" fill="url(#palArmor)" stroke="#b0c0d8" stroke-width="1"/>
      <!-- Visor opening -->
      <path d="M38 40 Q50 44 62 40 Q62 38 50 36 Q38 38 38 40Z" fill="#1a2040"/>
      <!-- Eyes in visor -->
      <circle cx="44" cy="39" r="1.2" fill="#60b0ff" opacity="0.9"/>
      <circle cx="56" cy="39" r="1.2" fill="#60b0ff" opacity="0.9"/>
      <!-- Gold helm crest -->
      <path d="M50 16 L48 6 Q50 4 52 6 L50 16" fill="url(#palGold)" stroke="#a08020" stroke-width="0.5"/>
      <!-- Wings on helm -->
      <path d="M34 30 Q26 22 20 24 Q28 28 32 34" fill="#d0d8e8" stroke="#b0c0d0" stroke-width="0.5"/>
      <path d="M66 30 Q74 22 80 24 Q72 28 68 34" fill="#d0d8e8" stroke="#b0c0d0" stroke-width="0.5"/>
      <!-- Helm highlight -->
      <path d="M36 40 Q36 22 50 18" stroke="#e8f0ff" stroke-width="0.6" fill="none" opacity="0.4"/>
    </svg>` },
        { id: "ranger", name: "Ranger", color: "#3d5a3d", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rangBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#2a3020"/>
          <stop offset="100%" stop-color="#101810"/>
        </radialGradient>
        <linearGradient id="rangCloak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4a5a38"/>
          <stop offset="100%" stop-color="#2a3420"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#rangBg)" stroke="#3a4a2a" stroke-width="2"/>
      <!-- Fur-lined cloak -->
      <path d="M22 78 Q24 56 38 52 L50 49 L62 52 Q76 56 78 78" fill="url(#rangCloak)" stroke="#5a6a48" stroke-width="0.8"/>
      <!-- Fur trim at collar -->
      <path d="M36 54 Q40 50 44 52 Q48 49 50 49 Q52 49 56 52 Q60 50 64 54" fill="#8a7a60" stroke="#6a5a40" stroke-width="0.5"/>
      <!-- Face - weathered -->
      <ellipse cx="50" cy="40" rx="12" ry="13" fill="#c0986a"/>
      <!-- Hood -->
      <path d="M30 48 Q28 26 50 18 Q72 26 70 48 Q66 40 58 38 L50 46 L42 38 Q34 40 30 48Z" fill="url(#rangCloak)" stroke="#5a6a48" stroke-width="1"/>
      <!-- Eyes - keen -->
      <ellipse cx="44" cy="40" rx="2.5" ry="2" fill="#0a1008"/>
      <ellipse cx="56" cy="40" rx="2.5" ry="2" fill="#0a1008"/>
      <circle cx="44" cy="39.5" r="1.2" fill="#8a7030"/>
      <circle cx="56" cy="39.5" r="1.2" fill="#8a7030"/>
      <circle cx="44.5" cy="39" r="0.4" fill="#e0d0a0"/>
      <circle cx="56.5" cy="39" r="0.4" fill="#e0d0a0"/>
      <!-- Stubble -->
      <circle cx="42" cy="47" r="0.4" fill="#6a5030" opacity="0.4"/>
      <circle cx="45" cy="48" r="0.4" fill="#6a5030" opacity="0.4"/>
      <circle cx="50" cy="49" r="0.4" fill="#6a5030" opacity="0.4"/>
      <circle cx="55" cy="48" r="0.4" fill="#6a5030" opacity="0.4"/>
      <circle cx="58" cy="47" r="0.4" fill="#6a5030" opacity="0.4"/>
      <!-- Nose -->
      <path d="M50 41 L48 45 L52 45" fill="#b08858" stroke="none"/>
      <!-- Stern mouth -->
      <path d="M45 48 L55 48" stroke="#806040" stroke-width="1" stroke-linecap="round"/>
      <!-- Wolf companion hint (small wolf head near shoulder) -->
      <path d="M76 68 Q80 62 82 58 L84 60 Q82 64 78 68Z" fill="#6a6a6a" stroke="#5a5a5a" stroke-width="0.5"/>
      <circle cx="82" cy="60" r="0.8" fill="#e0c040"/>
      <!-- Knife handle on belt -->
      <rect x="58" y="70" width="2.5" height="6" rx="0.5" fill="#5a4020"/>
      <rect x="58.3" y="70" width="2" height="1.5" rx="0.5" fill="#c9a84c"/>
    </svg>` },
        { id: "druid", name: "Druid", color: "#2d6a2d", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="druBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#1a3018"/>
          <stop offset="100%" stop-color="#0a180a"/>
        </radialGradient>
        <linearGradient id="druRobe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3a5028"/>
          <stop offset="100%" stop-color="#1a2810"/>
        </linearGradient>
        <filter id="leafGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#druBg)" stroke="#2a4a20" stroke-width="2"/>
      <!-- Vine decorations -->
      <path d="M16 40 Q20 35 24 38 Q28 34 30 38" stroke="#3a6a30" stroke-width="1" fill="none" opacity="0.5"/>
      <path d="M70 60 Q74 56 78 60 Q80 56 84 58" stroke="#3a6a30" stroke-width="1" fill="none" opacity="0.4"/>
      <!-- Robe -->
      <path d="M26 78 Q28 58 40 54 L50 51 L60 54 Q72 58 74 78" fill="url(#druRobe)" stroke="#4a6a38" stroke-width="0.8"/>
      <!-- Nature symbols on robe -->
      <circle cx="50" cy="66" r="4" fill="none" stroke="#6aa040" stroke-width="1" opacity="0.6"/>
      <path d="M50 62 L50 70 M46 66 L54 66" stroke="#6aa040" stroke-width="0.8" opacity="0.6"/>
      <!-- Face - aged, wise -->
      <ellipse cx="50" cy="40" rx="12" ry="13" fill="#b8986a"/>
      <!-- Antler crown -->
      <path d="M36 30 L30 16 L28 20 M30 16 L34 14" stroke="#8a7040" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M64 30 L70 16 L72 20 M70 16 L66 14" stroke="#8a7040" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Wild hair with leaves -->
      <path d="M38 36 Q36 24 50 20 Q64 24 62 36 Q58 28 50 26 Q42 28 38 36Z" fill="#4a6a30"/>
      <path d="M42 24 Q44 20 46 24" fill="#60a040" filter="url(#leafGlow)"/>
      <path d="M54 22 Q56 18 58 22" fill="#60a040" filter="url(#leafGlow)"/>
      <!-- Eyes - ancient -->
      <ellipse cx="44" cy="40" rx="2.5" ry="2.2" fill="#0a1808"/>
      <ellipse cx="56" cy="40" rx="2.5" ry="2.2" fill="#0a1808"/>
      <circle cx="44" cy="39.5" r="1.2" fill="#40c040"/>
      <circle cx="56" cy="39.5" r="1.2" fill="#40c040"/>
      <circle cx="44" cy="39" r="0.4" fill="#a0ff80"/>
      <circle cx="56" cy="39" r="0.4" fill="#a0ff80"/>
      <!-- Long beard -->
      <path d="M40 46 Q42 48 44 46 Q48 54 50 58 Q52 54 56 46 Q58 48 60 46" fill="#7a8a6a" stroke="none"/>
      <path d="M44 46 Q48 52 50 55 Q52 52 56 46" fill="#8a9a7a" stroke="none"/>
      <!-- Nose -->
      <path d="M50 41 L48 44.5 L52 44.5" fill="#a88858" stroke="none"/>
    </svg>` },
        { id: "monk", name: "Monk", color: "#6a5a4a", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="monkBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#3a3020"/>
          <stop offset="100%" stop-color="#181410"/>
        </radialGradient>
        <linearGradient id="monkWrap" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#d4a840"/>
          <stop offset="100%" stop-color="#a07828"/>
        </linearGradient>
        <filter id="chiGlow">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#monkBg)" stroke="#5a4a30" stroke-width="2"/>
      <!-- Chi energy -->
      <circle cx="50" cy="50" r="25" fill="#d4a840" opacity="0.04" filter="url(#chiGlow)"/>
      <!-- Robe - one shoulder exposed -->
      <path d="M26 78 Q28 60 40 56 L50 53 L60 56 Q72 60 74 78" fill="url(#monkWrap)" stroke="#b08830" stroke-width="0.8"/>
      <!-- Exposed shoulder -->
      <path d="M30 62 Q34 54 42 56" fill="#c4a070" stroke="none"/>
      <!-- Sash/belt -->
      <path d="M34 68 L66 68" stroke="#7a5a20" stroke-width="2.5"/>
      <path d="M48 68 L46 78" stroke="#7a5a20" stroke-width="2"/>
      <!-- Head - bald -->
      <ellipse cx="50" cy="38" rx="14" ry="15" fill="#c4a070"/>
      <!-- Shaved head shine -->
      <ellipse cx="46" cy="28" rx="6" ry="3" fill="#d4b080" opacity="0.4"/>
      <!-- Serene eyes -->
      <path d="M41 39 Q44 37 47 39" stroke="#2a1a08" stroke-width="1.5" fill="none"/>
      <path d="M53 39 Q56 37 59 39" stroke="#2a1a08" stroke-width="1.5" fill="none"/>
      <!-- Third eye dot -->
      <circle cx="50" cy="32" r="1.5" fill="#c9a84c" filter="url(#chiGlow)"/>
      <!-- Nose -->
      <path d="M50 39 L48.5 43 L51.5 43" fill="#b89060" stroke="none"/>
      <!-- Peaceful smile -->
      <path d="M45 46 Q50 49 55 46" stroke="#8a6a48" stroke-width="0.8" fill="none"/>
      <!-- Prayer beads around neck -->
      <circle cx="38" cy="54" r="1.5" fill="#6a4a18" stroke="#5a3a10" stroke-width="0.3"/>
      <circle cx="42" cy="52.5" r="1.5" fill="#6a4a18" stroke="#5a3a10" stroke-width="0.3"/>
      <circle cx="46" cy="52" r="1.5" fill="#6a4a18" stroke="#5a3a10" stroke-width="0.3"/>
      <circle cx="50" cy="52" r="1.5" fill="#6a4a18" stroke="#5a3a10" stroke-width="0.3"/>
      <circle cx="54" cy="52" r="1.5" fill="#6a4a18" stroke="#5a3a10" stroke-width="0.3"/>
      <circle cx="58" cy="52.5" r="1.5" fill="#6a4a18" stroke="#5a3a10" stroke-width="0.3"/>
      <circle cx="62" cy="54" r="1.5" fill="#6a4a18" stroke="#5a3a10" stroke-width="0.3"/>
      <!-- Wrapping details -->
      <path d="M44 60 Q50 58 56 60" stroke="#b89030" stroke-width="0.6" fill="none" opacity="0.5"/>
      <path d="M42 64 Q50 62 58 64" stroke="#b89030" stroke-width="0.6" fill="none" opacity="0.5"/>
    </svg>` },
        { id: "necromancer", name: "Necromancer", color: "#4a3a5a", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="necBg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#1a0a2a"/>
          <stop offset="100%" stop-color="#0a0414"/>
        </radialGradient>
        <linearGradient id="necRobe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2a1840"/>
          <stop offset="100%" stop-color="#0a0418"/>
        </linearGradient>
        <filter id="deathGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#necBg)" stroke="#3a1a5a" stroke-width="2"/>
      <!-- Ethereal wisps -->
      <path d="M20 70 Q24 62 20 55" stroke="#6a30a0" stroke-width="0.8" fill="none" opacity="0.3"/>
      <path d="M78 65 Q82 58 80 50" stroke="#6a30a0" stroke-width="0.8" fill="none" opacity="0.25"/>
      <!-- Dark robes -->
      <path d="M22 78 Q24 56 38 50 L50 47 L62 50 Q76 56 78 78" fill="url(#necRobe)" stroke="#3a1860" stroke-width="0.8"/>
      <!-- Skull clasp -->
      <ellipse cx="50" cy="53" rx="4" ry="4.5" fill="#c8c0b0" stroke="#8a8070" stroke-width="0.5"/>
      <circle cx="47.5" cy="52" r="1" fill="#1a0a2a"/>
      <circle cx="52.5" cy="52" r="1" fill="#1a0a2a"/>
      <path d="M48 55 L49 54.5 L50 55 L51 54.5 L52 55" stroke="#1a0a2a" stroke-width="0.5" fill="none"/>
      <!-- Face - gaunt -->
      <ellipse cx="50" cy="38" rx="11" ry="13" fill="#b0a088"/>
      <!-- Sunken cheeks -->
      <ellipse cx="42" cy="44" rx="3" ry="2" fill="#a09078" opacity="0.5"/>
      <ellipse cx="58" cy="44" rx="3" ry="2" fill="#a09078" opacity="0.5"/>
      <!-- Hood -->
      <path d="M28 48 Q26 22 50 12 Q74 22 72 48 Q68 38 58 36 L50 44 L42 36 Q32 38 28 48Z" fill="#1a0a28" stroke="#2a1440" stroke-width="0.8"/>
      <!-- Glowing eyes -->
      <ellipse cx="44" cy="38" rx="3" ry="2.5" fill="#0a0418"/>
      <ellipse cx="56" cy="38" rx="3" ry="2.5" fill="#0a0418"/>
      <circle cx="44" cy="38" r="1.8" fill="#a040e0" filter="url(#deathGlow)" opacity="0.9"/>
      <circle cx="56" cy="38" r="1.8" fill="#a040e0" filter="url(#deathGlow)" opacity="0.9"/>
      <circle cx="44" cy="37.5" r="0.6" fill="#e0a0ff"/>
      <circle cx="56" cy="37.5" r="0.6" fill="#e0a0ff"/>
      <!-- Sinister grin -->
      <path d="M44 46 Q50 50 56 46" stroke="#5a4030" stroke-width="0.8" fill="none"/>
      <!-- Staff with green soul fire -->
      <line x1="76" y1="40" x2="76" y2="78" stroke="#4a3020" stroke-width="2.5"/>
      <circle cx="76" cy="38" r="4" fill="#40e060" opacity="0.3" filter="url(#deathGlow)"/>
      <circle cx="76" cy="38" r="2" fill="#60ff80" opacity="0.5"/>
      <circle cx="76" cy="37" r="0.8" fill="#fff" opacity="0.6"/>
      <!-- Nose -->
      <path d="M50 39 L48.5 43 L51.5 43" fill="#a09078" stroke="none"/>
    </svg>` }
    ];
    global.DAGGERDIE_CHARACTERS = CHARACTERS;
    global.DAGGERDIE_CHARACTER_BY_ID = Object.fromEntries(CHARACTERS.map(c => [c.id, c]));
    global.DAGGERDIE_PREFIX_SVG_IDS = prefixSvgIds;
})(typeof window !== 'undefined' ? window : this);