# Dagger & Die

A web-based game tracker for the physical knife-throwing dice game. *Throw knives. Roll dice. Take names.*

## How to Play

### Setup
1. Select 2-6 players
2. Each player chooses a name (2-30 characters, must be unique) and color
3. Roll for turn order (highest D20 roll goes first; ties are broken by rerolling only the tied players)

### Gameplay
- Starting HP varies by player count:
  - **2 players**: 50 HP
  - **3-4 players**: 40 HP
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
- Download target stencil (SVG) for painting your own boards
- Responsive design — works on desktop and mobile (tap highlighted areas to claim hits)

## Options

The landing page includes an Options menu with gameplay preferences (saved in browser):

- **Automatically roll dice for turn order** — Dice roll automatically when the turn order screen appears
- **Automatically begin game after turn order** — Game starts immediately after turn order is determined
- **Automatically roll dice on player turn** — Dice roll automatically when each player's turn begins
- **Auto deal damage** — Damage from hits is automatically assigned to random opponents (no manual target selection)

## Game Settings

During a game, open the gear icon to access in-game settings (locked after first damage is dealt):

- **Use custom HP** — Override the default HP per player (20–999) instead of using automatic values by player count

## Item Inventory Behavior

- Inventory has 3 slots and fills left to right.
- When an item is used, remaining items shift left to fill empty space.
- New items are added to the next open slot at the end (behind current items), not inserted in front.

## Resources

From the Resources dropdown on the landing page:

- **Download target stencil (SVG)** — SVG file for painting D20 targets onto log rounds
- **Open target face (projector)** — Opens a separate window to display the D20 target on a projector or second screen. Also available in-game via the gear menu (Dynamic Target). Syncs with the game via BroadcastChannel — highlights rolled zones (gold) and claimed hits (green). Scales smoothly to any window size.

## Hosting on GitHub Pages

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select "main" branch as source
4. Your game will be available at `https://[username].github.io/[repo-name]/`

## Files
- `index.html` — Entry point; loads intro animation in iframe
- `intro-animation.html` — Cover graphic and tap-to-enter; navigates to startgame
- `startgame.html` — Landing page with Options menu, Resources dropdown, and player setup
- `charselect.html` — Character/player selection (2–6 players, names, colors)
- `game.html` — Full game application (turn order, dice rolling, HP tracking, hit claiming)
- `projector.html` — Target display for projector mode; D20 face syncs with game, scales to window
- `assets/ODD.svg` — Odd numbers target board (1, 3, 5, 7, 9, 11, 13, 15, 17, 19)
- `assets/EVEN.svg` — Even numbers target board (2, 4, 6, 8, 10, 12, 14, 16, 18, 20)
- `assets/targetstencil.svg` — Target stencil for download

## The Physical Game

The actual game uses two log rounds painted with D20 patterns:
- One log has all odd numbers (center is 1)
- One log has all even numbers (center is 20)

Players throw real knives at the targets based on what they roll on the dice!
