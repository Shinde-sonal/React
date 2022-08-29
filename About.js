import React from 'react'
import react from './img/react.png';
const About = () => {
  return (
    <>
        <div className='about'>
            <h1>About Project</h1>
            <p>I craeted a frontend with Reactjs and did a crud opertation with backend spring and database is craeted in mysql workbench </p>
        </div>
        <div className="responsive about">
            <div className="gallery">
                <a  href="react.png">
                    <img src={react} alt="img" width="600" height="400"/>
                </a>
                <div className="desc">Add a description of the image here</div>
            </div>
            <div className="gallery">
                <a  href="react.png">
                    <img src={react} alt="img" width="600" height="400"/>
                </a>
                <div className="desc">Add a description of the image here</div>
            </div>
            <div className="gallery">
                <a  href="react.png">
                    <img src={react} alt="img" width="600" height="400"/>
                </a>
                <div className="desc">Add a description of the image here</div>
            </div>
        </div>
    </>
  )
}
export default About

