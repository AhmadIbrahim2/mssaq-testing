class AddQuizActions {
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

    clicksOnCourseBuilder () {
        cy.get('a').contains('باني الدورة').click();
        return this;
    }

    addNewSection () {
        cy.get('button').contains('إضافة قسم جديد إلى الدورة').click({force:true});
        return this;
    }

    fillsSectionTitle (sectionTitle : string) {
        cy.get('input[name=title]').type(sectionTitle);
        return this;
    }

    clicksOnAddNew () {
        cy.get('button').parents('div[role="dialog"]').contains('إضافة جديد').click({force:true});
        return this;
    }

    selectOption () {
        cy.get('button').contains('اختبار').click();
        return this;
    }

    entersQuizTitle (quizTitle : string) {
        cy.get('input[name=title]').type(quizTitle);
        return this;
    }

    clicksOnAdd () {
        cy.get('button').parents('div[role="dialog"]').contains('إضافة جديد').click({force:true});
        return this;
    }

    openAdvanceSettings () {
        cy.get('button').contains('إعدادات متقدمة').click();
        return this;
    }

    enablesQuizRetaking () {
        cy.wait(3000)
        cy.get('div.grid.grow').contains('label','إمكانية إعادة الاختبار').realClick()
        return this;
    } 

    enablesRandomizedquestions () {
        cy.get('div').contains('label','ترتيب الأسئلة بشكل عشوائي').realClick()
        return this;
    }

    clicksSaveSettings () {
        cy.get('button').contains('حفظ التعديلات').click();
        return this;
    }

    openQuizBuilder () {
        cy.get('a').contains('باني الاختبار').click();
        return this;
    }

    addNewQuestion () {
        cy.get('button').contains('إضافة سؤال جديد').click();
        return this;
    }

    selectQuestionType () {
        cy.get('div').contains('صح وخطأ').click();
        return this;
    }

    writesQuestion (question : string) {
        cy.get('.tiptap').type(question);
        return this;
    }

    selectCorrectAnswer () {
        cy.get('div').contains('label','صح').realClick();
        return this;
    }

    clickOnAddAndSave () {
        cy.get('button').contains('إضافة وحفظ').click()
        return this;
    }

    addSecondQuestion (SecondQuestion : string) {
        cy.get('div').contains('صح وخطأ').click();
        cy.get('.tiptap').type(SecondQuestion);
        cy.get('div').contains('label','صح').realClick();
        return this;
    }

    publishQuiz () {
        cy.get('button').contains('نشر الاختبار').click();
        return this;
    }

    selectPublish () {
        cy.get('button[value="published"]').click();
        return this;
    }

    clickOnSave () {
        cy.get('button').contains('حفظ').click();
    }
    ////////////////////////////
    clicksOnCourseTitle (courseTitle : string) {
        cy.get('a').contains(courseTitle).click();
        return this;
    }

    clicksOnPublishButton () {
        cy.get('a').contains('النشر').click();
        return this;
    }

    selectPublishOption () {
        cy.get('div').contains('span','نشر').click();
        return this;
    }

    clicksOnSaveChanges () {
        cy.get('button').contains('حفظ التعديلات').click({force : true})
    }
}; 

export default AddQuizActions;