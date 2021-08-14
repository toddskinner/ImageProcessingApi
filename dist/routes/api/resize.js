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
var resize = express_1.default.Router();
var resizeImage_1 = __importDefault(require("../../utilities/resizeImage"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var loggerResize_1 = __importDefault(require("../../utilities/loggerResize"));
// https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname
var directory = process.cwd();
resize.get('/', loggerResize_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var providedWidth, providedHeight, providedImageName, fullImagePath, queriedThumbPath, newThumbImage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                providedWidth = parseInt(req.query.width);
                providedHeight = parseInt(req.query.height);
                providedImageName = req.query.name;
                if (!providedImageName || !providedWidth || !providedHeight) {
                    return [2 /*return*/, res
                            .status(404)
                            .send('Please provide a valid name, width and height for the image in the url')];
                }
                if (!(providedWidth > 0)) {
                    return [2 /*return*/, res
                            .status(404)
                            .send('Please provide a positive value for the width of the image')];
                }
                if (!(providedHeight > 0)) {
                    return [2 /*return*/, res
                            .status(404)
                            .send('Please provide a positive value for the height of the image')];
                }
                if (!(providedImageName === 'santamonica' ||
                    providedImageName === 'encenadaport' ||
                    providedImageName === 'fjord' ||
                    providedImageName === 'icelandwaterfall' ||
                    providedImageName === 'palmtunnel')) {
                    return [2 /*return*/, res
                            .status(404)
                            .send('Please provide one of the following valid names for the image in the url: santamonica, encenadaport, fjord, icelandwaterfall, or palmtunnel')];
                }
                fullImagePath = path_1.default.join(directory + '/images/full/' + providedImageName + '.jpg');
                queriedThumbPath = path_1.default.join(directory +
                    '/images/thumbs/' +
                    providedImageName +
                    '_' +
                    req.query.height +
                    'x' +
                    req.query.width +
                    '.jpg');
                if (!fs_1.default.existsSync(queriedThumbPath)) return [3 /*break*/, 1];
                //file exists
                res.status(200).sendFile(queriedThumbPath);
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, resizeImage_1.default(fullImagePath, queriedThumbPath, providedHeight, providedWidth)];
            case 2:
                newThumbImage = _a.sent();
                if (!(newThumbImage === 'error')) {
                    res.status(200).sendFile(newThumbImage);
                }
                else {
                    return [2 /*return*/, res.status(500).send('Failed to create new thumbnail')];
                }
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = resize;
