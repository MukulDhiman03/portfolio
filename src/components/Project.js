import React from "react";
import ProjectCard from "../components/cards/ProjectCard";

const Project = () => {
  const projectList = [
    {
      id: 1,
      project: "Blockchain Based Smart City Application",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "https://github.com/MukulDhiman03/smartcity",
    },
    {
      id: 2,
      project: "Voice Based Email Service For Diabled Peoples",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "https://github.com/MukulDhiman03/Voice-Based-Email-Service",
    },
    {
      id: 3,
      project: "Ecommerce Website for Artisans",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "https://github.com/MukulDhiman03/E-artisans",
    },
    {
      id: 4,
      project: "Online Voting System",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "https://github.com/MukulDhiman03/EvotingSystem",
    },
    {
      id: 5,
      project: "Movie Review System",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "https://github.com/MukulDhiman03/Movie-Reviewer",
    },
    {
      id: 6,
      project: "News app",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "https://github.com/MukulDhiman03/news_app",
    },
  ];

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h3>
            Here are some projects, articles, documents, and whatever else I am
            proud of.
          </h3>
        </div>
      </div>
      <div className="row  d-flex justify-content-center mt-3">
        {projectList.map((val) => {
          return (
            <>
              <div className="col-4 mt-3" key={val.id}>
                <ProjectCard project={val} />
              </div>
            </>
          );
        })}
      </div>
      {/* <h1>
        See my GitHub for actual details on the following projects. This is also
        most likely not up to date like most personal websites.
      </h1> */}
    </div>
  );
};

export default Project;
