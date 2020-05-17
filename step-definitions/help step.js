let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

//   Scenario: I look for help in IMDB
  this.Given(/^that I look for help in the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I choose help button in the bottom$/, async function () {
   let chooseHelpBotton  = await $('a[href="https://help.imdb.com/imdb?ref_=ft_hlp"]');
   assert(chooseHelpBotton, 'Could not find the search botton');
   await chooseHelpBotton.click();
  });

   this.When(/^I click help button in the bottom$/, async function () {
   let clickHelpBotton = await $('a[href="https://help.imdb.com/imdb?ref_=ft_hlp"]');
   assert(clickHelpBotton, 'Could not find the search botton');
   await clickHelpBotton.click();
  });

this.Then(/^the result should open a new website with help center in IMDb$/, async function () {
    let result = await $('a[href="https://https://help.imdb.com/imdb?ref_=ft_hlp"]');
  //  assert(result, 'Could not open a new website with help center in IMDb');
    await result.click();
    await sleep(sleepTime);
  // await helpers.loadPage('https://help.imdb.com/imdb?ref_=ft_hlp');
  // await sleep(sleepTime);
  });


}
