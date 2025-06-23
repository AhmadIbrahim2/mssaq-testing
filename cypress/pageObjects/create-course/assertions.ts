class CreateCourseAssertions {
    courseCreatedSuccessfully (courseTitle : string) {
        cy.get('h1').should('contain',courseTitle);
        return this;
    }
};

export default CreateCourseAssertions;