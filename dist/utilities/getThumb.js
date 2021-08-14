"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fullPath = '/Users/toddskinner/FullstackCourse/ImageProcessingApi/src/routes/api/images/full/';
var thumbPath = '/Users/toddskinner/FullstackCourse/ImageProcessingApi/src/routes/api/images/thumbs/';
var icelandwaterfallInput = 'icelandwaterfall.jpg';
var getThumb = function (req, res, next) {
    var url = req.url;
    console.log("Get current was visited");
    console.log(__dirname);
    var inputPath = path_1.default.join(thumbPath + 'test.jpg');
    var inputPath2 = thumbPath + 'tests.jpg';
    console.log(inputPath2);
    // fs.access(inputPath2, fs.constants.F_OK, (err) => {
    //     if (err) {
    //       console.error(err)
    //       resizeImage(inputPath2, filename, width, height);
    //       return
    //     }
    //     console.log("Cached checked: file exists");
    //     //file exists
    //     res.sendFile(outputPath + filename);
    // })
    // const readData = async () => {
    //     try {
    //         const myFile = await fsPromises.readFile(
    //             inputPath2, 'base64'
    //         );
    //         res.status(200).sendFile(myFile);
    //     } catch(err){
    //         console.log(err);
    //     } 
    //     // const myFile = await fsPromises.readFile(thumbPath + 'myfile.txt', 'utf-8');
    //     // console.log(myFile);    
    // }
    // readData();
};
exports.default = getThumb;
