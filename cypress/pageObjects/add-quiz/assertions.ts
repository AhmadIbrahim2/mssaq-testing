class AddQuizAssertions {
    quizAddedSuccessfully () {
        cy.get('div').contains('تم الحفظ بنجاح').should('be.visible')
        return this;
    }

    quizPublishSuccessfully () {
        cy.get('div').contains('تم نشر الاختبار بنجاح.').should('be.visible')
        return this;
    }

    coursePublishedSuccessfully () {
        cy.get('h2').contains('رائع، تمّ إطلاق دورتك بنجاح 🚀').should('be.visible');
        return this;
    }
};

export default AddQuizAssertions;