Feature: Add a quiz to a course

  Scenario: Successfully add and publish a quiz to a course

    When clicks on "ادارة المحتوى"
    And clicks on "الدورات التدريبية"
    And clicks on "تعديل" of the created course 
    And the user clicks on the "باني الدورة" button
    And adds a new section by clicking on "إضافة قسم جديد إلى الدورة"
    And fills in the section title with "section title"
    And clicks on "إضافة جديد"
    And selects the "اختبار" option to add a quiz
    And enters the quiz title as "quiz title"
    And clicks on "إضافة جديد" to create the quiz
    And opens advanced settings by clicking on "اعدادات متقدمة"
    And enables the "Quiz retaking" option
    And enables "Randomized questions ordering"
    And clicks on "حفظ التعديلات" to save settings
    And opens the quiz builder by clicking on "باني الاختبار"
    And adds a new question by clicking on "اضافة سؤال جديد"
    And selects the "true or false" question type
    And writes the quiz question
    And selects the correct answer
    And clicks on "اضافة وحفظ" to save the question
    And add second question
    Then the quiz should be added successfully

    When the user clicks on "نشر الأخبار"
    And selects the "نشر" option
    And clicks on "حفظ" to publish
    Then the quiz should be published successfully

    When the user clicks on "Course title"
    And clicks on "النشر"
    And selects "نشر"
    And clicks on "حفظ التعديلات"
    Then the course should be published successfully