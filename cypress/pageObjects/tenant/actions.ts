class TenantActions {

    navigateToCourses () {
        cy.get('a').contains('تصفح الدورات').click();
        return this;
    };

    clicksOnTheCourse (courseTitle : string) {
        cy.get('div.relative.flex').contains('a',courseTitle).click();
        return this;
    };

    clickOnJoinFree () {
        cy.get('button').contains('انضم الآن مجانًا').click();
        return this;
    };

    clickOnCompletePurshase () {
        cy.get('button').contains('إتمام الشراء بشكل مجاني').click();
        return this;
    };

    clicksOnCompleteCourse () {
        cy.get('button').contains('متابعة الدورة').click();
        return this;
    }

    clicksOnStartQuiz () {
        cy.get('button').contains('ابدأ الاختبار').click();
        return this;
    }

    answerForQuestions () {
        cy.get('label').contains('span','صح').click();
        cy.get('button').contains('تقديم الإجابة').click();
        cy.get('button').contains('السؤال التالي').click();
        cy.get('label').contains('span','صح').click();
        cy.get('button').contains('تقديم الإجابة').click();
        cy.get('button').contains('إنهاء الاختبار').click({force : true});
        cy.get('div[role="dialog"]').find('button').contains('إنهاء الاختبار').should('be.visible').click({ force: true });
        return this;
    }

    clicksOnRetakeTheQuiz () {
        cy.get('button').contains('إعادة الاختبار').click({force : true});
        return this;
    }

};

export default TenantActions;