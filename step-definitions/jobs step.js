let { $, sleep } = require('./funcs');

module.exports = function () {
  let sleepTime = 0;


//   Scenario: I look for jobs in IMDB
  this.Given(/^that I open the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I choose jobs search button in the bottom$/, async function () {
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the search botton');
   await searchBotton.click();
  });

   this.When(/^I click jobs search button in the bottom$/, async function () {
   let bottonClick = await $('a[href="https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb"]');
   assert(bottonClick, 'Could not find the jobs search button');
   await bottonClick.click();
  });

this.Then(/^the result should open a new website to find jobs in IMDb$/, async function () {
  let open = await driver.executeScript('return!!window.Jobs');
    expect(open,
      'Could not find the website'
    ).to.be.false;
  });


}



