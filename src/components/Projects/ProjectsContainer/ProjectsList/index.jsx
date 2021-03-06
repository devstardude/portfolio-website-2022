import React from "react";
import drum from "../../../assets/drum.png";
import burger from "../../../assets/burger.png";
import mail from "../../../assets/mail.png";
import blog from "../../../assets/blog.png";
import shop from "../../../assets/shop.png";
import places from "../../../assets/places.png";

const projects = [
  {
    name: "Place visitΓ© (Old Version)",
    description:
      "A Featured MERN Project to Share Places you Visited around the world with Geocoding (You enter the address and coordinates will be automatically generated), and Map Rendering by Google.",
    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "REST API",
      "React-hooks",
      "Axios",
      "Multer",
      "Material-UI",
      "Particles.js",
      "Image-upload",
    ],
    image: `${places}`,
    projectLink: "https://myplace009.web.app/",
    githubLink:
      "https://github.com/devstardude/Places-visite-firebase-image-upload",
    doubleLink: false,
    youtubeLink: "https://www.youtube.com/embed/7JoNcnxMl2c",
    features: (
      <div>
        <p>
          π€ Share Visited Places <br />
          π€ Geocoding(Address user enter will be converted into Langitude and
          Longitude coordinates) <br />
          π€ Map Rendering by Google <br />
          π€ User can edit and delete place
          <br />
          π€ Custom Authentication and Validation
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          β Frontend <br />
          &emsp; β’ React.js with Hooks
          <br />
          &emsp; β’ Html, Css, Javascript
          <br />
          &emsp; β’ Material UI
          <br />
          β Backend <br />
          &emsp; β’ Node.js with Express.js (RESTful API)
          <br />
          β Database
          <br />
          &emsp; β’ MongoDB (Mongoose) <br />
          β Deployment
          <br />
          &emsp; β’ Frontend on Firebase and Backend on Heroku <br />
        </p>
      </div>
    ),
  },
  {
    name: "Burger Blast",
    description:
      "A React, Redux, and Firebase Project to make delicious burger interactively and submit your order details to the server.",
    tech: [
      "React",
      "Redux",
      "React-lifecycles",
      "Firebase",
      "Class-based",
      "Redux-thunk",
      "Material-UI",
    ],
    image: `${burger}`,
    projectLink: "https://burger-blast.web.app/",
    githubLink: "https://github.com/devstardude/Burger-Blast",
    doubleLink: false,
    youtubeLink: "https://www.youtube.com/embed/LrZ9xbln95Y",
    features: (
      <div>
        <p>
          π€ Build tasty looking burger in realtime <br />
          π€ Add or Remove ingredient with a click of button <br />
          π€ Price calculated automatically <br />
          π€ Submit your order to online server
          <br />
          π€ See your previous orders
          <br />
          π€ Firebase authentication and custom Validation
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          β Frontend <br />
          &emsp; β’ React.js - Class based with Lifecycles
          <br />
          &emsp; β’ Redux
          <br />
          &emsp; β’ Html, Css, Javascript
          <br />
          &emsp; β’ Material UI
          <br />
          β Database
          <br />
          &emsp; β’ Firebase Realtime Database
          <br />
          β Deployment
          <br />
          &emsp; β’ Frontend on Firebase <br />
        </p>
      </div>
    ),
  },
  {
    name: "Shop Sharer",
    description:
      "An app to make shopping lists from multiple online stores, and share the list with your friends to manage the list from both sides.",
    tech: [
      "React",
      "Firebase",
      "Firestore",
      "React-hooks",
      "Google-Sign-in",
      "Image-upload",
    ],
    image: `${shop}`,
    projectLink: "https://shopsharer009.web.app/",
    githubLink: "https://github.com/devstardude/Shop-Sharer",
    doubleLink: false,
    youtubeLink: "https://www.youtube.com/embed/A0uQHsp4ViU",
    features: (
      <div>
        <p>
          π€ Make Shopping list from any Online Stores <br />
          π€ Share that list with other Peoples <br />
          π€ Automatic screenshot of product added as item&apos;s image <br />
          π€ Mutually manage list by shared people
          <br />
          π€ Google Authentication and Validation
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          β Frontend <br />
          &emsp; β’ React.js with Hooks
          <br />
          &emsp; β’ Html, Css, Javascript
          <br />
          β Database
          <br />
          &emsp; β’ Cloud Firestore <br />
          β Deployment
          <br />
          &emsp; β’ Frontend on Firebase
          <br />
        </p>
      </div>
    ),
  },
  {
    name: "Classy Blog",
    description:
      "A Featured Blog Post Project to Create, Edit, Delete posts. Also Markdown is also integrated to write a beautiful blog with pictures, links, and gif support. (Recently I made a MERN Stack version of this app.) ",
    tech: [
      "(MERN-Stack-Update)",
      "Node",
      "Express",
      "Ejs",
      "MongoDB",
      "Bootstrap",
      "Image-upload",
      "Express-session",
      "Passport",
    ],
    image: `${blog}`,
    projectLink: "https://classyblog-react.web.app/",
    githubLink: "https://github.com/devstardude/Classy-Blog-MERN",
    projectLinkTwo: "https://classyblog.herokuapp.com/",
    githubLinkTwo: "https://github.com/devstardude/classy_blog",
    doubleLink: true,
    youtubeLink: "https://www.youtube.com/embed/l7fnlKt_MwY",
    features: (
      <div>
        <p>
          π€ Add Markdown enabled blogposts from your profile <br />
          π€ Dedicated User management system
          <br />
          π€ Beautiful UI <br />
          π€ Remove and Edit feature also available
          <br />
          π€ Available in both MERN and Node-Express only
          <br />
          π€ Custom authentication and Validation
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          <span className="text-success">β MERN Version</span>
          <br />
          β Frontend <br />
          &emsp; β’ React.js - with Hooks
          <br />
          &emsp; β’ Html, Css, Javascript
          <br />
          &emsp; β’ Material UI
          <br />
          β Backend <br />
          &emsp; β’ Node.js with Express.js (RESTful API)
          <br />
          β Database
          <br />
          &emsp; β’ MongoDB with Mongoose
          <br />
          β Deployment
          <br />
          &emsp; β’ Frontend on Firebase and Backend on Heroku
          <br />
          <br />
          <span className="text-success">β Node-Express Version</span>
          <br />
          β Frontend <br />
          &emsp; β’ Ejs Layout with Html, Css
          <br />
          &emsp; β’ Bootstrap
          <br />
          β Backend <br />
          &emsp; β’ Node.js with Express.js
          <br />
          β Database
          <br />
          &emsp; β’ MongoDB with Mongoose
          <br />
          β Deployment
          <br />
          &emsp; β’ On Heroku
          <br />
        </p>
      </div>
    ),
  },
  {
    name: "Mailchimp Newsletter",
    description:
      "A simple form to take the user's details and send them to Mailchimp which is a marketing automation platform and an email marketing service, so that you can send emails to your audience.",
    tech: ["Node", "Ejs", "Express", "Bootstrap", "Mailchimp", "Mailchimp-API"],
    image: `${mail}`,
    projectLink: "https://mailchimpnewsletterproject.herokuapp.com/",
    githubLink: "https://github.com/devstardude/newsletter",
    doubleLink: false,
    youtubeLink: "https://www.youtube.com/embed/TIwXFr1zYrE",
    features: (
      <div>
        <p>
          π€ Send Userdata to Mailchimp Account <br />
          π€ Send Newsletter or emails from mailchimp thereafter <br />
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          &emsp; β’ Node.js with Express
          <br />
          &emsp; β’ Ejs template
          <br />
          &emsp; β’ Html, CSS, JS with Bootstrap
          <br />
        </p>
      </div>
    ),
  },
  {
    name: "Drum-Beatz / Click-Blip",
    description:
      "A Starter Html, Css and Javascript focused projects, First one can make Drum beats and another one is Simon game.",
    tech: ["Html", "Css", "Javascript", "Jquery"],
    image: `${drum}`,
    projectLink: "https://devstardude.github.io/Drum-Beatz/",
    githubLink: "https://github.com/devstardude/Drum-Beatz",
    doubleLink: false,
    youtubeLink: "https://www.youtube.com/embed/I-RC-nIkPDo",
    features: (
      <div>
        <p>
          π€ Play Drum beats by clicking button
          <br />
          π€ Simon game - click the pattern shown on screen to play <br />
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          &emsp; β’ Html, Css, Javascript
          <br />
          &emsp; β’ Jquery
          <br />
        </p>
      </div>
    ),
  },
];

export default projects;
