Feature: WatchList IMDB

  Scenario: As a User i will login to my account
    Given that I am on the IMDB site
    When I am logged-in
    And I can log out
    Then Login link is available

  Scenario: As a User i will add favourite program to the watchlist
    Given that I am on the IMDB site
    When I am logged-in
    And search the movie
   And add movie to watchlist
    Then the movie will have green ribbon

  Scenario: As a user i want to look at my watchlist
    Given that I am on the IMDB site
    When I am logged-in
    And search the movie
    And add movie to watchlist
    And I am on the watchlist page
    Then the watchlist contain the movie