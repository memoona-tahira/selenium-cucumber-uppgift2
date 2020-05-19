const { username, password } = require('./credentials.json');
let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 400;
  let bioText = 'my name is Memoona and i love movies';
  let userId = 'memoonatahira';

  this.When(/^I go to account settings$/, async function () {
    await driver.wait(until.elementLocated(By.css('.navbar__user-menu-toggle__button')));
    await sleep(sleepTime);
    let userMenu = await $('.navbar__user-menu-toggle__button');
    await userMenu.click();
    await sleep(sleepTime);
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
    await nickName.sendKeys(userId);

    let saveButton = await $('input[value = "Save Changes"]');
    await saveButton.click();
  });

  this.Then(/^user id will be changed$/, async function () {
    let successMessage = await $('.success');
    assert.isNotNull(successMessage, 'User id is not changed');
    assert.include(await successMessage.getText(), userId);
  });


  this.When(/^I change my biography$/, async function () {
    await sleep(sleepTime);
    let bioTextArea = await $('textarea[name = "bio"]');
    await sleep(sleepTime);
    bioTextArea.clear();
    await sleep(sleepTime);
    await bioTextArea.sendKeys(bioText);
    let saveButton = await await $('.auth-button--primary');
    await saveButton.click();
    await sleep(sleepTime + 300);
  });

  this.Then(/^user biography will be changed$/, async function () {
    await driver.wait(until.elementLocated(By.css('a[href="/activity/editprofile"]')));
    let editLink = await $('a[href="/activity/editprofile"]');
    assert.isNotNull(editLink, 'User bio is saved.');
    await editLink.click();
    await sleep(sleepTime);
    let bioTextArea = await $('textarea[name = "bio"]');
    let textInBio = await bioTextArea.getText();
    assert.equal(textInBio, bioText, 'User bio is not what we wrote');
  });
}