import React from "react";

const ColofulMessage = (props) => {
  console.log(props);

  const contStyle2 = {
    color: props.color,
    fontSize: "50px"
  };

  return <p style={contStyle2}>{props.message}</p>;
};

export default ColofulMessage;
