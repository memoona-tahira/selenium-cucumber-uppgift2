Feature: Privacy notice in IMDB

  Scenario: I look for Privacy Policy in IMDB
    Given that I enter the IMDB site
    When I choose Privacy Policy button in the bottom
    And I click Privacy Policy button in the bottom
    Then the result should open a new website to find IMDb privacy notice
