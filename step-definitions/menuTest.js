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
  this.Then(/^sorted by Release Date$/, async function () {
    await selectOption('#lister-sort-by-options', 'Release Date');
    await sleep(3000);

    let releaseDateList = await $('.secondaryInfo');

    for (let i = 0; i < releaseDateList.length - 1; i++) {
      let releaseDate_1 = releaseDateList[i];
      let releaseDate_1_text = await releaseDate_1.getText();
      let releaseDate_2 = releaseDateList[i + 1];
      let releaseDate_2_text = await releaseDate_2.getText();
      assert(Number(releaseDate_1_text.slice(1, -1)) >= Number(releaseDate_2_text.slice(1, -1)), 'Not sorted by release date descending.');
    }
  });


  //___________________________________
  this.When(/^select Most Popular TV Shows from TV Shows catogary$/, async function () {
    let mostPopularShows = await $('a[href="/chart/tvmeter/?ref_=nv_tvv_mptv"]');
    assert(mostPopularShows, 'Could not find the link Most Popular TV Shows');
    await mostPopularShows.click();
    await sleep();
  });
  this.When(/^sorted by IMDB Rating$/, async function () {
    await selectOption('#lister-sort-by-options', 'IMDb Rating');
    await sleep(3000);

    let iMDBRatingList = await $('.imdbRating > strong');

    for (let i = 0; i < iMDBRatingList.length - 1; i++) {
      let iMDBRating_1 = iMDBRatingList[i];
      let iMDBRating_1_text = await iMDBRating_1.getText();
      let iMDBRating_2 = iMDBRatingList[i + 1];
      let iMDBRating_2_text = await iMDBRating_2.getText();
      assert(Number(iMDBRating_1_text.replace(',', '.')) >= Number(iMDBRating_2_text.replace(',', '.')), 'Not sorted by IMDb Rating date descending.');
    }
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

  this.Then(/^sort by name ascending$/, async function () {
    let ascending = await $('a[href="/search/name/?birth_monthday=05-23&sort=alpha,asc&ref_=rlm"]');
    assert(ascending, 'Could not find sort by A-Z');
    await ascending.click();
    await sleep(300);
    let nameList = await $('.lister-item-header > a');

    for (let i = 0; i < nameList.length - 1; i++) {
      let name_1 = nameList[i];
      let name_1_text = await name_1.getText();
      let name_2 = nameList[i + 1];
      let name_2_text = await name_2.getText();
      assert(name_1_text <= name_2_text, 'Not sorted by name ascending');
    }
  });

  this.Then(/^sort by name descending$/, async function () {
    let descending = await $('a[href="/search/name/?birth_monthday=05-23&sort=alpha,desc&ref_=rlm"]');
    assert(descending, 'Could not find sort by A-Z');
    await descending.click();
    await sleep(300);
    let nameList = await $('.lister-item-header > a');

    for (let i = 0; i < nameList.length - 1; i++) {
      let name_1 = nameList[i];
      let name_1_text = await name_1.getText();
      let name_2 = nameList[i + 1];
      let name_2_text = await name_2.getText();
      assert(name_1_text >= name_2_text, 'Not sorted by name descending');
    }
  });

  //_______________________________________________________

}