import express from 'express';
const thumbs = express.Router();
import loggerThumbs from '../../../utilities/loggerThumbs';

thumbs.get('/', loggerThumbs, (req, res) => {
    res.send('Thumbs logged route');
});

export default thumbs;