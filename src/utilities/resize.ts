import sharp from 'sharp';

const resize = async (
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
  }
  return outputPath;
};

export default resize;
