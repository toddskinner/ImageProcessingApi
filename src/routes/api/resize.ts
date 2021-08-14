import express from 'express';
const resize = express.Router();
import resizeImage from '../../utilities/resizeImage';
import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';
import loggerResize from '../../utilities/loggerResize';

// https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname
const directory = process.cwd();

resize.get('/', loggerResize, async (req: Request, res: Response) => {
  const providedWidth: number = parseInt(req.query.width as string);
  const providedHeight: number = parseInt(req.query.height as string);
  const providedImageName: string = req.query.name as string;

  if (!providedImageName || !providedWidth || !providedHeight) {
    return res
      .status(404)
      .send(
        'Please provide a valid name, width and height for the image in the url'
      );
  }

  if (!(providedWidth > 0)) {
    return res
      .status(404)
      .send('Please provide a positive value for the width of the image');
  }

  if (!(providedHeight > 0)) {
    return res
      .status(404)
      .send('Please provide a positive value for the height of the image');
  }

  if (
    !(
      providedImageName === 'santamonica' ||
      providedImageName === 'encenadaport' ||
      providedImageName === 'fjord' ||
      providedImageName === 'icelandwaterfall' ||
      providedImageName === 'palmtunnel'
    )
  ) {
    return res
      .status(404)
      .send(
        'Please provide one of the following valid names for the image in the url: santamonica, encenadaport, fjord, icelandwaterfall, or palmtunnel'
      );
  }

  const fullImagePath: string = path.join(
    directory + '/images/full/' + providedImageName + '.jpg'
  );
  const queriedThumbPath: string = path.join(
    directory +
      '/images/thumbs/' +
      providedImageName +
      '_' +
      req.query.height +
      'x' +
      req.query.width +
      '.jpg'
  );

  // https://flaviocopes.com/how-to-check-if-file-exists-node/

  if (fs.existsSync(queriedThumbPath)) {
    //file exists
    res.status(200).sendFile(queriedThumbPath);
  } else {
    //file does not exist
    const newThumbImage = await resizeImage(
      fullImagePath,
      queriedThumbPath,
      providedHeight,
      providedWidth
    );
    if (!(newThumbImage === 'error')) {
      res.status(200).sendFile(newThumbImage);
    } else {
      return res.status(500).send('Failed to create new thumbnail');
    }
  }
});

export default resize;
