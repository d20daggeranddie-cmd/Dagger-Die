# Dagger & Die

A web-based game tracker for the physical knife-throwing dice game. *Throw knives. Roll dice. Take names.*

## How to Play

### Setup
1. Select 2-6 players
2. Each player chooses a name (2-30 characters, must be unique) and character
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
- **Damage can't be split** — each hit deals its full roll value to one target (e.g. hitting a 17 deals 17 damage to one opponent)
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
- Download target stencil (Print PDF or Cut SVG) for painting your own boards
- Responsive design — works on desktop and mobile (tap highlighted areas to claim hits)

## Options

The landing page includes an Options menu with gameplay preferences:

- **Persistent settings** — When enabled, your option and mod selections are kept across games. When disabled (default), settings reset to defaults each new game.

### Auto-Advance

- **Automatically roll dice for turn order** — Dice roll automatically when the turn order screen appears
- **Automatically begin game after turn order** — Game starts immediately after turn order is determined
- **Automatically roll dice on player turn** — Dice roll automatically when each player's turn begins
- **Auto deal damage** — Damage from hits is automatically assigned to random opponents (no manual target selection)
- **Automatically advance to next player after damage** — Turn summary appears briefly then the next turn starts automatically

## Mods

Mods are optional gameplay modifiers found in the Options menu. All are off by default.

- **Use custom HP** — Override the default HP per player (20–999) instead of using automatic values by player count
- **Buff on Critical** — Take half damage for 1 turn after scoring a critical (all 3 dice hit)
- **Nerf on Miss** — Take 125% damage for 1 turn after missing all throws
- **Vampire** — Gain HP equal to all damage dealt to a target this turn when you deliver a killing blow
- **Items** — Enables the item inventory system (see Items below)
- **Start with random item** — Each player begins the game with one randomly generated item (requires Items)
- **Enable bots** — Allows marking players as bots with selectable difficulty on the character select screen

## Items

Items are earned by landing a critical (all 3 hits in a single turn). A D12 is rolled to determine which item you receive. Items can be used before dealing damage on your turn.

### Inventory

- 3 slots per player, fills left to right
- When an item is used, remaining items shift left to fill the gap
- New items are added to the next open slot at the end
- **Full inventory**: If all 3 slots are occupied when you earn a new item, a swap screen appears letting you choose which of the four items (3 existing + 1 new) to drop. Bots auto-swap the lowest-value item when the new one is better, otherwise discard the new item.

### Item List

| # | Item | Type | Target | Effect |
|---|------|------|--------|--------|
| 1 | Scroll | HEALING | Self | Heal +15 HP |
| 2 | Feather | REGEN | Self | Regen +15 HP (5/turn over 3 turns) |
| 3 | Glowing Orb | RESURRECT | Eliminated | Resurrect 1 eliminated player with 20 HP |
| 4 | Metal Fragment | DEFENSE | Self | Shield — block the next incoming hit (damage becomes 0, then shield is consumed) |
| 5 | Tiger's Eye | BUFF | Self | Focus +5 DP to next attack |
| 6 | Toy Rocket | UTILITY | Self | Aim — call a rolled zone; if hit, +3 DP |
| 7 | Monkey Paw | LETHAL | Opponent | Cursed — halve target's current HP |
| 8 | Freeze | DEBUFF | Opponent | Freeze — target skips next turn |
| 9 | Potion | DEBUFF | Opponent | Poison -15 HP (5/turn over 3 turns) |
| 10 | Ticket | UTILITY | Self | Next 3 knife drops this turn cost no HP |
| 11 | Red Rose | HEALING | Self | Recover all HP lost to drops |
| 12 | Medkit | CLEANSE | Self | Clear Status — remove all status effects |

## Resources

From the Resources star button on the landing page:

- **Download target stencil** — Choose a format:
  - **Print** — PDF for printing on paper
  - **Cut** — SVG for cutting machines
- **Dynamic Target (Projector)** — Opens a separate window to display the D20 target on a projector or second screen. Also available in-game via the gear menu. Syncs with the game via BroadcastChannel — highlights rolled zones (gold) and claimed hits (green). Scales smoothly to any window size.

## Hosting on GitHub Pages

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select "main" branch as source
4. Your game will be available at `https://[username].github.io/[repo-name]/`

## Files
- `index.html` — Entry point; loads intro animation in iframe
- `intro-animation.html` — Cover graphic and tap-to-enter; navigates to startgame
- `startgame.html` — Landing page with Options menu, Resources, and player setup
- `charselect.html` — Character/player selection (2–6 players, names, characters)
- `game.html` — Full game application (turn order, dice rolling, HP tracking, hit claiming)
- `projector.html` — Target display for projector mode; D20 face syncs with game, scales to window
- `characters.js` — Character avatar SVG definitions (Knight, Mage, Rogue, etc.)
- `items.js` — Item definitions for the quest/items system
- `m3-readme-modal.js` — In-app README modal; shows README when the logo is clicked
- `rpg-bg-canvas.js` — Animated RPG-style background canvas
- `rpg-bg-particles.js` — Particle effects for the background
- `rpg-background.html` — Standalone RPG background preview
- `dagger-and-die-preview.html` — Preview/demo page
- `assets/d20_odd.svg` — Odd numbers target board (1, 3, 5, 7, 9, 11, 13, 15, 17, 19)
- `assets/d20_even.svg` — Even numbers target board (2, 4, 6, 8, 10, 12, 14, 16, 18, 20)
- `assets/targetstencil.svg` — Target stencil SVG for cutting machines
- `assets/PrintTarget.pdf` — Target stencil PDF for printing

## The Physical Game

The actual game uses two log rounds painted with D20 patterns:
- One log has all odd numbers (center is 1)
- One log has all even numbers (center is 20)

Players throw real knives at the targets based on what they roll on the dice!
