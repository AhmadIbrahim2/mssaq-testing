import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AddQuizActions from 'cypress/pageObjects/add-quiz/actions';
import AddQuizAssertions from 'cypress/pageObjects/add-quiz/assertions';

// Create instances to access action and assertion methods
const addQuizAct = new AddQuizActions();
const addQuizAss = new AddQuizAssertions();

const sectionTitle = 'قسم جديد';
const quizTitle = `اختبار جديد ${Date.now()}`;

before(()=>{
    cy.loginToDashboard();
    cy.wait(3000);
})

When('clicks on "ادارة المحتوى"',()=>{
    addQuizAct.clickOnManageContent();
});

When('clicks on "الدورات التدريبية"',()=>{
    addQuizAct.clicksOnTrainingCourse();
    cy.wait(3000)
});

When('clicks on "تعديل" of the created course',()=>{
    //reading course title from shared file
    cy.readFile('cypress/shared-data/course.json').then((data) => {
        const courseTitle = data.title;
        addQuizAct.clicksOnCreatedCourse(courseTitle);
    });
});

When('the user clicks on the "باني الدورة" button', () => {
    addQuizAct.clicksOnCourseBuilder();
});

When('adds a new section by clicking on "إضافة قسم جديد إلى الدورة"', () => {
    addQuizAct.addNewSection();
});

When('fills in the section title with "section title"', () => {
    addQuizAct.fillsSectionTitle(sectionTitle);
});

When('clicks on "إضافة جديد"', () => {
    addQuizAct.clicksOnAddNew();
});

When('selects the "اختبار" option to add a quiz', () => {
    addQuizAct.selectOption();
});

When('enters the quiz title as "quiz title"', () => {

    //Enter the quiz title using the dynamically generated title and save it for reuse
    addQuizAct.entersQuizTitle(quizTitle);
    cy.writeFile('cypress/shared-data/quiz.json', { title: quizTitle });
});

When('clicks on "إضافة جديد" to create the quiz', () => {
    addQuizAct.clicksOnAdd();
});

When('opens advanced settings by clicking on "اعدادات متقدمة"', () => {
    cy.wait(3000)
    addQuizAct.openAdvanceSettings();
});

When('enables the "Quiz retaking" option', () => {
    addQuizAct.enablesQuizRetaking();
});

When('enables "Randomized questions ordering"', () => {
    addQuizAct.enablesRandomizedquestions();
});

When('clicks on "حفظ التعديلات" to save settings', () => {
    addQuizAct.clicksSaveSettings();
});

When('opens the quiz builder by clicking on "باني الاختبار"', () => {
    addQuizAct.openQuizBuilder();
});

When('adds a new question by clicking on "اضافة سؤال جديد"', () => {
    addQuizAct.addNewQuestion()
});

When('selects the "true or false" question type', () => {
    addQuizAct.selectQuestionType();
});

When('writes the quiz question', () => {
    const question = 'هل 2 + 2 = 4 ؟';
    addQuizAct.writesQuestion(question);
});

When('selects the correct answer', () => {
    addQuizAct.selectCorrectAnswer();
});

When('clicks on "اضافة وحفظ" to save the question', () => {
    addQuizAct.clickOnAddAndSave();
});

When('add second question', () => {
    const SecondQuestion = 'هل عدد ايام الاسبوع 7 ؟'
    addQuizAct.addNewQuestion();
    addQuizAct.addSecondQuestion(SecondQuestion);
    addQuizAct.clickOnAddAndSave();
});

//Verify that the quiz was added successfully
Then('the quiz should be added successfully', () => {
    addQuizAss.quizAddedSuccessfully();
});


/////////////////////////////////////////////////


When('the user clicks on "نشر الأخبار"', () => {
    addQuizAct.publishQuiz();
});

When('selects the "نشر" option', () => {
    addQuizAct.selectPublish();
});

When('clicks on "حفظ" to publish', () => {
    addQuizAct.clickOnSave()
});

// Verify quiz was published successfully
Then('the quiz should be published successfully', () => {
    addQuizAss.quizPublishSuccessfully();
});


///////////////////////////////////////////////////

// When the user clicks on the course title (read from shared data)
When('the user clicks on "Course title"', () => {
    cy.readFile('cypress/shared-data/course.json').then((data) => {
        const courseTitle = data.title;
        addQuizAct.clicksOnCourseTitle(courseTitle);
    });
});

When('clicks on "النشر"', () => {
    addQuizAct.clicksOnPublishButton();
});

When('selects "نشر"', () => {
    addQuizAct.selectPublishOption();
});

When('clicks on "حفظ التعديلات"', () => {
    addQuizAct.clicksOnSaveChanges();
});

// Verify the course was published successfully
Then('the course should be published successfully', () => {
    addQuizAss.coursePublishedSuccessfully();
});