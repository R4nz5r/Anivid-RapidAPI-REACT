import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppContext } from "./context/contextApi";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

const App = () => {
  return ( 
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header></Header>
          <Routes>
            <Route exect path="/" element={<Feed/>}/>
            <Route path="/searchResult/:searchQiery" element={<SearchResult/>}/>
            <Route path="/video/:id" element={<VideoDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
