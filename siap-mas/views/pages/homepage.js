import React from "react";
import back from "../../assets/images/login_fix.png";

function Back() {
  return (
      <div
        style={{
          backgroundImage: 'url('+back+')',
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <h1>This is Text on top</h1>
      </div>
  );
}

export default Back;