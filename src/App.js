import "./App.css";
import { Fragment } from "react";
import SideBar from "./components/SideBar/SideBar";
import ButtonsPage from "./components/ButtonPage/ButtonPage";

function App() {
  return (
    <div className="app">
      <SideBar />
      <ButtonsPage />
    </div>
  );
}

export default App;
