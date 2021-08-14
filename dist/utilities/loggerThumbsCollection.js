"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Since not a function that is part of Express, it does not have type definitions by default.
// So we have to add them.
var loggerThumbs = function (req, res, next) {
    var url = req.url;
    console.log("Thumbs was visited");
    next();
};
exports.default = loggerThumbs;
