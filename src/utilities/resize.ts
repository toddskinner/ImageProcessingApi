import sharp from 'sharp';

const resize = async (
  inputfile: string,
  outputPath: string,
  width: number,
  height: number
): Promise<string> => {
  console.log('resizeImage function called');
  console.log('File to be resized:' + inputfile);
  console.log('New thumb path:' + outputPath);

  // https://sharp.pixelplumbing.com/api-constructor

  try {
    await sharp(inputfile).resize(width, height).toFile(outputPath);
  } catch (error) {
    console.log(error.message);
  }
  return outputPath;
};

export default resize;
