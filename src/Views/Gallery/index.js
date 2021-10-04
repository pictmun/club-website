import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

const Gallery = () => {
  return (
    <>
      <div className="heading-bg">
        <div className="heading mb-5">Gallery</div>
      </div>
      {/* <SRLWrapper>
        <a href="https://demo.simple-react-lightbox.dev/static/media/unsplash01.b22b9740.jpg">
          <img
            style={{ width: 300 }}
            src="https://demo.simple-react-lightbox.dev/static/media/unsplash01.b22b9740.jpg"
            alt="Umbrella"
          />
        </a>
      </SRLWrapper> */}
      <div id="my_nanogallery2" data-nanogallery2>
        <div id="my_nanogallery2" data-nanogallery2>
          <a href="https://media-exp1.licdn.com/dms/image/C511BAQF7SVvjs8NGBw/company-background_10000/0/1568466411890?e=2159024400&v=beta&t=3P2ElpM2YsmWBqXTUCaUiBoorUNnWPI5fg5FVKab7Yk">
            Title Image 1
            <img src="img/img_01_thumbnail.jpg" />
          </a>
          <a href="https://media-exp1.licdn.com/dms/image/C511BAQF7SVvjs8NGBw/company-background_10000/0/1568466411890?e=2159024400&v=beta&t=3P2ElpM2YsmWBqXTUCaUiBoorUNnWPI5fg5FVKab7Yk">
            Title Image 2
            <img src="img/img_02_thumbnail.jpg" />
          </a>
          <a href="https://media-exp1.licdn.com/dms/image/C511BAQF7SVvjs8NGBw/company-background_10000/0/1568466411890?e=2159024400&v=beta&t=3P2ElpM2YsmWBqXTUCaUiBoorUNnWPI5fg5FVKab7Yk">
            Title Image 3
            <img src="img/img_03_thumbnail.jpg" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Gallery;
