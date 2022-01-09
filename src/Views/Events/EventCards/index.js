import React from "react";
import LeftCard from "./leftCard";
import RightCard from "./rightCard";
import extemporeimg from "../images/Extempore.JPG";
import gdimg from "../images/gd.JPG";
import debateimg from "../images/debate.JPG";
import openmicimg from "../images/openmic.JPG";
import feimg from "../images/fe1.JPG";
import intramunimg from "../images/intramun.png";
import driveimg from "../images/drive_poster.jpeg";

const EventCards = () => {
  return (
    <>
      <div className="container event-cards">
        <LeftCard
          image={extemporeimg}
          title="Extempore"
          details="An event where participants are given topics on-the-spot, 10 minutes prior to their turn. It aims at bringing out the attendee’s thought process and quick-thinking ability in a creative manner. The event is really popular among students as it helps them a great deal in enhancing their public speaking skills."
        />
        <RightCard
          image={gdimg}
          title="Group Discussion"
          details="An Intra college event where the participants are divided in groups of 10 and are allocated a topic and a place for moderated discussion. The event is judged by working professionals and faculty members who help the students gain experience in the art of group discussions prior to them sitting for placements. This activity is conducted exactly in the same manner as the actual placements and a feedback session by the faculty members is also conducted in order to make the participants realise their strengths and weaknesses. "
        />

        <LeftCard
          image={debateimg}
          title="Debate"
          details="An event where the topic for debating is pre-decided; individuals with a similar stance on the topic are grouped together and the two teams with contrasting ideologies face each other. Since the judges and moderators are experienced faculty members from our college, their judgement is considered fair and final. The engrossing topics ensure utmost participation."
        />
        <RightCard
          image={intramunimg}
          title="Intra-MUN"
          details="An event chaired by the experienced senior members of the organising committee, where the aim is to simulate the experience of MUNs for the participants i.e. Rules of Procedure are explained, agendas are set and countries are allocated to each individual for a wholesome experience. This is one of the club’s most attractive events because it helps first timers and novices understand the standard procedures of an MUN, and has been several students’ gateway into the world of MUNs."
        />

        <LeftCard
          image={openmicimg}
          title="Open Mic"
          details="A casual and fun event where the participants can showcase a plethora of talent which include giving speeches, poetry recitation, singing and much more. This is an attractive platform for people who want to want to explore their creative side and take a break from the monotony of college."
        />
        <RightCard
          image={feimg}
          title="FE Induction"
          details="A program where the first year students of the college are brought to speed with the club’s passion for the research and knowledge on social and political events happening across India. The event mainly features lively debates on political topics of contemporary relevance with the aim of sparking enthusiasm among the listeners towards pertinent political issues."
        />
        <LeftCard
          image={driveimg}
          title="Recruitment Drive"
          details="One of the most important processes for the sustenance of any club. Every year around mid-September, a form is circulated to our college students which acts as the preliminary selection round. Subsequently, interviews are taken by the TEs before admitting an individual to the club.Prerequisites being basic knowledge about MUNs and a lot of enthusiasm."
        />
      </div>
    </>
  );
};

export default EventCards;
