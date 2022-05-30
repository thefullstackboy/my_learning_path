import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'image/sl1.png',
    caption: 'Slide 1'
  },
  {
    url: 'image/sp2.png',
    caption: 'Slide 2'
  },
  {
    url: 'image/sp2.png',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container container-fluid image-fluid my-5">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}} className="image-fluid">
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;