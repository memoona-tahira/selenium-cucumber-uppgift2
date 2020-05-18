Feature: User Settings IMDB

  Scenario: As a User i will update my UserId
    Given that I am on the IMDB site
    When I am logged-in
      And I go to account settings
      And I edit my profile
      And click edit button
      And I change my user id
    Then user id will be changed

    Scenario: As a user i will change my Biography

      Given that I am on the IMDB site
      When I am logged-in
      And I go to account settings
      And I edit my profile
      And I change my biography
      Then user biography will be changed
