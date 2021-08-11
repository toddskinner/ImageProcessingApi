"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var thumbs = express_1.default.Router();
var loggerThumbs_1 = __importDefault(require("../../utilities/loggerThumbs"));
thumbs.get('/', loggerThumbs_1.default, function (req, res) {
    res.send('Thumbs logged route');
});
exports.default = thumbs;
