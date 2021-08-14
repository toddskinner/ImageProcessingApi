import resize from '../../utilities/resizeImage';

const directory = process.cwd();
console.log('test directory: ' + directory);

describe('test the resize function', () => {
  const inputImage: string = directory + '/images/full/palmtunnel.jpg';
  const outputImage: string =
    directory + '/images/thumbs/palmtunnel_500x500.jpg';
  const height: number = 500;
  const width: number = 500;
  const invalidImage: string = directory + '/images/full/newyork.jpg';

  it('should return the output image file', async () => {
    const newThumbfile = await resize(inputImage, outputImage, width, height);
    expect(newThumbfile).toBe(outputImage);
  });

  it('should not return the output image file if params invalid', async () => {
    const newThumbfile = await resize(invalidImage, outputImage, width, height);
    expect(newThumbfile).toBe('error');
  });
});
