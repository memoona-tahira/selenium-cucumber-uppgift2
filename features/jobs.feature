Feature: Find jobs in IMDB

  Scenario: I look for jobs in IMDB
    Given that I open the IMDB site
    When I choose jobs search button in the bottom
    And I click jobs search button in the bottom
    Then the result should open a new website to find jobs in IMDb
