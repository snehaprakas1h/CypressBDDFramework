# Cypress BDD Project

## 📌 Overview
This project is a **Cypress BDD** (Behavior-Driven Development) framework used for end-to-end testing. It follows the **Cucumber** style, using `.feature` files to write test scenarios in **Gherkin syntax**.

## 🏗️ Project Structure
```
Cypress_BDD-main/
├── cypress/
│   ├── e2e/                # Feature files (Gherkin syntax)
│   │   ├── Contact_Us.feature
│   │   ├── Login_Portal.feature
│   ├── fixtures/           # Test data (JSON files)
│   │   ├── Config.json
│   ├── support/            # Custom commands and test setup
│   │   ├── commands.js
│   │   ├── e2e.js
├── cypress.config.ts       # Cypress configuration file
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── .gitignore              # Files to ignore in Git
```

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn installed

### Installation Steps
1. **Clone the Repository**
   ```sh
   git clone <repository-url>
   cd Cypress_BDD-main
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```

## 🚀 Running Tests

### Run Cypress Test Runner (GUI)
```sh
npx cypress open
```

### Run Tests in Headless Mode
```sh
npx cypress run
```

## 📝 Writing Tests
Tests are written in **Gherkin syntax** inside `.feature` files. Example:
```gherkin
Feature: Login Functionality
  Scenario: Valid user login
    Given I navigate to the login page
    When I enter valid credentials
    Then I should see the homepage
```

## 📌 Additional Notes
- Feature files should be inside `cypress/e2e/`
- Step definitions should be mapped in the `support/` folder

## 📧 Contact
For any issues or improvements, please raise an issue or contribute to the repository.

---

