import React from "react";
import Header from "./components/Header.jsx"
import MainRouter from "./routes/MainRouter.jsx"
import Home from "./components/Home.jsx";

const App = () => {
  return <div className="h-screen w-full bg-gray-800 text-white">
    <Header />
    <MainRouter />
  </div>;
};

export default App;
