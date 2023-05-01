@login
Feature: To check the login functionality

	
  Scenario Outline: To validate the invaid username and Invalid password
    Given User enter in the login page
    When User give invalid "<username>" and "<password>"
    And User click the login button
    Then User should be in invalid credentials page
    
    Examples:
			|username|password|
			|nfdn|234|
		
		
    Scenario: To validate login functionality without entering login credentials
    Given User enter in the login page
    When User click the login button without entering any login credentials
    Then User should be in invalid credentials page
		