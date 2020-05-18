Feature: Find jobs in IMDB

  Scenario: I look for jobs in IMDB
    Given that I open the IMDB site
    When I choose jobs search button in the bottom
    And I click jobs search button in the bottom
    Then the result should open a new website to find jobs in IMDb

  Scenario: I enter a keyword in the job search field
    Given that I am on the site of jobs
    When I enter job search text "Stockholm"
    And I click job search button
    Then the job search result should contain the word "Stockholm"

  Scenario: I enter a keyword + ENTER in the job search field
    Given that I am on the site of jobs
    When I enter job search text "Stockholm" + ENTER
    Then the job search result should contain the word "Stockholm"