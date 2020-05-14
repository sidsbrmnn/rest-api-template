// eslint-disable-next-line no-unused-vars
const express = require("express");

// eslint-disable-next-line no-unused-vars
const HttpError = require("../utils/HttpError");

/**
 * All uncaught/thrown errors are handled here
 * and appropriate responses are sent back to
 * the client.
 *
 * @param {HttpError} err
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
// eslint-disable-next-line no-unused-vars
module.exports = function (err, req, res, next) {
    res.status(err.status).send({ message: err.message });
};
