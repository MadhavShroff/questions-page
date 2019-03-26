import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/sidebar.js";
import TextField from "./components/textField.js";
import SubmitButton from "./components/submitButton.js";
class App extends Component {
  render() {
    return (
      <div className="App" style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}>
        {/* <Particles /> */}
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div id="qanda">
            <div className="question" id="qsn">
              <h3>Select a Question...</h3>
            </div>
            <div className="answer" id="ans">
              <TextField />
              <div className="submit-button" id="submit">
                <SubmitButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
