import React from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  const onClickButton = () => alert();
  // const contentLadyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      {/* <ColorfulMessage color="blue" message="Hello" /> */}
      <ColorfulMessage color="blue">Hello</ColorfulMessage>
      {/* jsの変数で指定 */}
      {/* <p style={contentLadyStyle}>げんきです!</p> */}
      <ColorfulMessage color="pink">元気です！ </ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
