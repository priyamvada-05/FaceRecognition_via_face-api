
import * as faceapi from 'face-api.js';

// Load models and weights
export const loadModels= async ()=> {
	console.log('Loading models')
  const MODEL_URL = process.env.PUBLIC_URL + '/models';
  await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
  await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
  await faceapi.loadFaceRecognitionModel(MODEL_URL);
}

export const getFaceDescription= async (img, inputSize=512)=>{

	console.log('Models loaded')
	let scoreThreshold = 0.5;
  	const OPTION = new faceapi.TinyFaceDetectorOptions({
    inputSize,
    scoreThreshold
 	 });
  	const useTinyModel = true;

  // fetch image to api
	  let image = await faceapi.fetchImage(img);

	  // detect all faces and generate full description from image
	  // including landmark and descriptor of each face
	  let fullDesc = await faceapi
	    .detectAllFaces(image, OPTION)
	    .withFaceLandmarks(useTinyModel)
	    .withFaceDescriptors();

	  let cordArray=fullDesc.map(obj=>{

	  	const _height=obj.detection.box.height;
		const _x=obj.detection.box._x;
		const _y=obj.detection.box._y;
		const _width=obj.detection.box._width;


		return({
			_height,
			_x,
			_y,
			_width
		})
	  })

	  return( {
	  	  	      fullDesc,
	  	  	      cordArray
	  });
	  }