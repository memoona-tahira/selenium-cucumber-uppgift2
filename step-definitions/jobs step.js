let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

//   Scenario: Ì look for jobs in IMDB
  this.Given(/^that I open the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I click jobs search button in the bottom$/, async function () {
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the search bottom');
   await searchBotton.click();
  });


this.Then(/^the result should open a new website to find jobs in IMDb$/, async function () {
    await helpers.loadPage('https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb');
   await sleep(sleepTime);
  });

// Scenario: When I enter a keyword in the job search field
  this.Given(/^that I am on the site of jobs$/, async function () {
    await helpers.loadPage('https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb');
    await sleep(sleepTime);
  });

  this.When(/^I enter job search text "([^"]*)"$/, async function (searchText) {
    let searchField = await $('input[placeholder= "Location"]');
    assert(searchField, 'Could not find the search result on the page');
    searchField.sendKeys(searchText);
    await sleep(sleepTime);
  });

  this.When(/^I enter job search text "([^"]*)" \+ ENTER$/, async function (searchText) {
    let searchField = await $('input[placeholder= "Location"]');
    assert(searchField, 'Could not find the search result on the page');
    searchField.sendKeys(searchText);
    // You can find a complete list of special keys here:
    // https://selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Key.html
    await searchField.sendKeys(selenium.Key.ENTER);
  });

  this.When(/^I click job search button$/, async function () {
    let searchButton = await $('#suggestion-search-button');
    assert(searchButton, 'Could not find the search button');
    await searchButton.click();
  });

  this.Then(/^the job search result should contain the word "([^"]*)"$/, async function (phrase) {
    // when the search has finished on IMDB
    // we either get one or more results
    // in elements with the class findResult
    // or (if no results) we get an element
    // with the class findNoResults...
    // so wait for this to happen
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
    // now the search has finisehd
    let results = await $('.findResult');
    assert(results, 'Could not find any results');
    let jobResult = results[0];
    let resultText = await jobResult.getText();
    assert.include(resultText, phrase, 'Could not find the phrase ' + phrase + ' in the first search result.');
    await sleep(sleepTime);
  });

}