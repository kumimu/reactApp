// このファイル内で以下の設定を無効にする
/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 関心の分離
  // 第二引数の配列を空にすると、初回のみ通過する
  // numにすると、numの状態変更時のみ通過する
  useEffect(() => {
    console.log("useEffect!");
    if (num > 0) {
      // ０以下はスキップ
      if (num % 3 === 0) {
        // 条件に合致した際、現在のFlagの状態と異なる場合のみ背呈されるように左辺で制御する
        // この左辺の条件を加えないと、レンダリングの回数が多すぎるというエラーとなる
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [num]);

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
