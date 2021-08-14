"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var thumbs = express_1.default.Router();
var loggerThumbs_1 = __importDefault(require("../../../utilities/loggerThumbs"));
var path_1 = __importDefault(require("path"));
var santamonicaInput = 'santamonica.jpg';
var encenadaportInput = './images/full/encenadaport.jpg';
var fjordInput = './images/full/fjord.jpg';
var icelandwaterfallInput = './images/full/icelandwaterfall.jpg';
var palmtunnelInput = './images/full/palmtunnel.jpg';
var inputFile = './users.csv';
var outputFile = 'users.json';
var sharp = require('sharp');
thumbs.get('/', loggerThumbs_1.default, function (req, res) {
    // res.send('Thumbs logged route');
    console.log('Thumbs logged route');
    //__dirname : It will resolve to your project folder.
    // https://stackoverflow.com/questions/25463423/res-sendfile-absolute-path
    // res.sendFile(path.join(__dirname+'/public/thumbs.html'));
    // console.log(path.join(__dirname+'/public/images/' + santamonicaInput));
    res.status(200).sendFile(path_1.default.join(__dirname + '/full/' + santamonicaInput));
});
// thumbs.get('/resize', resizer, (req, res) => {
//     res.send('resizing in process!');
//     // res.sendFile(path.join(__dirname, '../../../../public', 'resize.html'));
// });
// https://expressjs.com/en/starter/static-files.html
// console.log(path.join(__dirname+'/public'));
// thumbs.use(express.static(path.join(__dirname+'/public')));
exports.default = thumbs;
