import express from 'express';

const sharp = require('sharp');
const http = require('http');
const fs = require('fs');
const santamonicaInput = './images/full/santamonica.jpg';
const encenadaportInput = './images/full/encenadaport.jpg';
const fjordInput = './images/full/fjord.jpg';
const icelandwaterfallInput = './images/full/icelandwaterfall.jpg';
const palmtunnelInput = './images/full/palmtunnel.jpg';

// since not a function that is part of Express, it does not have type definitions by default. 
// So we have to add them.
const resizer = (req: express.Request, res: express.Response, next: Function): void => {
    
    let providedImage: any = "";
    let providedName: string = "";
    let providedWidth = req.query.width || "";
    console.log('Provided width = ' + providedWidth);
    let providedHeight = req.query.height || "";
    console.log('Provided height = ' + providedHeight);
    
    if(req.query.name === "santamonica"){
        providedImage = santamonicaInput;
        providedName = "santamonica";
    } else if(req.query.name === "encenadaport"){
        providedImage = encenadaportInput;
        providedName = "encenadaport";
    } else if(req.query.name === "fjord"){
        providedImage = fjordInput;
        providedName = "fjord";
    } else if(req.query.name === "icelandwaterfall"){
        providedImage = icelandwaterfallInput;
        providedName = "icelandwaterfall";
    } else if(req.query.name === "palmtunnel"){
        providedImage = palmtunnelInput;
        providedName = "palmtunnel";
    } else {
        providedImage = santamonicaInput;
        providedName = "santamonica";
    }
    console.log('Provided image = ' + providedName);

    let fileName: string = "name=" + providedName + "&" + "height=" + providedHeight + "&" + "width=" + providedWidth;
    console.log('Filename = ' + fileName);

    fs.readFile(providedImage, function(err: any, data: any) {
        if (err) throw err // Fail if the file can't be read.
        console.log(data);
        // http.createServer(function(req: any, res: any) {
        //     res.writeHead(200, {'Content-Type': 'image/jpeg'})
        //     res.end(data) // Send the file data to the browser.
        // }).listen(3000)
    })
    next();
};

export default resizer;