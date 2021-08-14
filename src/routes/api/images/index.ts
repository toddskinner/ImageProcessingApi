import express from 'express';
import thumbsCollection from './thumbsCollection';
import resize from '../../../utilities/resize';
import path from 'path';
import fs from 'fs';

const routes = express.Router();

routes.get('/', async (req, res) => {

    console.log('main api route');
    console.log("dirname: " + __dirname);

    let fileExists: boolean; 
    let url = req.url;
    console.log("url: " + url);

    let providedWidth = parseInt(req.query.width as string);
    console.log('Provided width = ' + providedWidth);
    let providedHeight = parseInt(req.query.height as string);
    console.log('Provided height = ' + providedHeight);
    let providedImageName = req.query.name as string;
    
    if( !providedImageName || !providedWidth || !providedHeight) {
        return res.status(404).send("Please provide a name, a width and a height for the image in the url");  
    } 

    if( !(providedImageName === "santamonica" || providedImageName === "encenadaport" ||
        providedImageName === "fjord" || providedImageName === "icelandwaterfall" ||
        providedImageName === "palmtunnel") 
    ) {
        return res.status(404).send("Please provide one of the following valid names for the image in the url: santamonica, encenadaport, fjord, icelandwaterfall, palmtunnel");  
    }
    
    let fullImagePath: string = path.join(__dirname + '/full/' + providedImageName + '.jpg');
    let queriedThumbPath: string = path.join(__dirname + '/thumbs/' + providedImageName 
        + '_' + req.query.height + 'x' + req.query.width + '.jpg');
    console.log('queriedThumbPath: ' + queriedThumbPath);

    // https://flaviocopes.com/how-to-check-if-file-exists-node/

    if (fs.existsSync(queriedThumbPath)) {
        console.log('file exists');
        //file exists
        res.status(200).sendFile(queriedThumbPath);
    } else {
        //file does not exist
        let newThumbImage = await resize(fullImagePath, queriedThumbPath, providedHeight, providedWidth);
        res.status(200).sendFile(newThumbImage);
    }
});

routes.use('/thumbs', thumbsCollection);

// Notes if add frontend:
// https://expressjs.com/en/starter/static-files.html
// https://stackoverflow.com/questions/25166726/express-serves-index-html-even-when-my-routing-is-to-a-different-file
// routes.use(express.static(path.join(__dirname+'/public')));

export default routes;