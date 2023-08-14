import "./App.css";
import { Fragment } from "react";
import SideBar from "./components/SideBar/SideBar";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Button />
    </div>
  );
}

export default App;
