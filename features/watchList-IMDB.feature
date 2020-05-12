Feature: WatchList IMDB

  Scenario: As a User i will login to my account
    Given that I am on the IMDB site
    When I am logged-in
    Then I can log out

  Scenario: As a User i will add favourite program to the watchlist
    Given that I am on the IMDB site
    When I am logged-in
    And search the movie
    And add movie to watchlist
    Then the movie will have green ribbon
#  Scenario: As a user i will create a new list and move movie there
#    Given that I am on the IMDB site
#    When I am logged-in
#    And create a new watchlist
#    And move movie from old watchlist to the new watchlist
#    Then the new watchlist must have the added movie