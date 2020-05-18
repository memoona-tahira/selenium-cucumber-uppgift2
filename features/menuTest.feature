Feature: menu test
  Scenario: As a user i want to see top rated movies and sorted by IMDB Rating
    Given that I am on the IMDB site
    When I click in the menu
    And select Top Rated Movies from movies catogary
    Then It will show you Text Top Retad Movies with number of titles
    And I will choose from sort by Release Date

  Scenario: As a user i want to see Most Popular TV Shows
    Given that I am on the IMDB site
    When I click in the menu
    And select Most Popular TV Shows from TV Shows catogary
    And then i click on it

  Scenario: As a user I want to see contain on the Celebs catogary
    Given that I am on the IMDB site
    When I click in the menu
    Then I select Born today from Celebs catogary
    And then i click in the menu
    Then I select Most Popular Celebs from Celebs catogary
    And I go to the menu igen
    Then I select Celebrity News from Celebs catogary
    And I ckick to the first news


