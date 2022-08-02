import express from 'express';
const router = express();

router.post('/scrape', (req, res) => {
    const searchURL = req.body.searchURL;
    res.json({ searchURL });
})

export default router;