
# Simple Calculator (Angular)

A modern calculator web application built with Angular. It supports multi-step expressions, a button-based UI, history tracking, dark/light mode, and more.

## Features
- Multi-step expression evaluation (e.g., 2+3*4)
- Calculator grid UI with clickable buttons for numbers, operators, decimal, parentheses, clear, delete, and equals
- Calculation history with scrollable list and clear option
- Responsive, mobile-friendly design
- Dark/Light mode toggle
- Keyboard and mouse support
- Calculation history persists in localStorage
- Standalone Angular configuration (no NgModule)


## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm (v9 or later recommended)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/simple-calculator.git
   cd simple-calculator
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running Locally
Start the development server:
```sh
npm start
```
Visit `http://localhost:4200` in your browser.

### Building for Production
```sh
npm run build
```
The output will be in the `dist/` directory.


## Deploying to GitHub Pages
1. Build the project:
   ```sh
   ng build --base-href="/simple-calculator/"
   ```
2. Deploy using the Angular CLI:
   ```sh
   npx angular-cli-ghpages --dir=dist/simple-calculator/browser
   ```
   Or manually copy the contents of `dist/simple-calculator/browser` to your `gh-pages` branch.


## License
MIT
