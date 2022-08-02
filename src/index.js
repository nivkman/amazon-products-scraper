import express from 'express';
import bodyParser from 'body-parser';
import router from './routers/v1.js';
const app = express();

const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})