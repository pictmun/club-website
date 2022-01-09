import React, { useEffect } from "react";
import Aos from "aos";
import "./style.css";
const ContactUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="heading-bg">
        <div className="heading mb-5">Contact Us</div>
      </div>
      <div className="container">
        <div className=" row">
          <div className="col-md-6">
          <h2>Reach us</h2>
          <iframe className ="form" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254206!2d73.84864491482712!3d18.457542087445756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR'S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1582286940895!5m2!1sen!2sin" allowfullscreen=""></iframe>
          </div>
          <div className="col-md-6">
            <h2>   Connect with us </h2>

            <iframe
              className="form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeFYtS19k90-8w7XB4jJRzJ7M_fi6k8uTwdkMUFW7H1OBnnEQ/viewform?embedded=true"  title="contact form"
            >
              Loading…
            </iframe>

            {/* <form className="contact-form px-5">
              <h3> Connect with Us! </h3>
              <br />
              <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Your Query</label>
                <textarea
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Type here"
                />
              </div>
              <button type="submit" class="btn btn-info mt-3">
                Submit
              </button>
              <br /><br />
            </form> */}
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;