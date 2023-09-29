const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

const indexRouter = require('./routes');
const authorRouter = require('./routes/author');

mongoose.connect(process.env.MONGO_URI, {  useNewUrlParser: true })
    .then(() => {
        console.log('MongoDb connected')
    })
    .catch((e) => {
        console.log(e)
})

app.use(express.json());
app.use('/', indexRouter);
app.use('/authors', authorRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running @http://localhost:${PORT}`);
});