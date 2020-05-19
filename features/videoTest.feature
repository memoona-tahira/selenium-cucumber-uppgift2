Feature: Video player
  As a user of IMDb I epxect the video player to work as expected on pages that shows movie trailers in order to be able to watch trailers and help me decide what I think of the movie.

  # Important info: IMDb uses the jwplayer - since click events through Selenium does not work with it we will use its API methods to control it: https://developer.jwplayer.com/jwplayer/docs/jw8-javascript-api-reference#section-playback

  Background: Goto a page with a movie trailer
    Given that I am on the IMDB site, on a page that display movie trailers
    And the jwplayer has loaded
    # this step necessary in some browsers, otherwise the player is forbidden to play
    And the user has 'activated' the page buy clicking somewhere on it

  Scenario: Check that the jwplayer exists
    Then the jwplayer should exist

  Scenario: Check that jwplayer starts playback
    When the video player plays
    Then a pause button should be shown
    And the playhead time displayed below the video should be "counting up"

  Scenario: Check that pausing the jwplayer works
    Given the video player plays
    When you pause it
    Then a play button should be shown
    And the playhead time displayed below the video should be "still"

  Scenario: Check that muting changes the button state
    # we can't test that the sound is actually muted :(
    When you mute the sound#    Then the 'is muted button' should be shown

  Scenario: Check that muting changes the button state
    # we can't test that the sound is actually unmuted :(
    When you unmute the sound
    Then the 'normal sound button' should be shown

 Scenario: Check that lowering the volume to zero changes the button state
    # we can't test that the sound is actually muted :(
    When you lower the volume to zero
    Then the 'is muted button' should be shown