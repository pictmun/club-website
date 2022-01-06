import React from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "./pics/1.png";
import pic2 from "./pics/5.png";
import pic3 from "./pics/6.png";

const AboutUs = () => {
    return (
    <>
    <div className="heading mb-5">About Us</div>
    <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={pic1}
            alt="First slide"
            width={950}
            height={500}
            />
            <Carousel.Caption>
            <h3>PICT MUN</h3>
            <p>Established in the year 2016, the PICT MUN Club focuses on organizing conferences for the personality development of the students of the college and the region. The Club has successfully organized four MUN Conferences for college students and conducts group discussions, extempore and debates regularly. The Club also organizes training workshops conducted by experienced and decorated MUNers for MUN enthusiasts from in and around the city.</p>
            </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src={pic2}
            alt="Second slide"
            width={950}
            height={500}
            />
            <Carousel.Caption>
            <h3>MUN</h3>
            <p>The Model United Nations, Model UN or MUN is a reenactment of the United Nations that was propelled from the 'Model League Of Nations'. The members get the chance to encounter the difficulties of discretion by assuming the role of the UN representative for an allocated nation or an individual from other global basic leadership bodies. It helps them to build up their capacities to work with other people who are similarly roused and energetic about discovering answers for Global Concerns. With the expanding closeness of nations over the World, the MUN has turned into a fairly mainstream practice all over.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={pic3}
            alt="Third slide"
            width={950}
            height={500}
            />
            <Carousel.Caption>
            <h3>UN</h3>
            <p>The United Nations is an international organization founded in 1945.  It is currently made up of 193 Member States.  The mission and work of the United Nations are guided by the purposes and principles contained in its founding Charter. The UN also provides a forum for its members to express their views in the General Assembly, the Security Council, the Economic and Social Council, and other bodies and committees. By enabling dialogue between its members, and by hosting negotiations, the Organization has become a mechanism for governments to find areas of agreement and solve problems together.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </>
    )
}

export default AboutUs;