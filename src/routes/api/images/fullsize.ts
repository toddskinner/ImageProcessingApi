import express from 'express';
const fullsize = express.Router();
import loggerFullsize from '../../../utilities/loggerFullsize';

fullsize.get('/', loggerFullsize, (req, res) => {
    res.send('Fullsize logged route');
});

export default fullsize;