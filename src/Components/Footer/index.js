import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer container-fluid py-5">
        <div className="row">
          <div className="col-md-4">
            <img src="/assets/Logo.png" />
          </div>
          <div className="col-md-4 text-center">
            <div className="footer-title">Links</div>
            <div className="row">
              <div className="col-6">
                <div className="mb-2">
                  <Link to="/">Home</Link>
                </div>
                <div className="mb-2">
                  <Link to="/">Events</Link>
                </div>

                <Link to="/">About Us</Link>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <Link to="/">Gallery</Link>
                </div>
                <div className="mb-2">
                  <Link to="/">Newsletter</Link>
                </div>
                <Link to="/">Contact US</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="footer-title">Connect with us</div>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-2">
                <i class="fab fa-instagram"></i>
              </div>
              <div className="col-2">
                <i class="fa-brands fa-facebook-square"></i>
              </div>
              <div className="col-2">
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 base text-center">Copyright</div>
    </>
  );
};

export default Footer;
