import express from 'express';
import scrapeController from '../functions/scrape';
const router = express();

router.post('/scrape', async(req, res) => {
    await scrapeController();
    res.json({ status: "running" });
})

export default router;