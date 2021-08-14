import resize from '../../utilities/resize';

const directory = process.cwd();

describe('test the resize function', () => {
  const inputImage: string = directory + '/images/full/palmtunnel.jpg';
  const outputImage: string ='/images/thumb/palmtunnel_500x500.jpg';
  const height: number = 500;
  const width: number = 500;

  it('should return the output image file', async () => {
    const newThumbfile = await resize(inputImage, outputImage, width, height);
    expect(newThumbfile).toBe(outputImage);
  });
});
