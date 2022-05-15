import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="max-w-xs bg-white flex-1 font-outfit m-6 p-4 rounded-2xl shadow-lg">
      <Header />
      <Main />
    </div>
  );
}

export default App;
