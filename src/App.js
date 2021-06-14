import React from 'react';
import "./css/style.css"
import "./css/fonts/fonts.css"
import MainWindow from "./components/MainWindow"
// JSON.stringify(payload.data));
// JSON.parse(message.data);
const App = () => {
  return (
    <div className="app">
      <MainWindow />
    </div>
  );
}

export default App;
