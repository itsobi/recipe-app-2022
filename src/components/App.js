import React from "react";
import Pages from "../pages/Pages";
import CategoryNav from "./CategoryNav";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <CategoryNav />
        <SearchBar />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
