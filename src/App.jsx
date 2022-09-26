import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

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
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>（^人^）</p>}
    </>
  );
};

export default App;
