# Store Page Documentation

## File
- `hono-client/src/pages/Store.vue`

## Purpose
The Store page is a browse-and-discover storefront. It lets users:
- search games by text,
- select multiple categories,
- sort the result set,
- favorite games,
- trigger a buy action.

The UI has two main modes based on active filters:
- No filters active: shows featured banner + recommended games section.
- Filters active (search text and/or categories): hides featured banner and shows result count + filtered game cards.

## State Model
The page uses Vue Composition API `ref` values for UI state:

- `searchQuery`: current text in the search input.
- `selectedCategories`: array of selected category IDs (multi-select).
- `sortBy`: selected sort option (`featured`, `rating`, `price-low`, `price-high`).

Data constants:
- `featuredGame`: object used for the hero banner.
- `recommendedGames`: the base game dataset displayed and filtered.
- `categories`: category button definitions (`id`, `name`, `icon`).

## Core Computed Logic

### `hasFiltersActive`
Returns `true` when at least one filter condition exists:
- non-empty search query, or
- one or more selected categories.

Used to:
- conditionally show sort dropdown,
- show result count,
- hide/show featured banner and heading variants.

### `filteredGames`
This computed builds the final game list in ordered steps:

1. Start with a shallow copy of `recommendedGames`.
2. Apply text search filter when `searchQuery` is non-empty.
3. Apply category filter when categories are selected.
4. Apply sorting based on `sortBy`.

#### Search Filter Behavior
Search is case-insensitive and checks three fields:
- `title`
- `genre`
- `description`

#### Category Filter Behavior (AND logic)
Category filtering requires that a game matches **all** selected categories.

Implementation details:
- `getGameCategoryTokens(game)` normalizes `game.genre` into lowercase tokens.
- It supports single genres and future multi-genre strings by splitting on `,`, `/`, `|`, `&`.
- Filter condition uses `every(...)` across selected categories.

Important implication with current data:
- Current games mostly have one genre value.
- Selecting multiple categories will usually produce zero results unless a game contains multiple genre tokens.

#### Sort Behavior
- `featured`: keeps source order.
- `rating`: descending rating.
- `price-low`: ascending price.
- `price-high`: descending price.

## Methods and Interaction Logic

### `toggleFavorite(gameId)`
Finds the game in `recommendedGames` and toggles its `favorite` boolean.

Effect in UI:
- favorite icon style switches between default and highlighted.

### `selectCategory(categoryId)`
Implements multi-select toggle behavior:
- if category already selected, remove it,
- else append it.

This method keeps category controls stateless relative to game data and only mutates filter state.

### `buyGame(game)`
Current behavior is a placeholder action:
- shows browser `alert` with game title and price.

In production this would usually dispatch to cart state, checkout flow, or API endpoint.

## Template Structure

### 1) Top Control Shell
Contains:
- search input with left icon,
- category button row,
- sort dropdown (only when filters active).

Category button active state uses conditional classes:
- active: accent border/background/glow,
- inactive: neutral with hover accent.

### 2) Featured Section
Rendered only when `!hasFiltersActive`.

Contains:
- featured image,
- overlay gradient,
- title/description/price,
- primary CTA button.

### 3) Recommended Grid
Always present as the result container:
- empty state card if no results,
- responsive grid (`1 -> 2 -> 4` columns across breakpoints),
- per-card favorite toggle and buy button.

## Visual/UX Notes
- Dark panel-based theme with accent green interactions.
- Active filters deliberately shift page from showcase mode to results mode.
- Hover effects are subtle scale/border/glow to emphasize click targets.

## Data/Logic Extension Points
- Replace placeholder image URLs with real CDN assets.
- Move hardcoded arrays to API-driven data with loading/error states.
- Replace `alert` with cart store action.
- Convert `genre` into `genres: string[]` to fully support strict AND filtering with realistic results.

## Summary
The Store page is built around a simple but explicit pipeline:
UI state (`searchQuery`, `selectedCategories`, `sortBy`) -> computed filtering/sorting (`filteredGames`) -> responsive card rendering and actions.
