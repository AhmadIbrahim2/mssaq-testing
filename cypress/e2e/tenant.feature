Feature: Verify course and quiz visibility and behavior in Tenantfront

  Background:
    Given the user is logged in to the Tenantfront

  Scenario: User can access the course and take the quiz with correct behavior
    When the user navigates to "الدورات"
    Then the newly created course should be visible
    When the user clicks on the course
    And clicks on "انضم الآن مجانًا"
    And clicks on "إتمام الشراء بشكل مجاني"
    And clicks on "متابعة الدورة"
    Then the quiz should be displayed
    When the user starts the quiz
    And answers all the questions
    Then the quiz should be submitted successfully
    When the user clicks on "إعادة الاختبار"
    Then the quiz should be retaken successfully
    And the questions should appear in a different order if randomized setting is enabled
