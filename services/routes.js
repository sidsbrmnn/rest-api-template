const express = require("express");

/**
 *
 * @param {express.Application} app
 */
module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(require("../middlewares/error"));
};
