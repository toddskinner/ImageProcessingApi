"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// since not a function that is part of Express, it does not have type definitions by default. 
// So we have to add them.
var loggerFullsize = function (req, res, next) {
    var url = req.url;
    console.log("Fullsize was visited");
    next();
};
exports.default = loggerFullsize;
