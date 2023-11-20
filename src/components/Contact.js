import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div className="container" id="contact_container">
      <div className="row mt-5 p-5 text-center">
        <div className="col-md-12">
          <h1>
            Firstly, Buy Me A Coffee
            <FreeBreakfastIcon sx={{ fontSize: "5vh" }} /> , <span>HERE</span>
          </h1>
        </div>
        <div className="col-md-12 mt-2">
          <p>
            I'm actively seeking new projects and opportunities to apply my
            skills in web development and backend development. My focus on
            security ensures that your website or application is protected
            against cyber threats.
          </p>
        </div>
      </div>
      <div className="col-md-12 text-center">
        <h2>!nterested?</h2>
      </div>
      <div className="row text-center" id="contact_card">
        <div className="col-md-12 text-center">
          <h2>Get In touch!</h2>
        </div>
        <div className="col-md-12">
          <h1>
            Write a mail to
            <span>
              <Button sx={{ color: "white" }}>
                <a
                  href="dhimanmukul307@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MailIcon sx={{ fontSize: "5vh" }} />
                </a>
              </Button>
            </span>
          </h1>
        </div>
        <div className="col-md-12">
          <h1>
            Connect with me on
            <span>
              <Button sx={{ color: "white" }}>
                {" "}
                <a
                  href="https://www.linkedin.com/in/mukuldhiman03/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon sx={{ fontSize: "5vh" }} />
                </a>
              </Button>
            </span>
          </h1>
        </div>
        <div className="col-md-12">
          <h1>
            Give me a star on{" "}
            <span>
              <Button sx={{ color: "white" }}>
                {" "}
                <a
                  href="https://github.com/MukulDhiman03"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon sx={{ fontSize: "5vh" }} />
                </a>
              </Button>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
