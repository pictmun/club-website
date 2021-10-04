import React from "react";
const LeftCard = (props) => {
  return (
    <>
      {" "}
      <div className="row mt-3" data-aos="fade-right" data-aos-duration="1000">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4 text-center mt-auto mb-auto">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C511BAQF7SVvjs8NGBw/company-background_10000/0/1568466411890?e=2159024400&v=beta&t=3P2ElpM2YsmWBqXTUCaUiBoorUNnWPI5fg5FVKab7Yk"
                  className="card-img"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>{" "}
    </>
  );
};

export default LeftCard;
