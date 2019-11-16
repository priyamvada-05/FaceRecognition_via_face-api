import React, { Component } from 'react';
import './App.css';
import test_img from '../test_pic/test_img.jpeg'
import { loadModels,getFaceDescription } from '../function_api/face_detect';
import ImageDisplay from '../component/ImageDisplay/ImageDisplay'
import WebCamCamera from '../component/WebCamCamera/WebCamCamera';


class App extends Component {

  constructor() {
    super();
    this.state = { 
      image: test_img,
      fullDesc: [],
      box:[],
      faceDetected:false,
      discription:null,
      cameraStatus:false
    };
  }

  componentDidMount= async ()=> {
     await loadModels();
       };

  sayHello=async (event)=>{
      this.setState({cameraStatus:false})
      await getFaceDescription(this.state.image).then(obj=> this.setState({
      fullDesc:obj.fullDesc, 
      box:obj.cordArray ,
      faceDetected: true
       } ));
     console.log(this.state.fullDesc);
  }

  getImageFromInput=(event)=>{

      this.setState({image:event.target.value})
  }

  camera=(event)=>{
        this.setState({cameraStatus:true})
        console.log(this.state.cameraStatus)
  }


  render() {

    return (
      <div className=''>
        <h1 className='f2 tc'>Welcome to the face recognition</h1>
        <div className='container new'>
        <button className='f3 br3 bg-light-green pointer mr3' onClick={this.sayHello}>Picture</button>
        <button className='f3 br3 bg-light-green pointer' onClick={this.camera}>Camera</button>
        </div>
        <div className='new mt1'>
        {/* />*/}
        </div>
        {this.state.cameraStatus?
                (<WebCamCamera status={this.cameraStatus}/>)
        
                :(<ImageDisplay ImageUrl={this.getImageFromInput} container={this.state.box}  src={this.state.image} detectStatus={this.state.faceDetected} />)
                }
      </div>
    );

   }
}

export default App