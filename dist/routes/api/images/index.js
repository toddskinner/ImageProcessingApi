"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loggerMain_1 = __importDefault(require("../../../utilities/loggerMain"));
// import fullsize from './fullsize';
var thumbs_1 = __importDefault(require("./thumbs"));
var resizer_1 = __importDefault(require("../../../utilities/resizer"));
var fs_1 = require("fs");
var csvtojson_1 = __importDefault(require("csvtojson"));
var path_1 = __importDefault(require("path"));
var routes = express_1.default.Router();
var inputFile = './users.csv';
var outputFile = 'users.json';
var sharp = require('sharp');
console.log(path_1.default.join(__dirname + '/public'));
routes.use(express_1.default.static(path_1.default.join(__dirname + '/public')));
routes.get('/', loggerMain_1.default, function (req, res) {
    // res.send('main api route - fullsize images');
    console.log('main api route - fullsize images');
    // res.sendFile(path.join(__dirname, '../../../../public', 'index.html'));
    res.sendFile(path_1.default.join(__dirname + '/public/index.html'));
});
// define a route handler for the default home page
routes.get('/convert', function (req, res) {
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
// fullsize.get('/', loggerFullsize, (req, res) => {
//     res.send('Fullsize logged route');
// });
routes.get('/resize', resizer_1.default, function (req, res) {
    res.send('resizing in process!');
    // res.sendFile(path.join(__dirname, '../../../../public', 'resize.html'));
});
// routes.use('/fullsize', fullsize);
routes.use('/thumbs', thumbs_1.default);
exports.default = routes;
