import Aos from "aos";
import React, { useEffect } from "react";
import Ahmed from "./Team/Ahmed.jpeg";
import Malhaar from "./Team/Malhaar.png";
import Sufiya from "./Team/Sufiya.jpeg";
import Yash from "./Team/Yash.png";
import Karthik from "./Team/Karthik.png";
import Saima from "./Team/Saima.png";
import Zeel from "./Team/Zeel.png";
import Abhishek from "./Team/Abhishek.png";
import Anuja from "./Team/Anuja.png";
import Soham from "./Team/Soham.png";
import { SRLWrapper } from "simple-react-lightbox";

const Team = () => {
  return (
    <>
      <div className="heading-bg">
        <div className="heading mb-5">Team</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <div class="card mt-5  ml-auto mr-auto" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={Ahmed}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Ahmed Siddiqui</h5>
                <h5 class="card-title">Secretary General</h5>

                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-2">
                    <i class="fab fa-instagram"></i>
                  </div>
                  {/* <div className="col-2">
                    <i class="fa-brands fa-facebook-square"></i>
                  </div> */}
                  <div className="col-2">
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                  <div className="col-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div class="card mt-5  ml-auto mr-auto" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={Malhaar}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Malhaar Karandikar</h5>
                <h5 class="card-title">Director General &amp; USG Operations</h5>

                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-2">
                    <i class="fab fa-instagram"></i>
                  </div>
                  {/* <div className="col-2">
                    <i class="fa-brands fa-facebook-square"></i>
                  </div> */}
                  <div className="col-2">
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                  <div className="col-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row ">
          <div className="col-md-6 text-center">
            <div class="card mt-5  ml-auto mr-auto" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={Sufiya}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Sufiya Sayyed</h5>
                <h5 class="card-title">Charge d'Affaires &amp; USG Content and Research</h5>

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
          <div className="col-md-6 text-center">
            <div class="card mt-5  ml-auto mr-auto" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={Yash}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Yash Kale</h5>
                <h5 class="card-title">Chief Strategy Officer &amp; USG Marketing</h5>

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
        </div>

        {/* Row 3 */}

        <div className="row ">
          <div className="col-md-4 text-center">
            <div class="card mt-5  ml-auto mr-auto" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={Karthik}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Karthik Panicker</h5>
                <h5 class="card-title">USG Content and Research</h5>

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
          <div className="col-md-4 text-center">
            <div class="card mt-5  ml-auto mr-auto" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={Saima}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Saima Ansari</h5>
                <h5 class="card-title">USG Design &amp; Technical</h5>

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
          <div className="col-md-4 text-center">
            <div class="card mt-5  ml-auto mr-auto" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={Zeel}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Zeel Patel</h5>
                <h5 class="card-title">USG External Affairs &amp; Publicity</h5>

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
        </div>

        {/* Row 4 */}
        <div className="row mb-5">
          <div className="col-md-4 text-center">
            <div class="card mt-5  ml-auto mr-auto" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={Abhishek}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Abhishek Bora</h5>
                <h5 class="card-title">USG Publicity &amp; Marketing</h5>

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
          <div className="col-md-4 text-center">
            <div class="card mt-5   ml-auto mr-auto" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={Anuja}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Anuja Patil</h5>
                <h5 class="card-title">USG Technical &amp; Delegate Affairs</h5>

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
          <div className="col-md-4 text-center">
            <div class="card mt-5  ml-auto mr-auto" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={Soham}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Soham Naik</h5>
                <h5 class="card-title">USG Delegate Affairs &amp; Operations</h5>

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
        </div>
      </div>
    </>
  );
};

export default Team;
