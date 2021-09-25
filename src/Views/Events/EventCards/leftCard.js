import React from "react";
const LeftCard = (props) => {
  return (
    <>
      {" "}
      <div className="row mt-3">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="..." className="card-img" alt="..." />
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
