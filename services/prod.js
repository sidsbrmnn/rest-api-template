const compression = require("compression");
const cors = require("cors");
// eslint-disable-next-line no-unused-vars
const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");

/**
 *
 * @param {express.Application} app
 */
module.exports = function (app) {
    app.use(logger("combined"));
    app.use(helmet());
    app.use(cors());
    app.use(compression());
};
