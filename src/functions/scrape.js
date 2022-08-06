const { openBrowser, closeBrowser, sleep, scrollDown, removeHtmlElement } = require('../functions/browserHandler');

const scrapeController = async(searchURL = "", regionZipCode = "", limit = "") => {
    const [browser, page] = await openBrowser();
    await page.goto(searchURL);
}

module.exports = scrapeController;