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

    answerForQuestions (order : string[], label: string) {
        order.length = 0;
        // Get the text of the first question
        cy.get('.text-node').invoke('text').then((text1) => {

        // Save the first question text into the order array
    order.push(text1.trim());

        cy.get('label').contains('span','صح').click();
        cy.get('button').contains('تقديم الإجابة').click();
        cy.get('button').contains('السؤال التالي').click();

        // Get the text of the second question
        cy.get('.text-node').invoke('text').then((text2) => {

            // Save the second question text into the order array
            order.push(text2.trim());
            // Log the question order to the Cypress console
            cy.log(`${label}:`, order);
        });
        cy.get('label').contains('span','صح').click();
        cy.get('button').contains('تقديم الإجابة').click();
        cy.get('button').contains('إنهاء الاختبار').click();
        cy.get('div[role="dialog"]').find('button').contains('إنهاء الاختبار').should('be.visible').click({ force: true });

  });
        return this;
    }

    clicksOnRetakeTheQuiz () {
        cy.get('button').contains('إعادة الاختبار').click({force : true});
        return this;
    }

};

export default TenantActions;