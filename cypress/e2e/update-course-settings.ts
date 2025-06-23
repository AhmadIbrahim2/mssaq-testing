import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import UpdateSettingsActions from "cypress/pageObjects/update-settings/actions";
import UpdateSettingsAssertions from "cypress/pageObjects/update-settings/assertions";

const updateSettingsAct = new UpdateSettingsActions();
const UpdateSettingsAss = new UpdateSettingsAssertions();

before(()=>{
    // login to dashboard
    cy.loginToDashboard();
    cy.wait(3000);
})

When('clicks on "ادارة المحتوى"',()=>{
    updateSettingsAct.clickOnManageContent();
});

When('clicks on "الدورات التدريبية"',()=>{
    updateSettingsAct.clicksOnTrainingCourse();
});

When('clicks on "تعديل" of the created course',()=>{
    
    // Read the course title from the shared JSON file saved
    cy.readFile('cypress/shared-data/course.json').then((data) => {
        const courseTitle = data.title;
        updateSettingsAct.clicksOnCreatedCourse(courseTitle);
    });
});

When('clicks on "إعدادات الدورة" button',()=>{
    updateSettingsAct.clicksOnCourseSettings();
});

When('choose the monitors for the course',()=>{
    updateSettingsAct.chooseMonitors();
})

When('set the estimated time to complete course',()=>{
    updateSettingsAct.setEstimatedTime();
});

When('select a picture for the course',()=>{
    updateSettingsAct.selectPicture();
});

When('select the Course classification',()=>{
    updateSettingsAct.selectCourseClassification();
});

When('clicks on "حفظ التعديلات" button',()=>{
    updateSettingsAct.clicksOnSaveButton();
});

Then('should the settings edited Successfully',()=>{
    UpdateSettingsAss.settingsEditedSuccessfully();
});


