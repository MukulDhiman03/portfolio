import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
const Contact = () => {
  return (
    <div className="container" id="contact_container">
      <div className="row mt-5 p-5 text-center">
        <div className="col-md-12">
          <h1>
            Firstly, Buy Me A Coffee <FreeBreakfastIcon /> , HERE
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
        <h2>Interested?</h2>
      </div>
      <div className="row " id="contact_card">
        <div className="col-md-12 text-center">
          <h1>Get In touch!</h1>
        </div>
        <div className="col-md-12">
          <h1>
            Write a mail to <MailIcon />
          </h1>
        </div>
        <div className="col-md-12">
          <h1>
            Connect with me on <LinkedInIcon />
          </h1>
        </div>
        <div className="col-md-12">
          <h1>
            Give me a star on <GitHubIcon />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
