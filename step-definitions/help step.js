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


// Scenario: I enter a keyword in the search field
  this.Given(/^that I am on the site of help$/, async function () {
    await helpers.loadPage('https://help.imdb.com/imdb?ref_=ft_hlp');
    await sleep(sleepTime);
  });

  this.When(/^I enter search text "([^"]*)"$/, async function (searchText) {
    let searchField = await $('input[placeholder= "How can we help?"]');
    assert(searchField, 'Could not find the search result');
    searchField.sendKeys(searchText);
    await sleep(sleepTime);
  });

  this.When(/^I enter ENTER$/, async function () {
   let bottonClick = await $('#button-icon');
   await sleep(sleepTime);
  });

// Scenario: I enter a keyword + ENTER in the search field
  this.When(/^I enter search text "([^"]*)" \+ ENTER$/, async function (searchText) {
    let searchField = await $('input[placeholder= "How can we help?"]');
    assert(searchField, 'Could not find the search result');
    searchField.sendKeys(searchText);
    await searchField.sendKeys(selenium.Key.ENTER);
  });

  this.Then(/^the search result should contain the word "([^"]*)"$/, async function (phrase) {
    let result = await $('search_input');
   await sleep(sleepTime);
  });


}
