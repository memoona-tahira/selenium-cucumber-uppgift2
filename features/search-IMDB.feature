Feature:As a user i want to find movies with different way in order to it will be easy to me to find what i want.

  Scenario: When I enter a keyword in the search field
    Given that I am on the IMDB site
    When I enter the search text "Ramy"
    And I click the search button
    Then the first search result should contain the word "Ramy"
    And click on the movie

  Scenario: When I enter a keyword in the search field
    Given that I am on the IMDB site
    When I enter the search text "Lost" + ENTER
    Then the first search result should contain the word "Lost"
    And click on the movie
    Then click on the share button
    And share i it on the Email

  Scenario: As a user i want to see  what's on TV and Streaming section
    Given that I am on the IMDB site
    Then click on  What's on TV and Streaming section on the below
    And click on the Everything Coming to Netflix
    And the list sort by Runtime
    Then the list lister by ascending order
    Then View by Grid view



