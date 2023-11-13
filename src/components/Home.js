import React, { useState, useEffect } from "react";

const Home = () => {
  const [techValue, setTechValue] = useState("");
  const techList = ["React.Js", "Node.Js", "Blockchain"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateTechValue = () => {
      setIndex((prevIndex) => (prevIndex + 1) % techList.length);
      setTechValue(techList[index]);
    };

    const intervalId = setTimeout(updateTechValue, 1000);

    return () => clearTimeout(intervalId);
  }, [index, techList]);

  return (
    <div className="conatiner" id="home_container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-3 vertical-line">
          <div></div>
        </div>
        <div className="col-md-5 p-3">
          <h1 className="mt-4">
            Hi , I'm <span>Mukul</span>
          </h1>
          <h4 className="mt-2">
            I am a Software Developer, In Love With Tech.
          </h4>
          <h4 className="mt-2">Delas With Frontend & Backend Development.</h4>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-md-12">
          <h1>
            Technology I Work On ,<span> {techList[index]}</span>
          </h1>
          <small>
            Yes ,I'm also Passionate about <span>HACKING</span> and exploring
            the world of
            <span> CYBERSECURITY.</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Home;
