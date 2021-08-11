import express from 'express';
import fullsize from './fullsize';
import thumbs from './thumbs';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('main api route');
});

routes.use('/fullsize', fullsize);
routes.use('/thumbs', thumbs);

export default routes;