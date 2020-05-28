let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

//   Scenario: I get the IMDb App in IMDB
  this.Given(/^that I look for the IMDb App in IMDB$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I choose Get the IMDb App button in the bottom$/, async function () {
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the search botton');
   await searchBotton.click();
  });

this.Then(/^the result should open a new website to get the IMDb App$/, async function () {
     let open = await driver.executeScript('return!!window.IMDbApp');
    expect(open,
      'Could not find the website'
    ).to.be.false;
  });

}
