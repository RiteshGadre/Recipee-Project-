import React from "react";
import Header from "./components/Header.jsx"
import MainRouter from "./routes/MainRouter.jsx"
import Home from "./pages/Home.jsx";

const App = () => {
  return <div className="min-h-screen w-full bg-gray-800 text-white">
    <Header />
    <MainRouter />
  </div>;
};

export default App;
