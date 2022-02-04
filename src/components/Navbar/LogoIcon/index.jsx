import React from "react";
import "./style.css";
const LogoIcon = (props) => {
  return (
    <React.Fragment>
      <svg
        className="h-full object-cover invert p-2"
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        viewBox="15 10 70 80"
      >
        <path d="M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z"></path>
      </svg>
    </React.Fragment>
  );
};

export default LogoIcon;
