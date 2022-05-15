import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-xs bg-white flex-1 font-outfit m-6 p-4 rounded-2xl shadow-lg">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
