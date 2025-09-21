# Simple Calculator (Angular)

A simple calculator web application built with Angular. It supports basic arithmetic operations (add, subtract, multiply, divide) and uses Bootstrap for styling.

## Features
- Add, subtract, multiply, and divide two numbers
- Responsive UI with Bootstrap
- Two-way data binding using `ngModel`
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
   npx angular-cli-ghpages --dir=dist/simple-calculator
   ```
   Or manually copy the contents of `dist/simple-calculator` to your `gh-pages` branch.

## Project Structure
```
angular.json
package.json
src/
  app/
    app.component.ts
    app.component.html
    app.component.css
    ...
  index.html
  main.ts
  styles.css
```

## License
MIT
