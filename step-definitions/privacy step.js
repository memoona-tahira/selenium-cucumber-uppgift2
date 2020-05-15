let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

//   Scenario: I look for jobs in IMDB
  this.Given(/^that I enter the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I click privacy policy button in the bottom$/, async function () {
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the search botton');
   await searchBotton.click();
  });

this.Then(/^the result should open a new website to find IMDb privacy notice$/, async function () {
    await helpers.loadPage('https://www.imdb.com/privacy?ref_=ft_pvc');
   await sleep(sleepTime);
  });


}