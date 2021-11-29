import React, { useEffect } from "react";
import Aos from "aos";

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
          <div className="col-md-6"></div>
          <div className="col-md-6">
            {/* Google Form  */}

            {/* <iframe
              className="contact-form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeFYtS19k90-8w7XB4jJRzJ7M_fi6k8uTwdkMUFW7H1OBnnEQ/viewform?embedded=true"
            >
              Loading…
            </iframe> */}

            <form className="contact-form px-5">
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
