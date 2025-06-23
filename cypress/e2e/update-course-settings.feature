Feature: Edit Course Settings

  Scenario: Edit settings of an existing course
    When clicks on "ادارة المحتوى"
    And clicks on "الدورات التدريبية"
    And clicks on "تعديل" of the created course 
    And clicks on "إعدادات الدورة" button 
    And choose the monitors for the course
    And set the estimated time to complete course
    And select a picture for the course
    And select the Course classification
    And clicks on "حفظ التعديلات" button
    Then should the settings edited Successfully