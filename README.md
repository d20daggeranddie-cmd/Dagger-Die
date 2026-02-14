# Dagger & Die

A web-based game tracker for the physical knife-throwing dice game.

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
- Click the opponent's card to record the attack and select which numbers you hit

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
- Responsive design works on desktop and mobile

## Options

The landing page includes an Options menu with gameplay preferences (saved in browser):

- **Automatically roll dice for turn order** — Dice roll automatically when the turn order screen appears
- **Automatically begin game after turn order** — Game starts immediately after turn order is determined
- **Automatically roll dice on player turn** — Dice roll automatically when each player's turn begins

## Hosting on GitHub Pages

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select "main" branch as source
4. Your game will be available at `https://[username].github.io/[repo-name]/`

## Files
- `index.html` — Landing page with info, Options menu, and game tile
- `game.html` — The complete game application (setup, turn order, gameplay)
- `assets/ODD.svg` - Odd numbers target board (1, 3, 5, 7, 9, 11, 13, 15, 17, 19)
- `assets/EVEN.svg` - Even numbers target board (2, 4, 6, 8, 10, 12, 14, 16, 18, 20)

## The Physical Game

The actual game uses two log rounds painted with D20 patterns:
- One log has all odd numbers (center is 1)
- One log has all even numbers (center is 20)

Players throw real knives at the targets based on what they roll on the dice!
