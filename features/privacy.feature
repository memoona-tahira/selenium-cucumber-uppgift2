Feature: Privacy notice in IMDB

  Scenario: I look for privacy notice in IMDB
    Given that I enter the IMDB site
    When I click privacy policy button in the bottom
    Then the result should open a new website to find IMDb privacy notice
