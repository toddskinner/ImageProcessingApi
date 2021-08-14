import resize from '../../utilities/resize';

describe('test the resize function', () => {
  const inputImage: string =
    '/Users/toddskinner/FullstackCourse/ImageProcessingApi/images/full/palmtunnel.jpg';
  const outputImage: string =
    '/Users/toddskinner/FullstackCourse/ImageProcessingApi/images/thumb/palmtunnel_500x500.jpg';
  const height: number = 500;
  const width: number = 500;

  it('should return the output image file', async () => {
    const newThumbfile = await resize(inputImage, outputImage, width, height);
    expect(newThumbfile).toBe(outputImage);
  });
});
