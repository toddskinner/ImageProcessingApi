import express from 'express';
import loggerMain from '../../../utilities/loggerMain';
// import fullsize from './fullsize';
import thumbs from './thumbs';
import resizer from '../../../utilities/resizer';
import { promises as fsPromises } from 'fs';
import csv from 'csvtojson';
import path from 'path';

const routes = express.Router();
const inputFile = './users.csv';
const outputFile = 'users.json';
const sharp = require('sharp');

console.log(path.join(__dirname+'/public'));
routes.use(express.static(path.join(__dirname+'/public')));

routes.get('/', loggerMain, (req, res) => {
    // res.send('main api route - fullsize images');
    console.log('main api route - fullsize images');
    // res.sendFile(path.join(__dirname, '../../../../public', 'index.html'));
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

// define a route handler for the default home page
routes.get('/convert', (req, res) => {
    res.send('converting in process!');
    csv()
        .fromFile(inputFile)
        .then((data)=> {
            let newData = data.map( (item: {
                first_name: string; last_name: string; phone: string; }) => {
                    let first = item.first_name;
                    let last = item.last_name;
                    let phone = item.phone;
                    if(item.phone === ""){
                        phone = "missing data";
                    }
                    return {first, last, phone};
                });
                fsPromises.writeFile(outputFile, JSON.stringify(newData));
        });
});

// fullsize.get('/', loggerFullsize, (req, res) => {
//     res.send('Fullsize logged route');
// });

routes.get('/resize', resizer, (req, res) => {
    res.send('resizing in process!');
    // res.sendFile(path.join(__dirname, '../../../../public', 'resize.html'));
});

// routes.use('/fullsize', fullsize);
routes.use('/thumbs', thumbs);

export default routes;