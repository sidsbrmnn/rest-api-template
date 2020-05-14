const dotenv = require("dotenv");

const { error, parsed } = dotenv.config();

if (error) {
    throw error;
}

const isDev = process.env.NODE_ENV !== "production";

const config = Object.freeze({
    NODE_ENV: isDev ? "development" : "production",
    PORT: parseInt(isDev ? parsed.PORT : process.env.PORT, 10),
    MONGODB_URI: isDev ? parsed.MONGODB_URI : process.env.MONGODB_URI,
});

module.exports = config;
