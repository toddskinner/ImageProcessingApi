import sharp from 'sharp';

const resizeImage = async (
  inputfile: string,
  outputPath: string,
  width: number,
  height: number
): Promise<string> => {
  // https://sharp.pixelplumbing.com/api-constructor

  try {
    await sharp(inputfile).resize(width, height).toFile(outputPath);
  } catch (error) {
    console.log(error.message);
    outputPath = 'error';
  }
  return outputPath;
};

export default resizeImage;
