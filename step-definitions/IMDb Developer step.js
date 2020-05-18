let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

//   Scenario: I look for IMDb Developer in IMDB
  this.Given(/^that I surfer the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I choose IMDb Developer button in the bottom$/, async function () {
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the search botton');
   await searchBotton.click();
  });

   this.When(/^I click IMDb Developer button in the bottom$/, async function () {
   let bottonClick = await $('a[href="https://developer.imdb.com/?ref=ft_ds"]');
   assert(bottonClick, 'Could not find the IMDb Developer botton');
   await bottonClick.click();
  });
  
   this.Then(/^the result should open a new website to find IMDb Developer$/, async function () {
   let result = await $('a[href="https://developer.imdb.com/?ref=ft_ds"]');
   await sleep(sleepTime);
  });


}