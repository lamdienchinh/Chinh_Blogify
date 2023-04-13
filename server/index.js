const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const bodyParser = require('body-parser')
const postRoute = require('./routes/post')
const tutorRoute = require('./routes/tutorpost');
dotenv.config()
const app = express();

// mongoose.connect(process.env.MONGODB_URL).then(console.log('Connected to MongoDB'))
const db = require('./config').connect();
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/v1/post", postRoute)
app.use("/v1/auth", authRoute)
app.use("/v1/user", userRoute)
app.use("/v1/tutor", tutorRoute)
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server is running at PORT: ' + process.env.PORT);
})

//JSON WEB TOKEN