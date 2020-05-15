Feature: Get the IMDb App in IMDB

  Scenario: I get the IMDb App in IMDB
    Given that I look for the IMDb App in IMDB
    When I click get the IMDb App button in the bottom
    Then the result should open a new website to get the IMDb App
