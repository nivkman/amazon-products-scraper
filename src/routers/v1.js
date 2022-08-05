import express from 'express';
import scrapeController from '../functions/scrape';
const router = express();

router.post('/scrape', async(req, res) => {
    const [searchURL, regionZipCode, limit] = await req.body;
    await scrapeController(searchURL, regionZipCode, limit);
    res.json({ status: "running" });
})

export default router;