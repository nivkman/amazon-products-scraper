const { openBrowser, closeBrowser, sleep, scrollDown, removeHtmlElement } = require('../functions/browserHandler');

const changeRegionZipCode = async (page, regionZipCode = "10001") => {
    // await page.$eval( "input[data-action-type='SELECT_LOCATION']", regionBtn => regionBtn.click());

}

const scrapeController = async (searchURL = "", regionZipCode = "10001", limit = 100) => {
    const [browser, page] = await openBrowser();
    await changeRegionZipCode(page);
    await page.goto(searchURL);
}

module.exports = scrapeController;