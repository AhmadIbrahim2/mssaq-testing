class UpdateSettingsActions {

    clickOnManageContent () {
        cy.get('div').contains('span','إدارة المحتوى').click();
        return this;
    }

    clicksOnTrainingCourse () {
        cy.get('a').contains('span','الدورات التدريبية').click();
        return this;
    }

    clicksOnCreatedCourse (courseTitle : string) {
        cy.contains('tr',courseTitle).find('a').contains('تعديل').click();
        return this;
    }

    clicksOnCourseSettings () {
        cy.get('a').contains('إعدادات الدورة').click();
        return this;
    }

    chooseMonitors () {
        cy.get('div').contains('div','اختر..').click({force:true})
        cy.get('.select__menu').contains('Raghad').click();
        return this;
    }

    setEstimatedTime () {
        cy.get('[name=hours').click({force:true}).type('2',{force:true})
        return this;
    }

    selectPicture () {
        const imageFile = 'course.jpg';
        cy.get('input[name=thumbnail]').attachFile(imageFile,{force:true});
        return this;
    }

    selectCourseClassification () {
        cy.get('div').contains('div','حدّد التصنيف المناسب للدورة').click({force:true})
        cy.get('.select__menu').contains('غير مصنف').click();
        return this;
    }

    clicksOnSaveButton() {
        cy.get('button').contains('حفظ ومتابعة').click()
        cy.wait(3000);
        return this;
    }
};

export default UpdateSettingsActions;