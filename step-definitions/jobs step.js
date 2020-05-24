let { $, sleep } = require('./funcs');

module.exports = function () {
  let sleepTime = 0;


//   Scenario 1: I look for jobs in IMDB
  this.Given(/^that I open the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I choose jobs search button in the bottom$/, async function () {
  // let searchBotton = await $('#ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch');
  // let searchBotton = await $('.ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch');
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the search botton');
   await searchBotton.click();
  });

   this.When(/^I click jobs search button in the bottom$/, async function () {
   let bottonClick = await $('a[href="https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb"]');
  // let bottonClick = await $('#a-spacing-base a-size-extra-large');
  // let bottonClick = await $('.a-spacing-base a-size-extra-large');
   assert(bottonClick, 'Could not find the jobs search button');
   await bottonClick.click();
  });

this.Then(/^the result should open a new website to find jobs in IMDb$/, async function () {
   await driver.wait(until.elementLocated(By.css('.find-jobs-text')));
    let results = await $('.find-jobs-text');
    assert(results, 'Could not find any results');
    let firstResult = results[0];
    let resultText = await firstResult.getText();
    assert.include(resultText, phrase, 'Could not find the phrase ' + phrase + ' in the first search result.');
    await results.click();
    await sleep(1000);
  });

//this.Then(/^the result should open a new website to find jobs in IMDb$/, async function () {
//   let result = await $('a[href="https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb"]');
//   assert(result, 'Could not find the result');
//   await sleep(sleepTime);

// Scenario 2: I enter a keyword in the job search field
// Scenario 3: I enter a keyword + ENTER in the job search field
  this.Given(/^that I am on the site of jobs$/, async function () {
    await helpers.loadPage('https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb');
    await sleep(sleepTime);
  });

  this.When(/^I enter job search text "([^"]*)"$/, async function (searchText) {
    let searchField = await $('input[placeholder= "Location"]');
    assert(searchField, 'Could not find the search result');
    searchField.sendKeys(searchText);
  });

  this.When(/^I click job search button$/, async function () {
   let bottonClick = await $('#button-icon');
   await sleep(sleepTime);
  });

  this.When(/^I enter job search text "([^"]*)" \+ ENTER$/, async function (searchText) {
    let searchField = await $('input[id = "location-typeahead"]');
    assert(searchField, 'Could not find the search result on the page');
    searchField.sendKeys(searchText);
    await searchField.sendKeys(selenium.Key.ENTER);
  });

  this.Then(/^the job search result should contain the word "([^"]*)"$/, async function (phrase) {
   await driver.wait(until.elementLocated(By.css('.col-sm-6 job-count-info')));
    let results = await $('.col-sm-6 job-count-info');
    assert(results, 'Could not find any results');
    let firstResult = results[0];
    let resultText = await firstResult.getText();
    assert.include(resultText, phrase, 'Could not find the phrase ' + phrase + ' in the first search result.');
    await sleep(1000);
  });

//   Scenario 1: I look for jobs in IMDB
//  this.Given(/^that I open the IMDB site$/, async function () {
//    await helpers.loadPage('https://www.imdb.com');
//    await sleep(sleepTime);
//  });

//   this.When(/^I choose jobs search button in the bottom$/, async function () {
//   let searchBotton = await $('#suggestion-search-button');
//   assert(searchBotton, 'Could not find the search botton');
//   await searchBotton.click();
//  });

//  this.When(/^I click jobs search button in the bottom$/, async function () {
//   let bottonClick = await $('a[href="https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb"]');
//   assert(bottonClick, 'Could not find the jobs search button');
//   await bottonClick.click();
//  });

//this.Then(/^the result should open a new website to find jobs in IMDb$/, async function () {
//   let result = await $('a[href="https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb"]');
//   assert(result, 'Could not find the result');
//   await sleep(sleepTime);
//  });

// Scenario 2: I enter a keyword in the job search field
// Scenario 3: I enter a keyword + ENTER in the job search field
//  this.Given(/^that I am on the site of jobs$/, async function () {
//    await helpers.loadPage('https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb');
//    await sleep(sleepTime);
//  });

//  this.When(/^I enter job search text "([^"]*)"$/, async function (searchText) {
//    let searchField = await $('input[placeholder= "Location"]');
//    assert(searchField, 'Could not find the search result');
//    await sleep(sleepTime);
//  });

//  this.When(/^I click job search button$/, async function () {
//   let bottonClick = await $('#button-icon');
//   await sleep(sleepTime);
//  });

//  this.When(/^I enter job search text "([^"]*)" \+ ENTER$/, async function (searchText) {
//    let searchField = await $('input[id = "location-typeahead"]');
//    assert(searchField, 'Could not find the search result on the page');
//  await sleep(sleepTime);
//  });

//  this.Then(/^the job search result should contain the word "([^"]*)"$/, async function (phrase) {
//    await helpers.loadPage('https://www.amazon.jobs/en/search?base_query=&loc_query=Stockholm&latitude=59.33258&longitude=18.06683&loc_group_id=&invalid_location=false&country=SWE&city=Stockholm&region=Stockholm+County&county=Stockholm');
//    await sleep(sleepTime);
//  });

}



