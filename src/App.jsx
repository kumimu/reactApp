import React from 'react';
import ColorfulMessage from './components/ColorfulMessage.jsx';

const App = () => {
  const onClickButton = () => alert();
  const contentLadyStyle = {
    color: 'pink',
    fontSize: '18px'
  };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage />
      <p style={contentLadyStyle}>げんきです!</p>  {/* jsの変数で指定 */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;