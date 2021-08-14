import express from 'express';
const thumbs = express.Router();
import loggerThumbs from '../../../utilities/loggerThumbsCollection';

thumbs.get('/', loggerThumbs, (req, res) => {
    
    // TBD 
    // res.sendFile(path.join(__dirname+'/public/thumbs.html'));
});

// Notes for future reference
// https://expressjs.com/en/starter/static-files.html
// thumbs.use(express.static(path.join(__dirname+'/public')));

export default thumbs;