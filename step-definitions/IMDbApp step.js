let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

//   Scenario: I get the IMDb App in IMDB
  this.Given(/^that I look for the IMDb App in IMDB$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

   this.When(/^I choose Get the IMDb App button in the bottom$/, async function () {
   let searchBotton = await $('#suggestion-search-button');
   assert(searchBotton, 'Could not find the search botton');
   await searchBotton.click();
  });

   this.When(/^I click Get the IMDb App button in the bottom$/, async function () {
  let bottonClick = await $('a[href="/whitelist-offsite?url=https%3A%2F%2Ftqp-4.tlnk.io%2Fserve%3Faction%3Dclick%26campaign_id_android%3D427112%26campaign_id_ios%3D427111%26destination_id_android%3D464200%26destination_id_ios%3D464199%26my_campaign%3Dmdot%2520sitewide%2520footer%2520%26my_site%3Dm.imdb.com%26publisher_id%3D350552%26site_id_android%3D133429%26site_id_ios%3D133428&amp;page-action=ft-gettheapp&amp;ref=ft_apps"]');
  //let bottonClick = await $('a[href="https://www.imdb.com/whitelist-offsite?url=https%3A%2F%2Ftqp-4.tlnk.io%2Fserve%3Faction%3Dclick%26campaign_id_android%3D427112%26campaign_id_ios%3D427111%26destination_id_android%3D464200%26destination_id_ios%3D464199%26my_campaign%3Dmdot%2520sitewide%2520footer%2520%26my_site%3Dm.imdb.com%26publisher_id%3D350552%26site_id_android%3D133429%26site_id_ios%3D133428&page-action=ft-gettheapp&ref=ft_apps"]');
  //let bottonClick = await $('a[href="/whitelist-offsite?url=https%3A%2F%2Ftqp-4.tlnk.io%2Fserve%3Faction%3Dclick%26campaign_id_android%3D427112%26campaign_id_ios%3D427111%26destination_id_android%3D464200%26destination_id_ios%3D464199%26my_campaign%3Dmdot%2520sitewide%2520footer%2520%26my_site%3Dm.imdb.com%26publisher_id%3D350552%26site_id_android%3D133429%26site_id_ios%3D133428&page-action=ft-gettheapp&ref=ft_apps"]');
  // let bottonClick = await $('a[href="https://apps.apple.com/us/app/id342792525?mat_click_id=5f3e7d6ba271470dbdb923d0f6ec7af2-20200514-194792&referrer=mat_click_id%3D5f3e7d6ba271470dbdb923d0f6ec7af2-20200514-194792%26link_click_id%3D789417068532758367"]');
  //  let bottonClick = await $('.ipc-list-item__text');
  // let bottonClick = await $('.ember205');
   assert(bottonClick, 'Could not find the search button');
   await bottonClick.click();
  });

this.Then(/^the result should open a new website to get the IMDb App$/, async function () {
//    await driver.wait(until.elementLocated(By.css('.ember205')));
//    let results = await $('.ember205');
//    await driver.wait(until.elementLocated(By.css('.we-banner__cop')));
//    let results = await $('.we-banner__cop');
  //  await driver.wait(until.elementLocated(By.css('.product-header__title app-header__title')));
  //  let results = await $('.product-header__title app-header__title')
  //  assert(results, 'Could not find the result');
  //  await sleep(1000);
    //    let open = await driver.executeScript('return!!window.Help');
    //  let open = await driver.executeScript('return!!window.App');
     let open = await driver.executeScript('return!!window.IMDbApp');
    expect(open,
      'Could not find the website'
    ).to.be.false;
  });

//   Scenario: I get the IMDb App in IMDB
//  this.Given(/^that I look for the IMDb App in IMDB$/, async function () {
//    await helpers.loadPage('https://www.imdb.com');
//    await sleep(sleepTime);
//  });

//   this.When(/^I choose Get the IMDb App button in the bottom$/, async function () {
//   let searchBotton = await $('#suggestion-search-button');
//   assert(searchBotton, 'Could not find the search botton');
//   await searchBotton.click();
//  });

//this.Then(/^the result should open a new website to get the IMDb App$/, async function () {
//    let result = await $('a[href="https://apps.apple.com/us/app/id342792525?mat_click_id=5f3e7d6ba271470dbdb923d0f6ec7af2-20200514-194792&referrer=mat_click_id%3D5f3e7d6ba271470dbdb923d0f6ec7af2-20200514-194792%26link_click_id%3D789417068532758367"]');
 // assert(result, 'Could not find the result');
//    await sleep(sleepTime);
//  });

}
