import express from 'express';
const resize = express.Router();
import resizeImage from '../../utilities/resizeImage';
import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';

const directory = process.cwd();
console.log('directory' + directory);
console.log('__dirname: ' + __dirname);

resize.get('/', async (req: Request, res: Response) => {
  const providedWidth: number = parseInt(req.query.width as string);
  console.log('Provided width = ' + providedWidth);
  const providedHeight: number = parseInt(req.query.height as string);
  console.log('Provided height = ' + providedHeight);
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

  let fullImagePath: string = path.join(
    directory + '/images/full/' + providedImageName + '.jpg'
  );
  let queriedThumbPath: string = path.join(
    directory +
      '/images/thumbs/' +
      providedImageName +
      '_' +
      req.query.height +
      'x' +
      req.query.width +
      '.jpg'
  );
  console.log('queriedThumbPath: ' + queriedThumbPath);

  // https://flaviocopes.com/how-to-check-if-file-exists-node/

  if (fs.existsSync(queriedThumbPath)) {
    console.log('file exists');
    //file exists
    res.status(200).sendFile(queriedThumbPath);
  } else {
    //file does not exist
    let newThumbImage = await resizeImage(
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
