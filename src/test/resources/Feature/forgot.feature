@forgot
Feature: To validate the forgot passsword functionality
	
	
  Scenario: To To validate searching the account using mobile number when user forgets password
    Given User enter in the login page
    And Click  the forgot link
    Then User will be Redirect to Find Your Account Page
    When User enter invalid username
    And User click  the search button
    Then User will  see the No Search Results in the Find you Account Page
