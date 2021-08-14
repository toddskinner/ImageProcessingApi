"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import fullsize from './fullsize';
var thumbs_1 = __importDefault(require("./thumbs"));
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = __importDefault(require("fs"));
var routes = express_1.default.Router();
var fullPath = '/Users/toddskinner/FullstackCourse/ImageProcessingApi/src/routes/api/images/full/';
var thumbPath = '/Users/toddskinner/FullstackCourse/ImageProcessingApi/src/routes/api/images/thumbs/';
// const sharp = require('sharp');
var fjordInput = 'fjord.jpg';
var santamonicaInput = 'santamonica.jpg';
var encenadaportInput = 'encenadaport.jpg';
var icelandwaterfallInput = 'icelandwaterfall.jpg';
var palmtunnelInput = 'palmtunnel.jpg';
// const middleware = [checkCache, resizer];
routes.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var fileExists, url, providedWidth, providedHeight, providedImageName, fullImagePath, queriedThumbPath, testPath, sharpData;
    return __generator(this, function (_a) {
        console.log('main api route');
        console.log("dirname: " + __dirname);
        url = req.url;
        console.log("url: " + url);
        providedWidth = parseInt(req.query.width);
        console.log('Provided width = ' + providedWidth);
        providedHeight = parseInt(req.query.height);
        console.log('Provided height = ' + providedHeight);
        providedImageName = req.query.name;
        if (!providedImageName || !providedWidth || !providedHeight) {
            return [2 /*return*/, res.status(404).send("Please provide a name, a width and a height for the image in the url")];
        }
        if (!(providedImageName === "santamonica" || providedImageName === "encenadaport" ||
            providedImageName === "fjord" || providedImageName === "icelandwaterfall" ||
            providedImageName === "palmtunnel")) {
            return [2 /*return*/, res.status(404).send("Please provide one of the following valid names for the image in the url: santamonica, encenadaport, fjord, icelandwaterfall, palmtunnel")];
        }
        fullImagePath = path_1.default.join(__dirname + '/full/' + providedImageName + '.jpg');
        queriedThumbPath = path_1.default.join(__dirname + '/thumbs/' + providedImageName
            + '_' + req.query.height + 'x' + req.query.width + '.jpg');
        console.log('queriedThumbPath: ' + queriedThumbPath);
        testPath = thumbPath + 'test.jpg';
        if (fs_1.default.existsSync(queriedThumbPath)) {
            console.log('file exists');
            //file exists
            // res.status(200).sendFile(queriedThumbPath);
            res.status(200).sendFile(queriedThumbPath);
        }
        else {
            console.log('file does not exist');
            // let newThumbImage = await resize(fullImagePath, queriedThumbPath, providedHeight, providedWidth);
            // res.status(200).sendFile(newThumbImage);
            console.log(queriedThumbPath);
            console.log(thumbPath + providedImageName
                + '_' + req.query.height + 'x' + req.query.width + '.jpg');
            sharpData = function () { return __awaiter(void 0, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, sharp_1.default(fullImagePath)
                                    .resize(200, 400)
                                    .toFile(queriedThumbPath)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.log(error_1.message);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            sharpData();
        }
        return [2 /*return*/];
    });
}); });
routes.get('/resize', function (req, res, next) {
    // res.send('main api route - fullsize images');
    // res.sendFile(path.join(__dirname+'/public/index.html'));
    // res.status(200).sendFile(path.join(__dirname+'/full/' + fjordInput));
    var outputPath = thumbPath + 'test2.jpg';
    if (fs_1.default.existsSync(outputPath)) {
        console.log('file exists');
        //file exists
    }
    else {
        console.log('file DOES NOT exist');
    }
});
routes.get('/sharp', function (req, res) {
    console.log('sharp route');
    var image = path_1.default.join(fullPath + santamonicaInput);
    console.log(image);
    var outputPath = thumbPath + 'test2.jpg';
    var sharpData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, sharp_1.default(image)
                            .resize(200, 400)
                            .toFile(outputPath)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    alert(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    sharpData();
    // res.sendFile(path.join(__dirname+'/public/index.html'));
    // res.status(200).sendFile(path.join(__dirname+'/full/' + fjordInput));
});
routes.use('/thumbs', thumbs_1.default);
// routes.use(middleware);
// https://expressjs.com/en/starter/static-files.html
// https://stackoverflow.com/questions/25166726/express-serves-index-html-even-when-my-routing-is-to-a-different-file
// console.log(path.join(__dirname+'/public'));
// routes.use(express.static(path.join(__dirname+'/public')));
exports.default = routes;
