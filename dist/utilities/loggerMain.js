"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// since not a function that is part of Express, it does not have type definitions by default. 
// So we have to add them.
var loggerMain = function (req, res, next) {
    var url = req.url;
    console.log("Main was visited");
    next();
};
exports.default = loggerMain;
