# Library Page Documentation

## File
- `hono-client/src/pages/Library.vue`

## Purpose
The Library page is a Steam-style two-pane game management view.

Layout intent:
- Left pane (primary): either
  - list of owned games as actionable cards, or
  - expanded details view for one selected game.
- Right pane (secondary): searchable compact list of all games with quick selection.

This gives a fast browse-select-open workflow while keeping context visible.

## State Model
Reactive state:
- `searchQuery`: text used to filter library list.
- `openedGameId`: currently opened game in left detail view (`null` means list mode).

Static dataset:
- `libraryGames`: array of game objects containing metadata:
  - `id`, `title`, `cover`, `genre`,
  - `hoursPlayed`, `lastPlayed`,
  - `installed`, `size`, `description`.

## Core Computed Logic

### `filteredLibraryGames`
Builds the list shown in:
- left card list (when no opened game),
- right compact list (always).

Filtering behavior:
- if search is empty -> return all games,
- else case-insensitive includes match against:
  - `title`
  - `genre`.

### `openedGame`
Derives selected game object from `openedGameId`:
- returns `null` when no game is opened,
- otherwise resolves game by ID from `libraryGames`.

This computed cleanly separates selected ID state from rendered object data.

## Methods and Interaction Logic

### `openGame(gameId)`
Sets `openedGameId`.

Effects:
- left pane switches into details mode,
- right sidebar selected item gets active highlight.

### `closeOpenedGame()`
Resets `openedGameId` to `null`.

Effect:
- left pane returns to card list mode.

### `playGame(game)`
Placeholder action that launches an alert message.

Future replacement:
- local launcher call,
- backend API action,
- route to game runtime state.

## Template Structure

### Outer Grid
`lg:grid-cols-4` split:
- left section uses `lg:col-span-3`,
- right sidebar uses 1 column.

### Left Pane Behavior
Conditional rendering by `openedGame`:

1. **Details Mode (`openedGame` exists)**
- top header with game title + back button,
- large cover image hero,
- description paragraph,
- metadata cards (genre/playtime/size),
- action row (Play, Details placeholder, last played).

2. **List Mode (`openedGame` is null)**
- heading "Your Games",
- empty-state message if filtered list is empty,
- stacked game cards with:
  - horizontal cover,
  - title/playtime/install-status,
  - Play and Details actions.

### Right Sidebar
Key elements:
- top search bar,
- "All Games" list,
- compact rows (cover + title).

Interaction:
- each row opens that game in left pane.

Styling/behavior refinements:
- desktop fixed-height/sticky sidebar (`lg:h-[80vh]`, `lg:sticky`, `lg:top-4`),
- internal scrolling list (`overflow-y-auto`),
- custom scrollbar styles,
- active row highlight uses accent border, glow, gradient background, left accent bar, and title color shift.

## UX Flow
Typical path:
1. User types in right search bar.
2. Both right list and left list mode results narrow.
3. User clicks a game in sidebar or card "Details".
4. Left pane switches to that game detail view.
5. User can play or return to list.

This reduces navigation friction by avoiding page transitions.

## Responsiveness
- Mobile/tablet: grid collapses to one column, sidebar stacks below main section.
- Desktop: clear two-pane workspace with persistent selector panel.

## Extension Points
- Persist `openedGameId` in route query for deep-linking.
- Add sorting and grouping in sidebar (installed/recent/favorites).
- Replace placeholders with real game ownership API.
- Add context menu actions in sidebar rows.
- Wire `playGame` to launcher service.

## Summary
The Library page uses a focused state machine with two reactive values (`searchQuery`, `openedGameId`) and two computed selectors (`filteredLibraryGames`, `openedGame`) to power a robust two-pane UI: browse quickly on the right, inspect and act on the left.
