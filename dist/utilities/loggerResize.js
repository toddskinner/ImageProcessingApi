"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Just for reference and example of middleware
// Since not a function that is part of Express, it does not have type definitions by default.
// So we have to add them.
var loggerResize = function (req, res, next) {
    console.log("Resize was visited");
    next();
};
exports.default = loggerResize;
