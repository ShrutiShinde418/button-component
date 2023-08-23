import React from "react";
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import ButtonsPage from "./pages/ButtonPage/ButtonPage";

function App() {
  return (
    <div className="app">
      <SideBar />
      <ButtonsPage />
    </div>
  );
}

export default App;
