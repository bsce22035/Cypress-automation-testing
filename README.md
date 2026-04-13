# Automated Testing of AutomationExercise.com using Cypress

This project demonstrates end-to-end automation testing of an e-commerce website using Cypress with the Page Object Model (POM) design pattern. The goal is to build a scalable, maintainable, and efficient test automation framework for validating real-world user workflows.

## Features
- Automated UI testing using Cypress
- Implementation of Page Object Model (POM)
- Modular and reusable test structure
- Coverage of complete e-commerce flow
- Support for both positive and negative test cases
- Headed and headless test execution
  
## Test Coverage

The following modules of the website are automated:

- User Registration
-  Login
- Product Listing & Browsing
- Add to Cart
- Cart Management
- Checkout Process
- Payment Workflow
- Order Confirmation
- Order History Retrieval

 ## Tech Stack
1. Cypress – End-to-end testing framework
2. Node.js & npm – Package management
3. JavaScript – Test scripting
4. Visual Studio Code – Development environment

## Project Structure

```cypress/
│
├── e2e/
│   └── automationexercise/
│       ├── registeration.cy.js
│       ├── order_placement.cy.js
│       ├── payment.cy.js
│       ├── order_confirmation.cy.js
│       └── order_retrieval.cy.js
│
├── pages/
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── HomePage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── PaymentPage.js
│   ├── ProductPage.js
│   └── OrderPage.js
│
├── fixtures/
│   └── users.json
│
├── support/
│   ├── commands.js
│   └── e2e.js
│
└── screenshots/```

## Installation
1. Clone the repository
2. git clone <repo-link>
3. cd project-folder
4. Initialize project
5. npm init -y
6. Install Cypress npm install cypress --save-dev

## Running Tests
1. Open Cypress Test Runner (Interactive Mode)
2. npx cypress open, npx cypress run

## Key Concepts Used
- Page Object Model (POM)
- Reusable components
- Assertions and validations
- Automated workflows
- Test data management using fixtures

## Conclusion
This project highlights how Cypress combined with POM provides a robust, scalable, and maintainable automation framework for testing modern web applications, especially e-commerce systems
