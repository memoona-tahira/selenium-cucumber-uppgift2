let { $, sleep } = require('./funcs');

module.exports = function () {
  let sleepTime = 0;


//   Scenario 1: I look for jobs in IMDB
  this.Given(/^that I open the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I click jobs search button in the bottom$/, async function () {
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the search botton');
   await searchBotton.click();
  });

  this.When(/^select Top Rated Movies from movies catogary$/, async function () {
    let topRatedMovies = await $('a[href="/chart/top/?ref_=nv_mv_250"]');
    assert(topRatedMovies, 'Could not find the link Top Rated Movies');
    await topRatedMovies.click();
  });

this.Then(/^the result should open a new website to find jobs in IMDb$/, async function () {
    await helpers.loadPage('https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb');
   await sleep(sleepTime);
  });

// Scenario 2: I enter a keyword in the job search field
// Scenario 3: I enter a keyword + ENTER in the job search field
  this.Given(/^that I am on the site of jobs$/, async function () {
    await helpers.loadPage('https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb');
    await sleep(sleepTime);
  });

  this.When(/^I enter job search text "([^"]*)"$/, async function (JobSearchText) {
        let searchLabel = await $('input[placeholder= "Location"]');
     let searchlabelkey = await searchLabel.sendKeys();
    assert.equal(searchlabelkey, 'Could not find the search label');
   searchlabelkey.sendKeys(JobSearchText);
   await sleep(sleepTime);
  });



    //  const searchLabel.sendKeys = function (text)
   //let searchLabel.sendKeys = new searchLabel.sendKeys;
   // const label = await searchLabel.getKeys();
   //var label = label.searchLabel.sendKeys('foo');
   //this.searchLabel = search;
   //this.Label = Label;
 //  this.sendKeys = Keys;
 //  sendKeys = await searchLabel.sendKeys();
   //var searchLabel = new Label();
//      assert(searchLabel, 'Could not find the search label');
    //search.Label(searchText);
//     searchLabel.sendKeys(searchText);
//    await sleep(sleepTime);
  //  let searchLabel = await $('input[placeholder= "Location"]');
 
//   this.searchlabel = searchlabel;
//    let searchlabelkey = await searchlabel.getText();
//    assert.equal(searchlabel, 'Could not find the searchlabel');
//expect(searchlabel).to.equal('Could not find the search button');
//expect(searchlabel).to.equal('Could not find the search button');
//   assert(searchLabel, 'Could not find the search button');
  //    assert.equal(search, 'Could not find the search button');
  //  searchlabel(searchText);
    //searchLabel.sendKeys(searchText);
//    searchLabel.sendKeys(searchText);
//    await sleep(sleepTime);
//  });

  this.When(/^I enter job search text "([^"]*)" \+ ENTER$/, async function (searchText) {
    let searchLabel = await $('input[placeholder= "Location"]');
    assert(searchLabel, 'Could not find the search result on the page');
  //  searchLabel.sendKeys(searchText);
    // You can find a complete list of special keys here:
    // https://selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Key.html
    await searchLabel.sendKeys(selenium.Key.ENTER);
  });

  this.When(/^I click job search label$/, async function () {
    let searchID = await $('#location-typeahead-label');
    assert(searchID, 'Could not find the search button');
    await searchID.click();
  });

  this.Then(/^the job search result should contain the word "([^"]*)"$/, async function (phrase) {
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
    let results = await $('.findResult');
    assert(results, 'Could not find any results');
    let jobResult = results[0];
    let resultText = await jobResult.getText();
    assert.include(resultText, phrase, 'Could not find the phrase ' + phrase + ' in the first search result.');
    await sleep(sleepTime);
  });
  this.Then(/^I click on it$/, async function () {

    let result = await $('.result_text a');
    assert(result, 'Could not find it');
    await result[0].click();
  });

}