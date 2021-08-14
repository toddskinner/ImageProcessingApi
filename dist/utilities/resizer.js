"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var sharp = require('sharp');
var http = require('http');
var fs = require('fs');
var fullPath = '/Users/toddskinner/FullstackCourse/ImageProcessingApi/src/routes/api/images/full/';
var thumbPath = '/Users/toddskinner/FullstackCourse/ImageProcessingApi/src/routes/api/images/thumbs/';
var currentPath = '/Users/toddskinner/FullstackCourse/ImageProcessingApi/src/routes/api/images/current/';
var santamonicaInput = 'santamonica.jpg';
var encenadaportInput = 'encenadaport.jpg';
var fjordInput = 'fjord.jpg';
var icelandwaterfallInput = 'icelandwaterfall.jpg';
var palmtunnelInput = 'palmtunnel.jpg';
// since not a function that is part of Express, it does not have type definitions by default. 
// So we have to add them.
var resizer = function (req, res, next) {
    var providedImage = "";
    var providedName = "";
    var providedWidth = req.query.width || "";
    console.log('Provided width = ' + providedWidth);
    var providedHeight = req.query.height || "";
    console.log('Provided height = ' + providedHeight);
    if (req.query.name === "santamonica") {
        providedImage = santamonicaInput;
        providedName = "santamonica";
    }
    else if (req.query.name === "encenadaport") {
        providedImage = encenadaportInput;
        providedName = "encenadaport";
    }
    else if (req.query.name === "fjord") {
        providedImage = fjordInput;
        providedName = "fjord";
    }
    else if (req.query.name === "icelandwaterfall") {
        providedImage = icelandwaterfallInput;
        providedName = "icelandwaterfall";
    }
    else if (req.query.name === "palmtunnel") {
        providedImage = palmtunnelInput;
        providedName = "palmtunnel";
    }
    else {
        providedImage = santamonicaInput;
        providedName = "santamonica";
    }
    console.log('Provided image = ' + providedName);
    var fileName = "name=" + providedName + "&" + "height=" + providedHeight + "&" + "width=" + providedWidth;
    console.log('Filename = ' + fileName);
    console.log(path_1.default.join(fullPath + fjordInput));
    res.status(200).sendFile(path_1.default.join(fullPath + fjordInput));
    // var image = new Image();
    // image.src = String(path.join(__dirname+'/public/images/' + fjordInput2));
    // let imageViewer = document.getElementById('mainimage');
    // imageViewer?.appendChild(image);
    // fs.readFile(providedImage, function(err: any, data: any) {
    //     if (err) throw err // Fail if the file can't be read.
    //     console.log(data);
    //     res.sendFile(path.join(__dirname+'/public/index.html'));
    // var image = new Image();
    // image.src = String(path.join(__dirname+'/public/images/' + fjordInput2));
    // let imageViewer = document.getElementById('mainimage');
    // imageViewer?.appendChild(image);
    // http.createServer(function(req: any, res: any) {
    //     res.writeHead(200, {'Content-Type': 'image/jpeg'})
    //     res.end(data) // Send the file data to the browser.
    // }).listen(3000)
    // })
    next();
};
exports.default = resizer;
