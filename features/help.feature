Feature: Help in IMDB

  Scenario: I look for help in IMDB
    Given that I look for help in the IMDB site
    When I choose help button in the bottom
    And I click help button in the bottom
    Then the result should open a new website with help center in IMDb
