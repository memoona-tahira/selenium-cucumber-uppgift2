const { username, password } = require('./credentials.json');
let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 200;
  let movieName = "Devdas";

  this.When(/^I am logged\-in$/, async function () {

    let signInLink = await $('a[href="/registration/signin?ref=nv_generic_lgin"]');
    await signInLink.click();

    let sign_in = driver.findElement(By.linkText("Sign in with IMDb"));
    await sign_in.click();
    await sleep(sleepTime);

    let userField = await $('input[id="ap_email"]');
    userField.sendKeys(username);
    await sleep(sleepTime);

    let passwordField = await $('input[id="ap_password"]');
    passwordField.sendKeys(password);
    await sleep(sleepTime);

    let signInButton = await $('input[id="signInSubmit"]');
    signInButton.click();

    await sleep(sleepTime);
  });

  this.When(/^search the movie$/, async function () {

    let searchField = await $('input[placeholder= "Search IMDb"]');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(movieName);
    await searchField.sendKeys(selenium.Key.ENTER);
  });

  this.When(/^add movie to watchlist$/, async function () {
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
    let results = await $('.findResult');
    assert(results, 'Could not find any results');
    let firstResult = results[0];

    let resultText = await firstResult.getText();
    let possibleName = resultText.substr(0, resultText.indexOf('('));
    await sleep(sleepTime);
    let firstResultLink = driver.findElement(By.linkText(possibleName.trim()));
    await firstResultLink.click();
    await sleep(sleepTime);
    await driver.wait(until.elementLocated(By.css('.summary_text')));

    await driver.wait(until.elementLocated(By.css('.uc-add-wl-button-icon--add')));
    let addWatchList = await $('.uc-add-wl-button-icon--add');
    if (await addWatchList.isDisplayed()) {
      await addWatchList.click();
      await sleep(sleepTime);
    }
  });

  this.Then(/^the button text will change to Added to watch List$/, async function () {
    await driver.wait(until.elementLocated(By.css('.uc-add-wl-button-icon--done')));
    let added = await $('.uc-add-wl-button-icon--done');
    assert(await added.isDisplayed() === true, 'Added button is visible');
    await sleep(1000);

  });

  this.When(/^I can log out$/, async function () {
    await sleep(sleepTime + 200);
    await driver.wait(until.elementLocated(By.css('.navbar__user-menu-toggle__button')));
    let userMenu = await $('.navbar__user-menu-toggle__button');
    await userMenu.click();
    let sign_out = driver.findElement(By.linkText("Sign out"));
    await sign_out.click();
    await sleep(sleepTime);
  });

  this.Then(/^Login link is available$/, async function () {
    let signInLink = await $('.imdb-header__signin-text');
    assert.isNotNull(signInLink, 'Sign in link available again');
  });

  this.When(/^I am on the watchlist page$/, async function () {
    let watchlistLink = await $('a[href="/list/watchlist?ref_=nv_usr_wl_all_0"]');
    await watchlistLink.click();
    await sleep(sleepTime);
  });

  this.Then(/^the watchlist contain the movie$/, async function () {
    await driver.wait(until.elementLocated(By.css('.lister-list')));
    await sleep(sleepTime);
    let movieInList = driver.findElement(By.linkText(movieName));
    assert.isNotNull(movieInList, 'Movie is not in the list');
  });


  this.Then(/^Remove the movie$/, async function () {
    await sleep(sleepTime);
    let added = await $('.uc-add-wl-button-icon--done');
    if (await added.isDisplayed()) {
      await added.click();
    }
    await sleep(1000);

  });

  this.Then(/^Remove the movie from watch list$/, async function () {
    await sleep(sleepTime);
    let movieInList = driver.findElement(By.linkText(movieName));
    await movieInList.click();
    await driver.wait(until.elementLocated(By.css('.uc-add-wl-button-icon--done')));
    let added = await $('.uc-add-wl-button-icon--done');
    console.log(await added.isDisplayed());
    if (await added.isDisplayed()) {
      await added.click();
    }
    await sleep(1000);
  });

}