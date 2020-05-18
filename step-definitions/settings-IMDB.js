const { username, password } = require('./credentials.json');
let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 400;

  this.When(/^I go to account settings$/, async function () {
    await driver.wait(until.elementLocated(By.css('.navbar__user-menu-toggle__button')));
    await sleep(sleepTime);
    let userMenu = await $('.navbar__user-menu-toggle__button');
    await userMenu.click();
    let sign_out = driver.findElement(By.linkText("Account settings"));
    await sign_out.click();
    await sleep(sleepTime);
  });
  this.When(/^I edit my profile$/, async function () {
    let editLink = await $('a[href="/activity/editprofile"]');
    await editLink.click();
    await sleep(sleepTime);
  });

  this.When(/^click edit button$/, async function () {
    let editLink2 = await $('a[href="/registration/changenick"]');
    await editLink2.click();
    await sleep(sleepTime);
  });

  this.When(/^I change my user id$/, async function () {

    let nickName = await $('input[name = "nick"]');
    nickName.clear();
    await nickName.sendKeys("memoonatahira");

    let saveButton = await $('input[value = "Save Changes"]');
    await saveButton.click();
  });

  this.Then(/^user id will be changed$/, async function () {
    let successMessage = await $('.success');
    assert.isNotNull(successMessage, 'User id is not changed');
  });


  this.When(/^I change my biography$/, async function () {
    await sleep(sleepTime);
    let bioText = await $('textarea[name = "bio"]');
    await sleep(sleepTime);
    bioText.clear();
    await sleep(sleepTime);
    await bioText.sendKeys("my name is Memoona and i love movies");

    let saveButton = await await $('.auth-button--primary');
    await saveButton.click();
    await sleep(sleepTime);
    await sleep(500);
  });

  this.Then(/^user biography will be changed$/, async function () {

     await driver.wait(until.elementLocated(By.css('a[href="/activity/editprofile"]')));
    let editLink = await $('a[href="/activity/editprofile"]');
    assert.isNotNull(editLink, 'User bio is saved.');
  });
}