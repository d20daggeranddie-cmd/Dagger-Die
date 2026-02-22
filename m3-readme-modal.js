(() => {
  if (document.getElementById('m3-readme-btn') || document.getElementById('readme-modal')) {
    return;
  }

  const logo = document.querySelector('img.m3-logo');
  if (!logo) return;

  const embeddedReadme = `# Dagger & Die

A web-based game tracker for the physical knife-throwing dice game. *Throw knives. Roll dice. Take names.*

## How to Play

### Setup
1. Select 2-6 players
2. Each player chooses a name (2-30 characters, must be unique) and color
3. Roll for turn order (highest D20 roll goes first; ties are broken by rerolling only the tied players)

### Gameplay
- Starting HP varies by player count:
  - **2 players**: 40 HP
  - **3-4 players**: 50 HP
  - **5-6 players**: 60 HP
- On your turn, roll 3 virtual D20s in the app
- The app highlights the corresponding target zones on the odd/even boards
- Throw your physical knives at the **log round targets**:
  - **Odd board**: Numbers 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
  - **Even board**: Numbers 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
- For each number you hit on the target that matches your dice roll, deal that number as damage to an opponent
- **Damage can't be split** - each hit deals its full roll value to one target (e.g. hitting a 17 deals 17 damage to one opponent)
- Tap/click highlighted zones in the app to claim your hits, then tap an opponent's card to assign each hit's damage

### Special Rules
- **Dropped Knife**: If you drop a knife during your throw, click the "Dropped Knife" button to lose 1 HP
- **Elimination**: When a player reaches 0 HP, they are eliminated
- **Victory**: Last player standing wins!

## Features
- Virtual D20 dice rolling with animations
- Visual target boards with highlighted zones matching your rolls
- HP tracking for all players (scales by player count)
- Turn order management with automatic tie-breaking
- Player name validation (2-30 chars, unique, real-time duplicate detection)
- Game log to track all actions
- Endgame report with per-player stats (including Efficiency shown as hits/throws)
- Projector mode to display target face on a second screen (scales smoothly to any window size)
- Download target stencil (SVG) for painting your own boards
- Responsive design - works on desktop and mobile (tap highlighted areas to claim hits)

## Options

The landing page includes an Options menu with gameplay preferences (saved in browser):

- **Automatically roll dice for turn order** - Dice roll automatically when the turn order screen appears
- **Automatically begin game after turn order** - Game starts immediately after turn order is determined
- **Automatically roll dice on player turn** - Dice roll automatically when each player's turn begins
- **Auto deal damage** - Damage from hits is automatically assigned to random opponents (no manual target selection)

## Game Settings

During a game, open the gear icon to access in-game settings (locked after first damage is dealt):

- **Use custom HP** - Override the default HP per player (20-999) instead of using automatic values by player count

## Item Inventory Behavior

- Inventory has 3 slots and fills left to right.
- When an item is used, remaining items shift left to fill empty space.
- New items are added to the next open slot at the end (behind current items), not inserted in front.

## Resources

From the Resources dropdown on the landing page:

- **Download target stencil (SVG)** - SVG file for painting D20 targets onto log rounds
- **Open target face (projector)** - Opens a separate window to display the D20 target on a projector or second screen. Also available in-game via the gear menu (Dynamic Target). Syncs with the game via BroadcastChannel - highlights rolled zones (gold) and claimed hits (green). Scales smoothly to any window size.

The original game uses two log rounds painted with D20 patterns:
- One log has all odd numbers (center is 1)
- One log has all even numbers (center is 20)

Single log round option is to use the stencil to transfer the icosahedron outline to a log round and leave the facets blank.

Players throw knives at the targets based on what they roll on the dice!`;

  const css = `
    .m3-logo{pointer-events:auto !important;cursor:pointer !important}
    .readme-modal-overlay{
      position:fixed;inset:0;z-index:1200;background:rgba(4,6,16,.78);backdrop-filter:blur(5px);
      display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;pointer-events:none;
      transition:opacity .25s ease,visibility .25s ease;
    }
    .readme-modal-overlay.open{opacity:1;visibility:visible;pointer-events:auto}
    .readme-modal{
      width:min(920px,94vw);max-height:min(84vh,920px);display:flex;flex-direction:column;overflow:hidden;
      background:linear-gradient(180deg,rgba(28,38,62,.98) 0%,rgba(18,25,45,.98) 100%);
      border:1px solid rgba(255,255,255,.16);border-radius:16px;
      box-shadow:0 24px 60px rgba(0,0,0,.6),0 0 0 1px rgba(240,192,64,.18);
    }
    .readme-modal-header{
      display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 20px;
      border-bottom:1px solid rgba(255,255,255,.12);
      background:linear-gradient(90deg,rgba(240,192,64,.12),rgba(72,219,251,.08));
    }
    .readme-modal-header h3{margin:0;color:#feca57;font-size:1.2rem;letter-spacing:.2px}
    .readme-close-btn{
      border:1px solid rgba(255,255,255,.22);background:rgba(0,0,0,.22);color:rgba(255,255,255,.92);
      border-radius:8px;min-width:38px;height:34px;font-size:1.25rem;line-height:1;cursor:pointer;
      transition:background .2s ease,border-color .2s ease;
    }
    .readme-close-btn:hover{background:rgba(255,255,255,.14);border-color:rgba(240,192,64,.4)}
    .readme-modal-content{padding:20px;overflow:auto;color:rgba(255,255,255,.93)}
    .readme-loading{opacity:.8}
    .readme-md h1,.readme-md h2,.readme-md h3,.readme-md h4{color:#feca57;margin:18px 0 8px;line-height:1.2}
    .readme-md h1{font-size:1.6rem;margin-top:0}
    .readme-md h2{font-size:1.3rem}
    .readme-md h3{font-size:1.12rem;color:#6be9ff}
    .readme-md h4{font-size:1rem;color:#b4edff}
    .readme-md p{margin:8px 0 12px;color:rgba(255,255,255,.9)}
    .readme-md ul,.readme-md ol{margin:6px 0 12px 22px}
    .readme-md li{margin:4px 0}
    .readme-md li.subitem{margin-left:16px;opacity:.95}
    .readme-md strong{color:#fff}
    .readme-md em{color:#d9ecff}
    .readme-md code{
      background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.12);border-radius:6px;
      padding:1px 6px;font-family:Consolas,Monaco,monospace;font-size:.92em;color:#9de9ff;
    }
    .readme-md a{color:#6be9ff;text-decoration:underline}
    .readme-md a:hover{color:#9cf2ff}
    @media (max-width:600px){
      .readme-modal{width:95vw;max-height:88vh}
      .readme-modal-header{padding:14px}
      .readme-modal-content{padding:14px}
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.id = 'm3-readme-modal-styles';
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  const overlay = document.createElement('div');
  overlay.className = 'readme-modal-overlay';
  overlay.id = 'readme-modal';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Dagger and Die README');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
    <div class="readme-modal">
      <div class="readme-modal-header">
        <h3>Dagger &amp; Die README</h3>
        <button type="button" id="readme-close-btn" class="readme-close-btn" aria-label="Close README modal">&times;</button>
      </div>
      <div class="readme-modal-content" id="readme-content">
        <p class="readme-loading">Loading README...</p>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const closeBtn = overlay.querySelector('#readme-close-btn');
  const readmeContent = overlay.querySelector('#readme-content');

  logo.setAttribute('role', 'button');
  logo.setAttribute('tabindex', '0');
  logo.setAttribute('aria-label', 'Open Dagger and Die README');

  let readmeLoaded = false;

  function escapeHtml(value) {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderInlineMarkdown(text) {
    let output = escapeHtml(text);
    output = output.replace(/`([^`]+)`/g, '<code>$1</code>');
    output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    output = output.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, label, href) => {
      const trimmedHref = href.trim();
      const safeHref = trimmedHref.toLowerCase().startsWith('javascript:') ? '#' : trimmedHref.replace(/"/g, '&quot;');
      return `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    });
    return output;
  }

  function renderMarkdown(mdText) {
    const lines = mdText.replace(/\r/g, '').split('\n');
    const html = [];
    let inUl = false;
    let inOl = false;

    function closeLists() {
      if (inUl) {
        html.push('</ul>');
        inUl = false;
      }
      if (inOl) {
        html.push('</ol>');
        inOl = false;
      }
    }

    for (const line of lines) {
      const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
      const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
      const unorderedMatch = line.match(/^(\s*)-\s+(.*)$/);

      if (!line.trim()) {
        closeLists();
        continue;
      }
      if (headingMatch) {
        closeLists();
        const level = Math.min(4, headingMatch[1].length);
        html.push(`<h${level}>${renderInlineMarkdown(headingMatch[2])}</h${level}>`);
        continue;
      }
      if (orderedMatch) {
        if (inUl) {
          html.push('</ul>');
          inUl = false;
        }
        if (!inOl) {
          html.push('<ol>');
          inOl = true;
        }
        html.push(`<li>${renderInlineMarkdown(orderedMatch[1])}</li>`);
        continue;
      }
      if (unorderedMatch) {
        if (inOl) {
          html.push('</ol>');
          inOl = false;
        }
        if (!inUl) {
          html.push('<ul>');
          inUl = true;
        }
        const isSubitem = unorderedMatch[1].length > 0;
        html.push(`<li${isSubitem ? ' class="subitem"' : ''}>${renderInlineMarkdown(unorderedMatch[2])}</li>`);
        continue;
      }

      closeLists();
      html.push(`<p>${renderInlineMarkdown(line)}</p>`);
    }
    closeLists();
    return `<div class="readme-md">${html.join('')}</div>`;
  }

  function setReadme(mdText) {
    readmeContent.innerHTML = renderMarkdown(mdText);
    readmeLoaded = true;
  }

  function loadReadme() {
    if (readmeLoaded) return;
    fetch('README.md')
      .then((response) => {
        if (!response.ok) throw new Error('README request failed');
        return response.text();
      })
      .then((md) => setReadme(md))
      .catch(() => setReadme(embeddedReadme));
  }

  function openModal() {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    loadReadme();
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  logo.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    openModal();
  });
  logo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      openModal();
    }
  });

  closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeModal();
  });

  overlay.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target === overlay) closeModal();
  });
  const modalEl = overlay.querySelector('.readme-modal');
  if (modalEl) {
    modalEl.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('open')) {
      event.preventDefault();
      event.stopPropagation();
      closeModal();
      return;
    }
    if (overlay.classList.contains('open') && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);
})();
