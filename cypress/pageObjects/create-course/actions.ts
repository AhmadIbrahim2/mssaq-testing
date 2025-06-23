class CreateCourseActions {

    clicksOnAddNew () {
        cy.get('[type=button]').contains('إضافة جديد').click();
        return this;
    };

    fillsCourseTitle (courseTitle : string) {
        cy.get('[name=title]').type(courseTitle);
        return this;
    };

    selectCourseType () {
        cy.get('label').contains('span','دورة تدريبية').click();
        cy.wait(3000);
        return this;
    };

    saveCourse () {
        cy.get('div[role="dialog"]').contains('button', 'إضافة جديد').click();
        return this;
    };

};

export default CreateCourseActions;