# Online Courses Catalog (Test Task)

A pixel-perfect, responsive implementation of a card-based catalog with real-time search and category filtering. This project translates a Figma design into clean, semantic HTML, modular SCSS, and Vanilla JavaScript.

## Features

- **Pixel-Perfect Implementation:** Exact match of the 1920px desktop design.
- **Responsive Adaptation:** Fully "rubber" layout (fluid) that adapts seamlessly from 1920px down to 320px without rigid breakpoints, using `clamp()` logic and percentage-based widths.
- **Interactive Filtering:**
    - **Category Filter:** Filter courses by topics (Marketing, Management, HR, etc.).
    - **Live Search:** Search by course title or author name.
    - **Combined Logic:** Search works within selected categories.
- **Zero Dependencies:** Built entirely with native browser technologies (No jQuery, no Bootstrap, no React/Vue).
- **BEM Methodology:** Strict adherence to Block-Element-Modifier naming conventions for maintainable styles.

## Tech Stack

- **HTML5:** Semantic markup.
- **SCSS (Sass):** Preprocessor used for variables, nesting, and mixins.
- **JavaScript (ES6+):** Vanilla JS for DOM manipulation and logic.
- **NPM Scripts:** For SCSS compilation and development workflow.

## Project Structure

```text
project-root/
│
├── src/
│   ├── assets/         # Images and icons
│   ├── styles.scss     # Source Sass file
│   ├── styles.css      # Compiled CSS (linked in HTML)
│   └── script.js       # Logic for search and filtering
│
├── index.html          # Main HTML structure
├── package.json        # Project metadata and scripts
├── .gitignore          # Git ignore rules
└── README.md           # Documentation
```

## Installation & Setup

This project uses `npm` to manage the SCSS compiler.

1. Clone the repository: 
```bash
git clone <https://github.com/Starmarshal/Job-Search-Task>
cd <folder-name>
```
2. Install dependencies:
```bash
npm install
#or yarn
```
3. Run the development watcher: This command will watch for changes in `styles.scss` and automatically compile them to `styles.css.`
4. Open the project: Simply open `index.html` in your browser.

## Styling Architecture (SCSS)

The styles are built for scalability using SCSS features:

- **Variables:** Color palette mapped to CSS custom properties (root) and SCSS variables for consistency.
- **Mixins:** Custom mixins for media queries (`@include mobile`, `@include tablet`) to manage responsive behavior.
- **Functions:**
- - `px-to-rem()`: Automates conversion from pixels to rems for accessibility.
- - `px-to-percent()`: Calculates fluid widths based on the container size.

## JavaScript Logic

The script handles the interaction without page reloads:

1. **State Management:** Tracks the currently active category and search query.
2. **Debouncing:** The search input includes a 300ms debounce to prevent excessive DOM updates while typing.
3. **Cross-Filtering:** The `updateCourseDisplay()` function ensures that a card is only shown if it matches both the active search query AND the selected category.
4. **UX Enhancements:** Displays a "No results found" message when filters exclude all items.

### Author's Note

his project was created as a test assignment to demonstrate proficiency in native web technologies, SCSS architecture, and attention to UI/UX detail.