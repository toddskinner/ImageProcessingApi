"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fullsize = express_1.default.Router();
var loggerFullsize_1 = __importDefault(require("../../utilities/loggerFullsize"));
fullsize.get('/', loggerFullsize_1.default, function (req, res) {
    res.send('Fullsize logged route');
});
exports.default = fullsize;
