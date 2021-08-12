import React from "react";
import ColofulMessage from "./components/ColofulMessage";

const App = () => {
  const onClickButton = () => alert();
  const contStyle = {
    color: "blue",
    fontSize: "50px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>hello world</h1>
      <p style={contStyle}>name need roop append error comisito staition...</p>

      <ColofulMessage
        color="green"
        message="People always do crazy things when they’re in love."
      />

      <button style={{ color: "red" }} onClick={onClickButton}>
        Click
      </button>
    </>
  );
};
export default App;
