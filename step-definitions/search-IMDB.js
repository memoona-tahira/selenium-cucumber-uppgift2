let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

  this.Given(/^that I am on the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

  this.When(/^I enter the search text "([^"]*)"$/, async function (searchText) {
    let searchField = await $('input[placeholder= "Search IMDb"]');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    await sleep(sleepTime);
  });

  this.When(/^I enter the search text "([^"]*)" \+ ENTER$/, async function (searchText) {
    let searchField = await $('input[placeholder= "Search IMDb"]');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    // You can find a complete list of special keys here:
    // https://selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Key.html
    await searchField.sendKeys(selenium.Key.ENTER);
  });

  this.When(/^I click the search button$/, async function () {
    let searchButton = await $('#suggestion-search-button');
    assert(searchButton, 'Could not find the search button');
    await searchButton.click();
  });

  this.Then(/^the first search result should contain the word "([^"]*)"$/, async function (phrase) {
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
    let firstResult = results[0];
    let resultText = await firstResult.getText();
    assert.include(resultText, phrase, 'Could not find the phrase ' + phrase + ' in the first search result.');
    await sleep(sleepTime);
  });
  this.Then(/^click on the movie$/, async function () {

    let result = await $('.result_text a');
    assert(result, 'Could not find the Movie');
    await result[0].click();
  });
  this.Then(/^click on the share button$/, async function () {
    let result = await $('#title-social-sharing-widget');
    assert(result, 'Could not find the Movie');
    await result.click();
  });

  this.Then(/^share i it on the Email$/, async function () {
    let result = await $('.dropdown-menu-item a');
    assert(result, 'Could not find the Movie');
    await result[2].click();

    await sleep(4000);
  });
  //_________________________________________________


  this.Then(/^click on  What's on TV and Streaming section on the below$/, async function () {
    await helpers.loadPage('https://www.imdb.com/whats-on-tv/?ref_=im_2020');
    await sleep(sleepTime);

  });

  this.Then(/^click on the Everything Coming to Netflix$/, async function () {

    let result = await $('.onoverflow a');
    assert(result, 'Could not find the Movie');
    await result[0].click();
    await sleep(1000);

  });

  this.Then(/^the list sort by Number of votes$/, async function () {
    await selectOption('.lister-sort-by', 'Number of Votes');
    await sleep(1000);
  });
  this.Then(/^the list lister by ascending order$/, async function () {

    let ascending = await $('.lister-sort-reverse');
    assert(ascending, 'Could not find the Movie');
    await driver.wait(until.elementLocated(By.css('.lister-working[style="display: none;"]')), 10000);
    await ascending.click();
    await sleep(3000);
  });
  this.Then(/^View by Grid view$/, async function () {

    let ascending = await $('.lister-mode');
    assert(ascending, 'Could not find the Movie');
    await driver.wait(until.elementLocated(By.css('.lister-working[style="display: none;"]')), 10000);
    await ascending[0].click();
    await sleep(3000);

  });

}