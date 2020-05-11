Feature: Search IMDB

  Scenario: When I enter a keyword in the search field
    Given that I am on the IMDB site
    When I enter the search text "Ramy"
    And I click the search button
    Then the first search result should contain the word "Ramy"

  Scenario: When I enter a keyword in the search field
    Given that I am on the IMDB site
    When I enter the search text "Ramy" + ENTER
    Then the first search result should contain the word "Ramy"