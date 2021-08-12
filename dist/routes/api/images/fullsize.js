"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fullsize = express_1.default.Router();
var loggerFullsize_1 = __importDefault(require("../../../utilities/loggerFullsize"));
var fs_1 = require("fs");
var csvtojson_1 = __importDefault(require("csvtojson"));
var inputFile = './users.csv';
var outputFile = 'users.json';
var sharp = require('sharp');
fullsize.get('/', loggerFullsize_1.default, function (req, res) {
    res.send('Fullsize logged route');
});
// define a route handler for the default home page
fullsize.get('/convert', function (req, res) {
    res.send('converting in process!');
    csvtojson_1.default()
        .fromFile(inputFile)
        .then(function (data) {
        var newData = data.map(function (item) {
            var first = item.first_name;
            var last = item.last_name;
            var phone = item.phone;
            if (item.phone === "") {
                phone = "missing data";
            }
            return { first: first, last: last, phone: phone };
        });
        fs_1.promises.writeFile(outputFile, JSON.stringify(newData));
    });
});
exports.default = fullsize;
