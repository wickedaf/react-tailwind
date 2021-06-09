import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <lottie-player
        src="https://assets1.lottiefiles.com/packages/lf20_nhuk3l2x.json"
        background="transparent"
        speed="1"
        style={{ width: "600px", height: "600px" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default About;
