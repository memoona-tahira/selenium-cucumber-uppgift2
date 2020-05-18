Feature: Help in IMDB

  Scenario: I look for help in IMDB
   Given that I look for help in the IMDB site
    When I choose help button in the bottom
    And I click help button in the bottom
    Then the result should open a new website with help center in IMDb

  Scenario: I enter a keyword in the search field
    Given that I am on the site of help
    When I enter search text "update"
    And I enter ENTER
    Then the search result should contain the word "update"

  Scenario: I enter a keyword + ENTER in the search field
    Given that I am on the site of help
    When I enter search text "update" + ENTER
    Then the search result should contain the word "update"