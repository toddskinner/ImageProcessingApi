import express from 'express';
import routes from './routes/api/images/index';

const app = express();
const port = 3000;

app.use('/api/images', routes);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
