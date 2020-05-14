const mongoose = require("mongoose");

const config = require("./config");

/**
 * Returns a promise that connects to MongoDB
 *
 * @returns {Promise<mongoose.Mongoose>}
 */
function connectDb() {
    return mongoose.connect(config.MONGODB_URI, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = { connectDb };
