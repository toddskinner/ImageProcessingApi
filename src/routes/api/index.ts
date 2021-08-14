import express from 'express';
import resize from './resize';
import { Request, Response } from 'express';

// https://stackoverflow.com/questions/34508081/how-to-add-typescript-definitions-to-express-req-res

const routes = express.Router();
const directory = process.cwd();

routes.get('/', async (req: Request, res: Response) => {
  return res
    .status(200)
    .send(
      'Please provide an image with query parameters of "name", "width", and "height" for resizing. The valid image names to choose from are "santamonica", "encenadaport", "fjord", "icelandwaterfall", and "palmtunnel"'
    );
});

routes.use('/resize', resize);

export default routes;
