import React from "react";
import ModalComponent from "../../shared/ModalComponent";
import Title from "../../shared/Title";

import "./style.css";

const LatestProject = (props) => {
  return (
    <React.Fragment>
      <Title title="Latest Project" />
      <div className="LatestProject-MainWrapper">
        <div className="LatestProject-Youtube video-container">
          <iframe
            title="i ARUN SHEKHAR am a Web Developer"
            className="youtube-container"
            src="https://www.youtube.com/embed/sncySXQQKFQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="LatestProject-Information">
          <h1>Visite - A place tracker</h1>
          <p>
            Want to Track the places you visit with a Great UI and User
            Experience? Visité - A Place Tracker is the Solution.
            <br /> This is a Feature-Rich app in which you can add and remove
            places you visited, wishlist them, share blogposts, like other
            user's profile and even send them texts... It included many more
            features like Automatic place search and Map rendering which enhance
            the user experience.
          </p>
          <div className="flex pt-6">
            <ModalComponent
              name="Visite - A place tracker"
              youtubeLink="https://www.youtube.com/embed/ErOUmq8xVZg"
              features={project.features}
              stack={project.stack}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
            >
              <div className=" LatestProject-Button">KNOW MORE</div>
            </ModalComponent>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const project = {
  features: (
    <div>
      <p>
        🤍 Share Places (Visible to the world)
        <br />
        🤍 Wishlist Places (Only visible to the user) <br />
        🤍 Share Posts in Markdown Format <br />
        🤍 Like other Profiles and Send Messages <br />
        🤍 Automatic search any place around the world
        <br />
        🤍 Render Map of the address <br />
        🤍 Public chatbox that shows real-time messages <br />
        🤍 Admin only protected route that can post global blogposts <br />
      </p>
    </div>
  ),
  stack: (
    <div>
      <p>
        ⚙ Frontend <br />
        &emsp; • React.js with Hooks
        <br />
        &emsp; • Html, Css, Javascript
        <br />
        &emsp; • Material UI
        <br />
        ⚙ Backend <br />
        &emsp; • Node.js with Express.js (RESTful API)
        <br />
        ⚙ Database
        <br />
        &emsp; • MongoDB with Mongoose [For User Data] <br />
        &emsp; • Cloud Firestore (For Global Realtime chatbox and Admin
        Blogposts)
        <br />
        ⚙ Deployment
        <br />
        &emsp; • Frontend on Firebase and Backend on Heroku <br />
      </p>
    </div>
  ),
  projectLink: "https://visite-place-tracker.web.app/",
  githubLink: "https://github.com/devstardude/Visite-place-tracker",
};

export default LatestProject;
