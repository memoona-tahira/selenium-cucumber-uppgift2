Feature:As a user i want to find movies with different way in order to it will be easy to me to find what i want.

  Scenario: When I enter a keyword in the search field
    Given that I am on the IMDB site
    When I enter the search text "Ramy"
    And I click the search button
    Then the first search result should contain the word "Ramy"
    And click on it

  Scenario: When I enter a keyword in the search field
    Given that I am on the IMDB site
    When I enter the search text "Lost" + ENTER
    Then the first search result should contain the word "Lost"
    And click on it



