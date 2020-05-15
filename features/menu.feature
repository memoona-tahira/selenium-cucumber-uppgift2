Feature: Menu in IMDB

  Scenario: I look for menu in IMDB
    Given that I come to the IMDB site
    When I click menu button in the left side
    Then the result should open a series details in menu
