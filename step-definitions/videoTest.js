let { $, sleep } = require('./funcs');

// Note: We ASSUME and HAVE CHECKED MANUALLY
// that the buttons not shown
// (for example play is not shown when you are playing,
//  pause is not played when you pause)
// are actually removed from the DOM, not only hidden
// so this makes it ok to look for if an element/'button'
// exists/can be located in our tests.

// Note that there are very few expect statements here
// since waiting until an element is located with a timeLimit
// will generate a very readable error if the element does not exist
// after that time limit!

// Time limit whe waiting for elements to be located
let timeLimit = 5000;

const waitForEl = async css =>
  driver.wait(until.elementLocated(By.css(css)), timeLimit);

module.exports = function () {

  this.After(async function () {
    // sleep for a short while after each scenario
    // (remove this to run tests faster)
    await sleep(1000);
  })

  this.Given(/^that I am on the IMDB site, on a page that display movie trailers$/, async function () {
    await helpers.loadPage('https://www.imdb.com/video/vi3460938777?playlistId=tt6751668&ref_=vp_rv_1');
  });

  this.Given(/^the jwplayer has loaded$/, async function () {
    // note: the plater does not exist immediately
    // it is built and added to the DOM by a javascript
    // so wait for one of its elements to exist
    await waitForEl('.jw-controls');
  });

  this.Given(/^the user has 'activated' the page buy clicking somewhere on it$/, async function () {
    let bodyEl = await $('body');
    await bodyEl.click();
  });

  this.Then(/^the jwplayer should exist$/, async function () {
    // note: driver executeScript executes a script on the page
    // and you can return a result from this
    let exists = await driver.executeScript('return !!window.jwplayer');
    expect(exists,
      'Could not find the jwplayer'
    ).to.be.true;

  });

  this.When(/^the video player plays$/, async function () {
    await driver.executeScript('jwplayer().play()');
  });

  this.Then(/^a pause button should be shown$/, async function () {
    // note: waiting for an element with a time limit will throw an error
    // so no expect needed for the test o fail
    await waitForEl('.jw-button-container [aria-label="Pause"]');
    ;
  });

  this.Then(/^the playhead time displayed below the video should be "([^"]*)"$/, async function (expectedBehavior) {
    let play = expectedBehavior === 'counting up';
    let loopTimes = 3;
    let lastElapsedTimeNumber = play ? -1 : 0;
    while (loopTimes--) {
      let elapsedTimeEl = await $('.jw-text-elapsed');
      // we pause here because that shows the controls
      // (while they getting hidden after a short time when playing)
      // and jw-text-elapsed is actually only updated when it is shown
      play && driver.executeScript('jwplayer().pause()');
      // sleep for half a second to give the controls time to show
      // - do not remove
      await sleep(500);
      // now read the time
      let elapsedTime = await elapsedTimeEl.getText();
      let elapsedTimeNumber = +elapsedTime.split(':').join('');
      play && driver.executeScript('jwplayer().play()');
      // compare the time read with the last one
      if (expectedBehavior === 'counting up') {
        expect(elapsedTimeNumber).to.be.above(lastElapsedTimeNumber);
      }
      if (expectedBehavior === 'still') {
        expect(elapsedTimeNumber).to.equal(lastElapsedTimeNumber);
      }
      // remember the last time
      lastElapsedTimeNumber = elapsedTimeNumber;
      // sleep for a second so the playhead changes - do not remove
      await sleep(1000);
    }
  });

  this.When(/^you pause it$/, async function () {
    driver.executeScript('jwplayer().pause()');
  });

  this.Then(/^a play button should be shown$/, async function () {
    await waitForEl('.jw-button-container [aria-label="Play"]');
  });

  this.When(/^you mute the sound$/, async function () {
    // pause just so that we can see the controls
    driver.executeScript('jwplayer().pause()');
    // now mute
    driver.executeScript('jwplayer().setMute(true)');
  });

  this.Then(/^the 'is muted button' should be shown$/, async function () {
    await waitForEl('.jw-button-container [aria-label="Volume"].jw-off');
  });

  this.When(/^you unmute the sound$/, async function () {
    // pause just so that we can see the controls
    driver.executeScript('jwplayer().pause()');
    // now mute
    driver.executeScript('jwplayer().setMute(true)');
    // pause shortly so we can see that is muted (not necessary)
    await sleep(500);
    // now unmute
    driver.executeScript('jwplayer().setMute(false)');
  });

  this.Then(/^the 'normal sound button' should be shown$/, async function () {
    await waitForEl('.jw-button-container [aria-label="Volume"].jw-full');
  });

  this.When(/^you lower the volume to zero$/, async function () {
    driver.executeScript('jwplayer().setVolume(0)');
  });

}