import express from 'express';
const thumbs = express.Router();
import loggerThumbs from '../../../utilities/loggerThumbs';
import resizer from '../../../utilities/resizer';
import { promises as fsPromises } from 'fs';
import csv from 'csvtojson';
import path from 'path';

const inputFile = './users.csv';
const outputFile = 'users.json';
const sharp = require('sharp');

console.log(path.join(__dirname+'/public'));
thumbs.use(express.static(path.join(__dirname+'/public')));

thumbs.get('/', loggerThumbs, (req, res) => {
    // res.send('Thumbs logged route');
    console.log('Thumbs logged route');
    //__dirname : It will resolve to your project folder.
    // https://stackoverflow.com/questions/25463423/res-sendfile-absolute-path
    // res.sendFile(path.join(__dirname, '../../../../public', 'index.html'));
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

// thumbs.get('/resize', resizer, (req, res) => {
//     res.send('resizing in process!');
//     // res.sendFile(path.join(__dirname, '../../../../public', 'resize.html'));
// });

export default thumbs;