//This component will render a circle with an image inside it
import React from "react";

const Circle = ({ imgUrl }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "#fff8eb",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img src={imgUrl} alt="icon" style={{ width: "60%", height: "60%" }} />
    </div>
  );
};

export default Circle;
