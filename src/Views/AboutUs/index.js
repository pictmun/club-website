import Aos from "aos";
import React, { useEffect } from "react";
import AboutCard from "./aboutCard";

const AboutUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="about-us">
        <div className="heading mb-5">About Us</div>

        <div className="container">
          {" "}
          <br />
          <AboutCard
            title="PICT MUN"
            details="Established in the year 2016, the PICT-MUN Club focuses on organizing conferences for the personality development of the students of the college and the region. The Club has successfully organized four MUN Conferences for college students and conducts group discussions, extempore and debates regularly. The Club also organizes training workshops conducted by experienced and decorated MUNers for MUN enthusiasts from in and around the city."
          />
          <br />
          <AboutCard
            title="MUN"
            details="The Model United Nations, Model UN or MUN is a reenactment of the United Nations that was propelled from the 'Model League Of Nations'. The members get the chance to encounter the difficulties of discretion by assuming the role of the UN representative for an allocated nation or an individual from other global basic leadership bodies. It helps them to build up their capacities to work with other people who are similarly roused and energetic about discovering answers for Global Concerns. With the expanding closeness of nations over the World, the MUN has turned into a fairly mainstream practice all over."
          />
          <br />
          <AboutCard
            title="UN"
            details="The United Nations is an international organization founded in 1945.  It is currently made up of 193 Member States.  The mission and work of the United Nations are guided by the purposes and principles contained in its founding Charter. The UN also provides a forum for its members to express their views in the General Assembly, the Security Council, the Economic and Social Council, and other bodies and committees. By enabling dialogue between its members, and by hosting negotiations, the Organization has become a mechanism for governments to find areas of agreement and solve problems together."
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
