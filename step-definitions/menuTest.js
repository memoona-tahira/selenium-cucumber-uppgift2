let { $, sleep } = require('./funcs');

module.exports = function () {

  this.When(/^I click in the menu$/, async function () {
    let menuButton = await $('#imdbHeader-navDrawerOpen--desktop');
    assert(menuButton, 'Could not find the menu button');
    menuButton.click();
  });

  this.When(/^select Top Rated Movies from movies catogary$/, async function () {
    let topRatedMovies = await $('a[href="/chart/top/?ref_=nv_mv_250"]');
    assert(topRatedMovies, 'Could not find the link Top Rated Movies');
    await topRatedMovies.click();
  });


  this.Then(/^It will show you Text Top Retad Movies with number of titles$/, async function () {
    let pageHeader = await $('h1.header');
    let pageHeaderText = await pageHeader.getText();
    assert.equal(pageHeaderText, "Top Rated Movies", 'Incorrect page title... does not include Top Rated Movies');
  });
  this.Then(/^I will choose from sort by Release Date$/, async function () {
    await selectOption('#lister-sort-by-options', 'Release Date');
    await sleep(1000);
  });

  //___________________________________
  this.When(/^select Most Popular TV Shows from TV Shows catogary$/, async function () {
    let mostPopularShows = await $('a[href="/chart/tvmeter/?ref_=nv_tvv_mptv"]');
    assert(mostPopularShows, 'Could not find the link Most Popular TV Shows');
    await mostPopularShows.click();
    await sleep();
  });

  this.When(/^then i click on it$/, async function () {
    let result = await $('.titleColumn a');
    assert(result, 'Could not find the Movie');
    await result[result.length - 1].click();
    await sleep(1000);
  });
  //_________________________________________

  this.Then(/^I select Born today from Celebs catogary$/, async function () {
    let bornToday = await $('a[href="/feature/bornondate/?ref_=nv_cel_brn"]');
    assert(bornToday, 'Could not find the link Born today');
    await bornToday.click();
  });

  this.Then(/^then i click in the menu$/, async function () {
    let menuButton = await $('#imdbHeader-navDrawerOpen--desktop');
    assert(menuButton, 'Could not find the menu button');
    menuButton.click();
  });
  this.Then(/^I select Most Popular Celebs from Celebs catogary$/, async function () {
    let mostPopularCelebs = await $('a[href="https://www.imdb.com/search/name/?gender=male%2Cfemale&ref_=nv_cel_m"]');
    assert(mostPopularCelebs, 'Could not find the link Most Popular Celebs');
    await mostPopularCelebs.click();
  });

  this.Then(/^I go to the menu igen$/, async function () {
    let menuButton = await $('#imdbHeader-navDrawerOpen--desktop');
    assert(menuButton, 'Could not find the menu button');
    menuButton.click();
  });

  this.Then(/^I select Celebrity News from Celebs catogary$/, async function () {
    let celebrityNews = await $('a[href="/news/celebrity/?ref_=nv_cel_nw"]');
    assert(celebrityNews, 'Could not find the link Celebrity News');
    await celebrityNews.click();
  });
  this.Then(/^I ckick to the first news$/, async function () {
    let result = await $('.news-article__title a');
    assert(result, 'Could not find the Movie');
    await result[0].click();
    await sleep(1000);
  });

  //_______________________________________________________


}