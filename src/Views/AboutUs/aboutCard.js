import React from "react";

const AboutCard = (props) => {
  return (
    <>
      <div
        class="card text-center my-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="card-header py-4">
          <h3>{props.title}</h3>
        </div>
        <div class="card-body px-5">
          <p class="card-text">{props.details}</p>
        </div>
      </div>{" "}
    </>
  );
};

export default AboutCard;
