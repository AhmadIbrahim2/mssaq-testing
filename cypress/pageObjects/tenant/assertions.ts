class TenantAssertions {
    courseVisibility (courseTitle : string) {
        cy.get('h3').contains('a',courseTitle).should('be.visible');
        return this;
    };

    quizVisibility (quizTitle : string) {
        cy.wait(2000)
        cy.get('span').contains(quizTitle).should('be.visible');
        return this;
    }

    finishTheCourse () {
        cy.get('h3').contains('رائع، تمّ الانتهاء من الدورة بنجاح 🚀').should('be.visible');
        return this;
    }

    retakeTheQuiz () {
        cy.get('.text-node').should('be.visible')
        return this;
    }
};

export default TenantAssertions;