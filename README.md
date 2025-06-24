# 🧪 Msaaq E2E Testing (Cypress + TypeScript)

This project contains end-to-end (E2E) tests for the [Msaaq] platform using **Cypress**, **TypeScript**, and **Cucumber** style feature files.
It tests the Dashboard and Tenantfront apps with scenarios such as creating a course, adding quizzes, and updating course settings.


-------------------------------------------------------

## 🚀 Setup Instructions

### ✅ Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

### 📥 1. Clone the Repository

```bash
git clone https://github.com/AhmadIbrahim2/msaaq-test.git
cd msaaq-test
```

- Install Dependencies
  ```npm install -y```
  
- Open Cypress in Interactive Mode
 ``` npx cypress open```
  
- Run Cypress in Headless Mode
 ``` npx cypress run```

-### 📦 Install Required Dependencies

Run the following command to install all required dev dependencies:
```
npm install --save-dev \
  typescript \
  ts-node \
  cypress \
  @badeball/cypress-cucumber-preprocessor \
  @bahmutov/cypress-esbuild-preprocessor \
  esbuild \
  @types/node \
  @4tw/cypress-drag-drop \
  cypress-file-upload \
  cypress-real-events
```

--------------------------------------------------------

🔐 Credentials & Test Data

Test login credentials are stored in:

cypress/fixtures/dashboard.json

cypress/fixtures/tenant.json

Example:
```
{
  "email": "raghad.a+msaaq-qa@msaaq.com",
  "password": "qa-task-9283"
}
```
Other shared test data (e.g., course titles, quiz settings) can be found in:
cypress/shared-data/course.json
cypress/shared-data/quiz.json

--------------------------------------------------------
🧱 Project Structure
```
msaaq-test/
├── cypress/
│   ├── e2e/                     # Feature files + step definitions
│   ├── fixtures/               # Login credentials and static test data
│   ├── pageObjects/           # Page-level action & assertion files
│   │   ├── add-quiz/
│   │   ├── create-course/
│   │   ├── tenant/
│   │   └── update-settings/
│   ├── shared-data/           # Common JSON test data
│   └── support/               # Custom Cypress commands and setup
├── cypress.config.ts          # Cypress configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project metadata and scripts
```
----------------------------------------------------------

🧩 BDD Syntax

This project uses Cucumber-style .feature files with step definitions in TypeScript.
Example Feature (create-course.feature):
```
 Feature: Create Course
 
  Scenario: Successfully creating a new course
    When click the "إضافة جديد" button
    And fill in the title with course title
    And select "دورة تدريبية" as the type
    And click the "إضافة جديد" button to save
    Then should see the course title displayed at the top

- Step definitions are mapped in create-course.ts.
```
----------------------------------------------------------

🚀 Running the Tests in Order
To ensure stability, the test features should be executed in the following order:

- create-course.feature

- update-course-settings.feature

- add-quiz.feature

- tenant.feature

----------------------------------------------------------
💻 Useful Scripts

* Run specific test:
* ```
  npx cypress run --spec "cypress/e2e/create-course.ts"
  ```

----------------------------------------------------------



  
