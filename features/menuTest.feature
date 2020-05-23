Feature: menu test
  Scenario: As a user i want to see top rated movies and sorted by IMDB Rating
    Given that I am on the IMDB site
    When I click in the menu
    And select Top Rated Movies from movies catogary
    Then It will show you Text Top Retad Movies with number of titles
    And sorted by Release Date

  Scenario: As a user i want to see Most Popular TV Shows
    Given that I am on the IMDB site
    When I click in the menu
    And select Most Popular TV Shows from TV Shows catogary
    And sorted by IMDB Rating
    And then i click on it

  Scenario: As a user I want to see contain on the Celebs catogary
    Given that I am on the IMDB site
    When I click in the menu
    Then I select Born today from Celebs catogary
    And sort by name ascending
    Then sort by name descending


