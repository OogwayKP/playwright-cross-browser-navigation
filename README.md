# playwright-cross-browser-navigation

This project demonstrates how to use **Playwright** to automate and verify basic page navigation by detecting **URL changes** across **multiple browsers** — Chromium (Chrome), Firefox, and WebKit (Safari).

## 🔍 What It Does

- Automates a basic login and navigation flow on a sample website
- Detects when the URL changes after user interactions
- Validates that navigation worked as expected
- Runs tests across **Chrome, Firefox, and Safari** using a single test file

## 🧪 Technologies Used

- [Playwright](https://playwright.dev/)
- JavaScript (or TypeScript if preferred)
- Node.js

## 🚀 How to Run the Tests

1. Install dependencies:
   ```bash
   npm install

2. Run tests in all supported browsers:
   ```bash
   npx playwright test

3. open the HTML report after test run:
   ```bash
   npx playwright show-report