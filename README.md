# My App

A React application that demonstrates a multi-page layout with Redux state management and routing using `react-router-dom`.

## Features

- **Multi-Page Navigation**: Navigate between pages for iPhone, Android, and a summary of selected items.
- **State Management**: Uses Redux Toolkit to manage the state of selected items across pages.
- **Responsive Design**: The layout is responsive and adapts to different screen sizes.
- **Dynamic Content**: Displays dynamic content based on user interactions.

## Project Structure

```
my-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Layout/
│   │   └── Layout.js
│   ├── Pages/
│   │   ├── NotFound.js
│   │   ├── Page1.js
│   │   ├── Page2.js
│   │   └── Page3.js
│   ├── App.js
│   ├── selectedItemsSlice.js
│   ├── store.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Pages

1. **Page 1 (iPhone Selection)**:
   - Displays a list of iPhone models with images, names, and prices.
   - Allows users to select/deselect items.
   - Navigates to the Android page.

2. **Page 2 (Android Selection)**:
   - Displays a list of Android models with images, names, and prices.
   - Allows users to select/deselect items.
   - Navigates to the summary page.

3. **Page 3 (Summary)**:
   - Displays a list of selected items with their total price.
   - Allows navigation back to the iPhone or Android pages.

4. **NotFound**:
   - Displays a 404 error message for undefined routes.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Umair001101/Redux.git
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install,
   ```
   ```bash
   npm react-router-dom
   npm install @reduxjs/toolkit react-redux react-router-dom
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Redux Toolkit**: State management for selected items.
- **React Router**: For routing and navigation.
- **CSS**: For styling and responsive design.

