const { username, password } = require('./credentials.json');
let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 50;

  this.When(/^I am logged\-in$/, async function () {

    let signInLink = await $('.imdb-header__signin-text');
    await signInLink.click();
    await sleep(sleepTime);

    let sign_in = driver.findElement(By.linkText("Sign in with IMDb"));
    await sign_in.click();
    await sleep(sleepTime);

    let ap_email = driver.findElement(By.id("ap_email"));
    ap_email.sendKeys(username);
    await sleep(sleepTime);

    let ap_password = driver.findElement(By.id("ap_password"));
    ap_password.sendKeys(password);
    await sleep(sleepTime);

    let signInSubmit = driver.findElement(By.id("signInSubmit"));
    await signInSubmit.click();
  });

  this.When(/^search the movie$/, async function () {

    let searchField = await $('input[placeholder= "Search IMDb"]');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys("moona");
    await searchField.sendKeys(selenium.Key.ENTER);
  });


  this.When(/^add movie to watchlist$/, async function () {

  });


  this.Then(/^the movie will have green ribbon$/, async function () {

  });

  this.Then(/^I can log out$/, async function () {
    await sleep(sleepTime);
    let userMenu = await $('.navbar__user-menu-toggle__button');
    await userMenu.click();
    let sign_out = driver.findElement(By.linkText("Sign out"));
    await sign_out.click();
    await sleep(sleepTime);

    let signInLink = await $('.imdb-header__signin-text');
    assert.isNotNull(signInLink, 'Sign in link available again');

  });

}