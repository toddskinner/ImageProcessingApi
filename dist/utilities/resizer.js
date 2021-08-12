"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sharp = require('sharp');
var http = require('http');
var fs = require('fs');
var santamonicaInput = './images/full/santamonica.jpg';
var encenadaportInput = './images/full/encenadaport.jpg';
var fjordInput = './images/full/fjord.jpg';
var icelandwaterfallInput = './images/full/icelandwaterfall.jpg';
var palmtunnelInput = './images/full/palmtunnel.jpg';
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
    fs.readFile(providedImage, function (err, data) {
        if (err)
            throw err; // Fail if the file can't be read.
        console.log(data);
        // http.createServer(function(req: any, res: any) {
        //     res.writeHead(200, {'Content-Type': 'image/jpeg'})
        //     res.end(data) // Send the file data to the browser.
        // }).listen(3000)
    });
    next();
};
exports.default = resizer;
