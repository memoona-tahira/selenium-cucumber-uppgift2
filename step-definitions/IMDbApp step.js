let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

//   Scenario: I get the IMDb App in IMDB
  this.Given(/^that I look for the IMDb App in IMDB$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I choose Get the IMDb App button in the bottom$/, async function () {
//   let searchBotton = await $('input[class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch"]');
// let searchBotton = await $('#ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch');
// let searchBotton = await $('.ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch');
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the search botton');
   await searchBotton.click();
  });

   this.When(/^I click Get the IMDb App button in the bottom$/, async function () {
   let bottonClick = await $('a[href="https://apps.apple.com/us/app/id342792525?mat_click_id=5f3e7d6ba271470dbdb923d0f6ec7af2-20200514-194792&referrer=mat_click_id%3D5f3e7d6ba271470dbdb923d0f6ec7af2-20200514-194792%26link_click_id%3D789417068532758367"]');
  //  let bottonClick = await $('.ipc-list-item__text');
  // let bottonClick = await $('.ember205');
   assert(bottonClick, 'Could not find the button');
   await bottonClick.click();
  });

this.Then(/^the result should open a new website to get the IMDb App$/, async function () {
    await driver.wait(until.elementLocated(By.css('.ember205')));
    let results = await $('.ember205');
    assert(results, 'Could not find the result');
    await sleep(sleepTime);
  });

//   Scenario: I get the IMDb App in IMDB
//  this.Given(/^that I look for the IMDb App in IMDB$/, async function () {
//    await helpers.loadPage('https://www.imdb.com');
//    await sleep(sleepTime);
//  });

//   this.When(/^I choose Get the IMDb App button in the bottom$/, async function () {
//   let searchBotton = await $('#suggestion-search-button');
//   assert(searchBotton, 'Could not find the search botton');
//   await searchBotton.click();
//  });

//this.Then(/^the result should open a new website to get the IMDb App$/, async function () {
//    let result = await $('a[href="https://apps.apple.com/us/app/id342792525?mat_click_id=5f3e7d6ba271470dbdb923d0f6ec7af2-20200514-194792&referrer=mat_click_id%3D5f3e7d6ba271470dbdb923d0f6ec7af2-20200514-194792%26link_click_id%3D789417068532758367"]');
 // assert(result, 'Could not find the result');
//    await sleep(sleepTime);
//  });

}
