import express from 'express';
import bodyParser from 'body-parser'
const app = express();

const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/v1', require('./routers/v1.js'));

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})