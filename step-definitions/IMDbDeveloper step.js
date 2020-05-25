let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

//   Scenario: I look for IMDb Developer in IMDB
  this.Given(/^that I surfer the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I choose IMDb Developer button in the bottom$/, async function () {
// let searchBotton = await $('#ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch');
// let searchBotton = await $('.ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch');
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the botton');
   await searchBotton.click();
  });

   this.When(/^I click IMDb Developer button in the bottom$/, async function () {
   let bottonClick = await $('a[href="https://developer.imdb.com/?ref=ft_ds"]');
  // let helpBottonClick = await $('#a-spacing-base a-size-extra-large');
  // let helpBottonClick = await $('.a-spacing-base a-size-extra-large');
   assert(bottonClick, 'Could not find the search button');
   await bottonClick.click();
  });
  
   this.Then(/^the result should open a new website to find IMDb Developer$/, async function () {
//    await driver.wait(until.elementLocated(By.css('.Navigation-module--developer--2HqSU')));
//    let results = await $('.Navigation-module--developer--2HqSU');
//    await driver.wait(until.elementLocated(By.css('.generator')));
//    let results = await $('.generator');
//    await driver.wait(until.elementLocated(By.css('.Navigation-module--nav--3lh5G')));
//    let results = await $('.Navigation-module--nav--3lh5G');
  //  await driver.wait(until.elementLocated(By.css('.ipc-page-content-container ipc-page-content-container--center Navigation-module--nav_inner--194Ss')));
  //  let results = await $('.ipc-page-content-container ipc-page-content-container--center Navigation-module--nav_inner--194Ss');
  //  assert(results, 'Could not find the result');
  //  await results.click();
  //  await sleep(1000);
  //  let open = await driver.executeScript('return!!window.Developer');
  let open = await driver.executeScript('return!!window.IMDbDeveloper');
    expect(open,
      'Could not find the website'
    ).to.be.false;
  });

//   Scenario: I look for IMDb Developer in IMDB
//  this.Given(/^that I surfer the IMDB site$/, async function () {
//    await helpers.loadPage('https://www.imdb.com');
//    await sleep(sleepTime);
//  });

//   this.When(/^I choose IMDb Developer button in the bottom$/, async function () {
//   let searchBotton = await $('#suggestion-search-button');
//   assert(searchBotton, 'Could not find the search botton');
//   await searchBotton.click();
//  });

//   this.When(/^I click IMDb Developer button in the bottom$/, async function () {
//   let bottonClick = await $('a[href="https://developer.imdb.com/?ref=ft_ds"]');
//   assert(bottonClick, 'Could not find the IMDb Developer botton');
//   await bottonClick.click();
//  });
  
//   this.Then(/^the result should open a new website to find IMDb Developer$/, async function () {
//   let result = await $('a[href="https://developer.imdb.com/?ref=ft_ds"]');
  // assert(result, 'Could not find the result');
//   await sleep(sleepTime);
//  });

}