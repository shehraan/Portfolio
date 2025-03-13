import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Designer",
          "Full Stack Developer",
          "Creator"
        ],
        autoStart: true,
        loop: true,
        delay: 30,         // <-- Smaller value means faster typing speed
        deleteSpeed: 20,   // <-- Optional: Faster deleting speed
      }}
    />
  );
}

export default Type;
