let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

//   Scenario: I look for help in IMDB
  this.Given(/^that I look for help in the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I choose help button in the bottom$/, async function () {
   let helpBottonChoose = await $('#suggestion-search-button');
   assert(helpBottonChoose, 'Could not find the search botton');
   await helpBottonChoose.click();
  });

   this.When(/^I click help button in the bottom$/, async function () {
   let helpBottonClick = await $('a[href="https://help.imdb.com/imdb?ref_=ft_hlp"]');
   assert(helpBottonClick, 'Could not find the help botton');
   await helpBottonClick.click();
  });

this.Then(/^the result should open a new website with help center in IMDb$/, async function () {
    let result = await $('a[href="https://https://help.imdb.com/imdb?ref_=ft_hlp"]');
    await sleep(sleepTime);
  });


}
