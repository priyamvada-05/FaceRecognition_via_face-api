import React, {Component} from "react";
import Webcam from "react-webcam";
import './WebCamCamera.css'
import BoundingBox from '../BoundingBox/BoundingBox'
import { loadModels,getFaceDescription } from '../../function_api/face_detect';

class  WebCamCamera extends Component {
 
 	constructor(){
 		super()
 		console.log('we are on web cam')
 		this.webcam = React.createRef();
 		this.state={
 			videoConstraints: {
				  width: 800,
				  height: 400,
				  facingMode: "user"},
			inputSize: {
				width:'800px',
				height:'400px'
			},
			faceDesc: null,
			box:[]
		    }

 	}

 	componentDidMount= async () => {
 		await loadModels();
 		this.startCapture();
        
 	    }

 	componentWillUnmount() {
    clearInterval(this.interval);
  }

 	 capture = async () => {
 	 	const obj=await getFaceDescription(this.webcam.current.getScreenshot())
        this.setState({faceDesc: obj.fullDesc, box:obj.cordArray })
        }
  
  

      startCapture = () => {
           this.interval = setInterval(() => {
           this.capture();
           }, 1500);
        };

        render(){

        		return(
        			<div className='new mt3'>
        	 			<div className='rel'>
        	 			<BoundingBox container = {this.state.box}/>
        	 			<Webcam
        	 			  	className=' shadow-5 br3'
        	 			    audio={false}
        	 				height={400}
        	 				ref={this.webcam}
        	 				screenshotFormat="image/jpeg"
        	 				width={800}
        	 				videoConstraints={this.state.videoConstraints}
        	 		     />
        	 			 </div>
        	 			</div>
        			)

}
}


 export default WebCamCamera;