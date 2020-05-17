Feature: IMDb Developer in IMDB

  Scenario: I look for IMDb Developer in IMDB
    Given that I surfer the IMDB site
    When I click IMDb Developer button in the bottom
    Then the result should open a new website to find IMDb Developer
