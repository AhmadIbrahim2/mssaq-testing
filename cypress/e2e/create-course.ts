import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CreateCourseActions from "cypress/pageObjects/create-course/actions";
import CreateCourseAssertions from "cypress/pageObjects/create-course/assertions";

//// Create instances of the Page Object classes to access action and assertion methods
const createCourseAct = new CreateCourseActions();
const createCourseAss = new CreateCourseAssertions();

//// Generate a unique course title using the current timestamp
const courseTitle = `دورة جديدة ${Date.now()}`;

//// This block runs once before all scenarios
before(()=>{
    // Log in to the Dashboard using a custom Cypress command
    cy.loginToDashboard();
    cy.wait(3000);
});

When ('click the "إضافة جديد" button',()=>{
    createCourseAct.clicksOnAddNew();
})

When ('fill in the title with course title',()=>{
    createCourseAct.fillsCourseTitle(courseTitle);
    
    // Save the course title to a shared JSON file to reuse it in other scenarios or steps
    cy.writeFile('cypress/shared-data/course.json', { title: courseTitle });
})

When ('select "دورة تدريبية" as the type',()=>{
    createCourseAct.selectCourseType();
})

When ('click the "إضافة جديد" button to save',()=>{
    createCourseAct.saveCourse();
    cy.wait(3000)
})

Then ('should see the course title displayed at the top',()=>{
    createCourseAss.courseCreatedSuccessfully(courseTitle);
})
