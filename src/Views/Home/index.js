import Aos from "aos";
import React, { useEffect } from "react";
import groupimg from "./images/Grouppic.JPG";
import conferenceimg from "./images/conference.JPG";
import newsletterimg from "./images/newsletter.png";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {" "}
      <div className="text-center">
        <div className="bg-img">
          <h1>PICT MUN</h1>
          <h3>- Think, Discuss, Prosper -</h3>
        </div>
      </div>
      <div className="home">
        {/* About Us  */}
        <div className="container mt-5">
          <div className="row my-5">
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 className="para-title">PICT MUN</h2>
              {/* <img src="/assets/1.png" alt="" /> */}
              <p className="info">
                The PICT MUN Club, established in 2016, consists of a group of
                inquisitive students who are passionate about social, political
                and economic issues that elude the future of our world. PICT MUN
                strongly believes in the important role of dialogue and
                discussion in solving any problem and hence always abides by its
                motto - 'Think.Discuss.Prosper.' PICT MUN organizes an annual MUN
                conference and various public speaking events to engage the
                youth, who are the torchbearers of the future, in stimulating
                conversations. This encourages them to discuss and debate on
                important issues and find a common ground to agree on, thus
                promoting a sense of individuality as well as collectivism and
                helps them understand the universal principle of tolerance.
              </p>
            </div>

            <div className="col-md-6 text-center" ><img src={groupimg}/></div>
          </div>
        </div>
        {/* Conference  */}
        <div className="container mt-5">
          <div className="row my-5">
            <div className="col-md-6 text-center"><img src={conferenceimg}/></div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2>PICT MUN Conference</h2>
              <p>
                The PICT MUN Club organizes an annual MUN conference with an
                ever-increasing turnout of enthusiastic and unique set of people
                including everyone from school children to undergraduates and
                postgraduates who gather together in order to discuss and debate
                on important issues in various committees with different
                agendas. The annual MUN conference is an interesting occasion
                for like-minded people to discuss and discover different views
                on global issues through the eyes of various countries. The
                annual MUN conference is one of the most prestigious conferences
                in the circuit and is the only event at PICT that hosts such a
                diverse crowd including international delegates as well as
                national delegates from various states of the country!
              </p>
            </div>

          </div>
        </div>
        {/* Events  */}
        <div
          className="container-fluid mt-5 home-events text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row my-5">
            <div className="col-md-12">
              <h2>Events</h2>
              <div className="container">
                <p>
                  Apart from the annual MUN conference, PICT MUN was the first
                  club at PICT to organize various intra-college public speaking
                  events to motivate people to express their views in front of a
                  diverse audience. With an exchange of ideas taking place, it
                  not only widens one's mindset but also helps them develop
                  tolerance towards a difference in opinions. We believe in
                  giving each individual the opportunity to develop their public
                  speaking skills.
                </p>
                <Link className="btn btn-info mt-3" to="/events">See All Events</Link>
              </div>
            </div>
          </div>
          </div>
        
        {/* Newsletter  */}
        <div className="container mt-5">
          <div className="row my-5">
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2>Newsletter</h2>
              <p>
                'The Inquisitor' is a monthly newsletter published by our
                in-house team of amazing writers, graphic designers and
                researchers at the PICT MUN Club. We believe in unbiased and
                accurate reporting on crucial issues and important happenings
                around the world, our teams of writers and researchers work
                tirelessly, with meticulous care, to report factually accurate
                data and our graphic designers help in presenting the data in an
                interesting and informative method. We believe people can make
                an informed decision when they have the facts and truth about
                different important issues thus upholding democratic values. We
                believe that journalism plays an irreplaceable, important and
                powerful role in protecting values like liberty, equality and
                fraternity in the global world order. The team has also
                conducted two successful editions of the ‘Write For Us’ contest
                wherein we accept articles, photographs and illustrations from
                interested individuals and feature the winning entries in our
                newsletter.
              </p>
            </div>
            <div className="col-md-6 text-center"><img src={newsletterimg}/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
