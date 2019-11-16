import React from 'react';
import BoundingBox from '../BoundingBox/BoundingBox'
import './ImageDisplay.css'


const ImageDisplay=({src, container,detectStatus,ImageUrl})=>{


			return(
				<div  className='center' width='770' height='auto'>
				
				<div className='new1'>
				<input type='text' placeholder='Enter the url' className='w-50 shadow-5 f4 mb3' onChange={ImageUrl} />
				</div>
				<div className='new' >
						{detectStatus ? 
							( <BoundingBox container={container} /> )
							: null
							}
							<img src={src} id='new'/>
		 		
				</div>
				</div>
		);

		}


export default ImageDisplay