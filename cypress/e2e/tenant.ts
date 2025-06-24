import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TenantActions from "cypress/pageObjects/tenant/actions";
import TenantAssertions from "cypress/pageObjects/tenant/assertions";

// Create instances of Page Object classes to perform actions and assertions
const tenantAct = new TenantActions();
const tenantAss = new TenantAssertions();

// Arrays to store the order of quiz questions during first attempt and retake
let firstOrder: string[] = [];
let secondOrder: string[] = [];


Given('the user is logged in to the Tenantfront', () => {
    cy.loginToTenant();
    cy.wait(2000);
});

When('the user navigates to "الدورات"', () => {
    tenantAct.navigateToCourses();
});

Then('the newly created course should be visible', () => {
    cy.readFile('cypress/shared-data/course.json').then((data) => {
    const courseTitle = data.title;

    tenantAss.courseVisibility(courseTitle);
  });
});

When('the user clicks on the course', () => {
    cy.readFile('cypress/shared-data/course.json').then((data) => {
    const courseTitle = data.title;

    tenantAct.clicksOnTheCourse(courseTitle);
  });
});

When('clicks on "انضم الآن مجانًا"', () => {
    tenantAct.clickOnJoinFree();
});

When('clicks on "إتمام الشراء بشكل مجاني"', () => {
    tenantAct.clickOnCompletePurshase();
});

When('clicks on "متابعة الدورة"', () => {
    cy.wait(3000)
    tenantAct.clicksOnCompleteCourse();
    cy.wait(3000)
});

Then('the quiz should be displayed', () => {
    cy.readFile('cypress/shared-data/quiz.json').then((data) => {
        const quizTitle = data.title;
        tenantAss.quizVisibility(quizTitle);
    });
});

When('the user starts the quiz', () => {
    tenantAct.clicksOnStartQuiz();
});

When('answers all the questions', () => {
    
    cy.get('.text-node').invoke('text').then((text1) => {
    firstOrder.push(text1.trim());

    cy.get('label').contains('span','صح').click();
    cy.get('button').contains('تقديم الإجابة').click({force:true});
    cy.get('button').contains('السؤال التالي').click();

    // Second question
    cy.get('.text-node').invoke('text').then((text2) => {
      firstOrder.push(text2.trim());
      cy.log('First order:', firstOrder);
    });

    cy.get('button').contains('تقديم الإجابة').click({force:true});
    cy.wait(3000)
    cy.get('button').contains('إنهاء الاختبار').click({force : true});
    cy.get('div[role="dialog"]').find('button').contains('إنهاء الاختبار').should('be.visible').click({ force: true });

  });
});

Then('the quiz should be submitted successfully', () => {
    tenantAss.finishTheCourse();
});

When('the user clicks on "إعادة الاختبار"', () => {

    tenantAct.clicksOnRetakeTheQuiz();

    cy.get('.text-node').invoke('text').then((text1) => {
        secondOrder.push(text1.trim());
        cy.get('label').contains('span','صح').click();
        cy.get('button').contains('تقديم الإجابة').click();
        cy.get('button').contains('السؤال التالي').click();

    // Second question after retake
    cy.get('.text-node').invoke('text').then((text2) => {
      secondOrder.push(text2.trim());
      cy.log('Second order:', secondOrder);
    });

    cy.get('button').contains('تقديم الإجابة').click({force:true});
    cy.wait(3000)
    cy.get('button').contains('إنهاء الاختبار').click({force : true});
    cy.get('div[role="dialog"]').find('button').contains('إنهاء الاختبار').should('be.visible').click({ force: true });
  });

});

Then('the quiz should be retaken successfully', () => {
    tenantAss.retakeTheQuiz();
});

//check that the question order is different between attempts if randomized order is enabled
Then('the questions should appear in a different order if randomized setting is enabled', () => {
    cy.wrap(null).then(() => {
    expect(firstOrder).to.not.deep.equal(secondOrder);
  });
});