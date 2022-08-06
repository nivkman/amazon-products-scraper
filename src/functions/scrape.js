import { openBrowser, closeBrowser, sleep, scrollDown, removeHtmlElement } from '../functions/browserHandler';

const scrapeController = async(searchURL = "https://amazon.com", regionZipCode = "", limit = "") => {
    const [browser, page] = await openBrowser();
    await page.goto(searchURL);
}

export default scrapeController;