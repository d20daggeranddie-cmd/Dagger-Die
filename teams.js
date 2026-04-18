/**
 * Team definitions for Dagger & Die Party mode.
 * Emblems extracted from assets/dnd_class_emblems.svg.
 * Use DAGGERDIE_PREFIX_TEAM_SVG_IDS(svg, prefix) when injecting to avoid duplicate IDs.
 */
(function (global) {
    function prefixTeamSvgIds(svgString, prefix) {
        if (!svgString || !prefix) return svgString;
        return svgString
            .replace(/\bid="([^"]+)"/g, 'id="' + prefix + '-$1"')
            .replace(/url\(#([^)]+)\)/g, 'url(#' + prefix + '-$1)')
            .replace(/href="#([^"]+)"/g, 'href="#' + prefix + '-$1"');
    }

    var TEAMS = [
        {
            id: 'fighter', name: 'The Ironbound', color: '#7f1d1d',
            svg: '<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="0" y="0" width="90" height="90" rx="12" fill="#7f1d1d"/>' +
                '<line x1="22" y1="22" x2="68" y2="68" stroke="#fca5a5" stroke-width="5" stroke-linecap="round"/>' +
                '<line x1="68" y1="22" x2="22" y2="68" stroke="#fca5a5" stroke-width="5" stroke-linecap="round"/>' +
                '<rect x="18" y="30" width="14" height="4" rx="2" fill="#fbbf24" transform="rotate(-45 25 32)"/>' +
                '<rect x="58" y="30" width="14" height="4" rx="2" fill="#fbbf24" transform="rotate(45 65 32)"/>' +
                '<circle cx="20" cy="70" r="4" fill="#fbbf24"/>' +
                '<circle cx="70" cy="70" r="4" fill="#fbbf24"/>' +
                '<circle cx="20" cy="20" r="4" fill="#e2e8f0"/>' +
                '<circle cx="70" cy="20" r="4" fill="#e2e8f0"/>' +
                '</svg>'
        },
        {
            id: 'rogue', name: 'The Ashen Veil', color: '#1e1b4b',
            svg: '<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="0" y="0" width="90" height="90" rx="12" fill="#1e1b4b"/>' +
                '<polygon points="45,12 50,45 45,50 40,45" fill="#e2e8f0"/>' +
                '<rect x="36" y="49" width="18" height="5" rx="2" fill="#7c3aed"/>' +
                '<rect x="42" y="54" width="6" height="22" rx="3" fill="#c4b5fd"/>' +
                '<ellipse cx="45" cy="30" rx="10" ry="7" fill="#312e81"/>' +
                '<ellipse cx="45" cy="30" rx="5" ry="4" fill="#7c3aed"/>' +
                '<circle cx="45" cy="30" r="2" fill="#e2e8f0"/>' +
                '</svg>'
        },
        {
            id: 'wizard', name: 'The Starforged', color: '#1e3a5f',
            svg: '<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="0" y="0" width="90" height="90" rx="12" fill="#1e3a5f"/>' +
                '<polygon points="45,10 49,36 68,20 52,39 78,43 52,47 68,66 49,50 45,76 41,50 22,66 38,47 12,43 38,39 22,20 41,36" fill="#60a5fa"/>' +
                '<circle cx="45" cy="45" r="10" fill="#1e3a5f"/>' +
                '<circle cx="45" cy="45" r="6" fill="#93c5fd"/>' +
                '</svg>'
        },
        {
            id: 'cleric', name: 'The Sunwoken', color: '#78350f',
            svg: '<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="0" y="0" width="90" height="90" rx="12" fill="#78350f"/>' +
                '<rect x="38" y="14" width="14" height="62" rx="4" fill="#fbbf24"/>' +
                '<rect x="14" y="36" width="62" height="14" rx="4" fill="#fbbf24"/>' +
                '<rect x="42" y="18" width="6" height="54" rx="2" fill="#fde68a"/>' +
                '<rect x="18" y="40" width="54" height="6" rx="2" fill="#fde68a"/>' +
                '</svg>'
        },
        {
            id: 'ranger', name: 'The Duskwalkers', color: '#14532d',
            svg: '<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="0" y="0" width="90" height="90" rx="12" fill="#14532d"/>' +
                '<path d="M22 14 Q8 45 22 76" fill="none" stroke="#86efac" stroke-width="5" stroke-linecap="round"/>' +
                '<line x1="22" y1="14" x2="22" y2="76" stroke="#d1fae5" stroke-width="1.5"/>' +
                '<line x1="28" y1="45" x2="76" y2="45" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>' +
                '<polygon points="76,45 66,40 66,50" fill="#fbbf24"/>' +
                '<polygon points="28,45 32,39 36,45" fill="#86efac"/>' +
                '<polygon points="28,45 32,51 36,45" fill="#86efac"/>' +
                '</svg>'
        },
        {
            id: 'bard', name: 'The Echoing', color: '#701a75',
            svg: '<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="0" y="0" width="90" height="90" rx="12" fill="#701a75"/>' +
                '<ellipse cx="50" cy="60" rx="22" ry="24" fill="#c026d3"/>' +
                '<ellipse cx="50" cy="60" rx="16" ry="18" fill="#86198f"/>' +
                '<circle cx="50" cy="62" r="7" fill="#4a044e"/>' +
                '<rect x="44" y="18" width="8" height="30" rx="4" fill="#c026d3"/>' +
                '<ellipse cx="48" cy="16" rx="8" ry="6" fill="#a21caf"/>' +
                '<line x1="44" y1="20" x2="36" y2="76" stroke="#f5d0fe" stroke-width="1"/>' +
                '<line x1="48" y1="20" x2="48" y2="76" stroke="#f5d0fe" stroke-width="1"/>' +
                '<line x1="52" y1="20" x2="60" y2="76" stroke="#f5d0fe" stroke-width="1"/>' +
                '<text x="20" y="28" style="font:700 14px serif" fill="#f0abfc">&#9834;</text>' +
                '<text x="68" y="36" style="font:700 11px serif" fill="#f0abfc">&#9835;</text>' +
                '</svg>'
        },
        {
            id: 'paladin', name: 'The Oathsworn', color: '#1e3a5f',
            svg: '<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="0" y="0" width="90" height="90" rx="12" fill="#1e3a5f"/>' +
                '<path d="M45 10 L74 22 L74 52 Q74 72 45 82 Q16 72 16 52 L16 22 Z" fill="#2563eb"/>' +
                '<path d="M45 16 L68 26 L68 52 Q68 68 45 76 Q22 68 22 52 L22 26 Z" fill="#1d4ed8"/>' +
                '<rect x="41" y="26" width="8" height="40" rx="2" fill="#fbbf24"/>' +
                '<rect x="28" y="43" width="34" height="8" rx="2" fill="#fbbf24"/>' +
                '<rect x="43" y="28" width="4" height="36" rx="1" fill="#fde68a"/>' +
                '<rect x="30" y="45" width="30" height="4" rx="1" fill="#fde68a"/>' +
                '</svg>'
        },
        {
            id: 'druid', name: 'The Rootborn', color: '#365314',
            svg: '<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="0" y="0" width="90" height="90" rx="12" fill="#365314"/>' +
                '<circle cx="48" cy="35" r="22" fill="#4ade80"/>' +
                '<circle cx="56" cy="30" r="18" fill="#365314"/>' +
                '<path d="M45 52 Q30 40 32 56 Q24 52 28 64 Q20 62 26 72 Q32 68 36 74 Q38 66 44 68 Q50 70 52 62 Q58 66 60 72 Q66 68 64 62 Q70 62 66 52 Q58 54 56 46 Q50 50 45 52Z" fill="#86efac"/>' +
                '<line x1="45" y1="68" x2="45" y2="82" stroke="#4ade80" stroke-width="3" stroke-linecap="round"/>' +
                '<line x1="45" y1="52" x2="45" y2="70" stroke="#365314" stroke-width="1.5" stroke-linecap="round"/>' +
                '</svg>'
        }
    ];

    var TEAM_BY_ID = {};
    TEAMS.forEach(function (t) { TEAM_BY_ID[t.id] = t; });

    global.DAGGERDIE_TEAMS = TEAMS;
    global.DAGGERDIE_TEAM_BY_ID = TEAM_BY_ID;
    global.DAGGERDIE_PREFIX_TEAM_SVG_IDS = prefixTeamSvgIds;
})(typeof window !== 'undefined' ? window : this);
