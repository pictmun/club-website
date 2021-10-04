import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

const Gallery = () => {
  
  return (
    <>
      <SRLWrapper>
        <a href="https://demo.simple-react-lightbox.dev/static/media/unsplash01.b22b9740.jpg">
          <img
            style={{ width: 300 }}
            src="https://demo.simple-react-lightbox.dev/static/media/unsplash01.b22b9740.jpg"
            alt="Umbrella"
          />
        </a>
        
      </SRLWrapper>
    </>
  );
};

export default Gallery;
