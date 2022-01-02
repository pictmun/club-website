import React from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "./pics/1.jpeg";
import pic2 from "./pics/2.JPG";
import pic3 from "./pics/3.JPG";

const AboutUs = () => {
    return (
    <>
    <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={pic1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src={pic2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={pic3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </>
    )
}

export default AboutUs;






