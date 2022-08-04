import express from 'express';
const router = express();

router.post('/scrape', (req, res) => {
    const searchURL = req.body.searchURL;
    const regionZipCode = req.body.regionZipCode;
    res.json({ searchURL });
})

export default router;