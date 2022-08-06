const express = require('express');
const scrapeController = require('../functions/scrape');
const router = express();

router.post('/scrape', async(req, res) => {
    await scrapeController("https://amazon.com");
    res.json({ status: "running" });
})

module.exports = router;