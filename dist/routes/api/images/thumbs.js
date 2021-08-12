"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var thumbs = express_1.default.Router();
var loggerThumbs_1 = __importDefault(require("../../../utilities/loggerThumbs"));
var path_1 = __importDefault(require("path"));
var inputFile = './users.csv';
var outputFile = 'users.json';
var sharp = require('sharp');
console.log(path_1.default.join(__dirname + '/public'));
thumbs.use(express_1.default.static(path_1.default.join(__dirname + '/public')));
thumbs.get('/', loggerThumbs_1.default, function (req, res) {
    // res.send('Thumbs logged route');
    console.log('Thumbs logged route');
    //__dirname : It will resolve to your project folder.
    // https://stackoverflow.com/questions/25463423/res-sendfile-absolute-path
    // res.sendFile(path.join(__dirname, '../../../../public', 'index.html'));
    res.sendFile(path_1.default.join(__dirname + '/public/index.html'));
});
// thumbs.get('/resize', resizer, (req, res) => {
//     res.send('resizing in process!');
//     // res.sendFile(path.join(__dirname, '../../../../public', 'resize.html'));
// });
exports.default = thumbs;
