let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

//  Scenario: I look for Privacy Policy in IMDB
  this.Given(/^that I enter the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I choose Privacy Policy button in the bottom$/, async function () {
// let searchBotton = await $('#ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch');
// let searchBotton = await $('.ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch');
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the search botton');
   await searchBotton.click();
  });

   this.When(/^I click Privacy Policy button in the bottom$/, async function () {
     let bottonClick = await $('a[href="/privacy?ref_=ft_pvc"]');
  // let bottonClick = await $('a[href="https://www.imdb.com/privacy?ref_=ft_pvc"]');
  // let helpBottonClick = await $('#a-spacing-base a-size-extra-large');
  // let helpBottonClick = await $('.a-spacing-base a-size-extra-large');
   assert(bottonClick, 'Could not find the search button');
   await bottonClick.click();
  });

   this.Then(/^the result should open a new website to find IMDb privacy notice$/, async function () {
  //  await driver.wait(until.elementLocated(By.css('.main')));
  //  let results = await $('.main');
  //  assert(results, 'Could not find the result');
  //  await sleep(sleepTime);
  //  let open = await driver.executeScript('return!!window.Privacy');
  let open = await driver.executeScript('return!!window.PrivacyPolicy');
    expect(open,
      'Could not find the website'
    ).to.be.false;
  });

//  Scenario: I look for Privacy Policy in IMDB
// this.Given(/^that I enter the IMDB site$/, async function () {
//    await helpers.loadPage('https://www.imdb.com');
//    await sleep(sleepTime);
//  });

//   this.When(/^I choose Privacy Policy button in the bottom$/, async function () {
//   let searchBotton = await $('#suggestion-search-button');
//   assert(searchBotton, 'Could not find the search botton');
//   await searchBotton.click();
//  });

//   this.Then(/^the result should open a new website to find IMDb privacy notice$/, async function () {
//   let result = await $('a[href="https://www.imdb.com/privacy?ref_=ft_pvc"]');
   // assert(result, 'Could not find the result');
//   await sleep(sleepTime);
//  });

}