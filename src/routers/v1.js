const express = require('express');
const scrapeController = require('../functions/scrape');
const router = express();

router.post('/scrape', async(req, res) => {
    await scrapeController("https://www.amazon.com/s?k=airpods&i=electronics&crid=U4YW9C0A667O&sprefix=%2Celectronics%2C190&ref=nb_sb_ss_recent_1_0_recent");
    res.json({ status: "running" });
})

module.exports = router;