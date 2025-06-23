class UpdateSettingsAssertions {
    settingsEditedSuccessfully () {
        cy.get('div').should('contain','تم حفظ التعديلات التي أجريتها بنجاح.');
        return this;
    }
};

export default UpdateSettingsAssertions;