import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import Label from "./components/Label/Label";
import RadioButton from "./components/RadioButton/RadioButton";
import Dropdown from "./components/Dropdown/Dropdown";
import Text from "./components/Text/Text";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Assignment 12</h1>
        <Button label="Click" />
        <Label text="this is a Label" />
        <RadioButton />
        <Dropdown disabled={false} />
        <Text disabled={true}>This is an h1 tag</Text>
      </header>
    </div>
  );
}

export default App;
