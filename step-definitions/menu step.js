let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

//   Scenario: I look for menu in IMDB
  this.Given(/^that I come to the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I click menu button in the left side$/, async function () {
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the searchBotton');
   await searchBotton.click();
  });

this.Then(/^the result should open a series details in menu$/, async function () {
   let searchBotton = await $('#suggestion-search-button'); 
   await searchBotton.click();
   await sleep(sleepTime);
  });


}