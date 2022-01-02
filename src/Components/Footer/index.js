import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer container-fluid py-5">
        <div className="row">
          <div className="col-md-4" style={{textAlign:"center"}}>
            <img className="footer-img" src="/assets/Logo.png" />
          </div>
          <div className="col-md-4 text-center">
            <div className="footer-title">Links</div>
            <div className="row">
              <div className="col-6">
                <div className="mb-2">
                  <Link to="/">Home</Link>
                </div>
                <div className="mb-2">
                  <Link to="/events">Events</Link>
                </div>

                <Link to="/aboutUs">About Us</Link>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <Link to="/gallery">Gallery</Link>
                </div>
                <div className="mb-2">
                  <Link to="/">Newsletter</Link>
                </div>
                <Link to="/contactUs">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="footer-title">Connect with Us!</div>
            <div className="row" id="footer-icons">
              <div className="col-3"></div>
              <div className="col-1">
                <a href="https://www.instagram.com/pictmun/" target="_blank">
                <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div className="col-1">
                <a href="https://www.facebook.com/pictmun" target="_blank">
                <i class="fa-brands fa-facebook-square"></i>
                </a>
              </div>
              <div className="col-1">
                <a href="https://www.linkedin.com/company/pict-mun-club/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="col-1">
                <a href="mailto:pictmun@gmail.com" target="_blank">
                <i class="fa fa-envelope"></i>
                {/* <i class="fas fa-envelope"></i> */}
                </a>
              </div>
              <div className="col-3"></div>
              {/* <div>
                <a href="mailto:pictmun@gmail.com">
                  <h4 id="footer-email">Email Us!</h4>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 base text-center">Copyright</div>
    </>
  );
};

export default Footer;
