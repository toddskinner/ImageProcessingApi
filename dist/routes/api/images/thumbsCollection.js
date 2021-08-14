"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var thumbs = express_1.default.Router();
var loggerThumbsCollection_1 = __importDefault(require("../../../utilities/loggerThumbsCollection"));
thumbs.get('/', loggerThumbsCollection_1.default, function (req, res) {
    // TBD
    // res.sendFile(path.join(__dirname+'/public/thumbs.html'));
});
// Notes for future reference
// https://expressjs.com/en/starter/static-files.html
// thumbs.use(express.static(path.join(__dirname+'/public')));
exports.default = thumbs;
