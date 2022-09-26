import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入でスッキリと
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  // return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
