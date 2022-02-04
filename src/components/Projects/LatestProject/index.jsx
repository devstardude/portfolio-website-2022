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
            <ModalComponent>
              <div className=" LatestProject-Button">KNOW MORE</div>
            </ModalComponent>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LatestProject;
