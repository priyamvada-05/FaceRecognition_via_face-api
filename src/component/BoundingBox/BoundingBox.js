import React from 'react';
import './BoundingBox.css';

const BoundingBox=  ({container})=>{

	  
		const cord=container.map((obj,i)=>{

			console.log(obj)
			let height = obj._height;
	        let _x = obj._x;
	        let _y = obj._y;
	        let width = obj._width;

			return(<div key={i} className="bounding-box" 
				 style={{width:width, height:height,  transform: `translate(${_x}px,${_y}px)`}}>
		          </div>)
		});

		return(

			<div>
				{cord}
			</div>
			)
				}



export default BoundingBox