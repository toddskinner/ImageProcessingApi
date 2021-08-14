# ImageProcessingApi

ImageProcessingApi is an API that allows you to resize one of five images. 

## Usage

You can resize an image by adding the image/file name, the desired width, and the desired height as query parameters to the main endpoint of this api which is **/api**. Resized images are saved as new thumbnails for future use. 

The names of the available images are: *fjord*, *icelandwaterfall*, *palmtunnel*, *santamonica*, and *encenadaport*. All three query params must be provided and both height and width must be positive values.

Example query: *http://localhost:3000/api/?name=icelandwaterfall&width=1000&height=-1000*

Scripts:
- Build --> "build"
- Test --> "test"
- Start --> "start"


## License
[MIT](https://choosealicense.com/licenses/mit/)

