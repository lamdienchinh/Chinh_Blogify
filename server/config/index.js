const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

async function connect() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(process.env.MONGODB_URL, 'Connected DB successfully')
    }
    catch (err) {
        console.error(err)
    }
}
module.exports = { connect }