Feature: Create a new course in Msaaq Dashboard

  Scenario: Successfully creating a new course
    When click the "إضافة جديد" button
    And fill in the title with course title
    And select "دورة تدريبية" as the type
    And click the "إضافة جديد" button to save
    Then should see the course title displayed at the top
