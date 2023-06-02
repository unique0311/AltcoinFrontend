import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

import Navbar from "./Landing/Navbar";
import Footer from "./Landing/Footer";
import Main from "./Landing/Main";
import ContactUs from "./components/ContactUs";
import Profile from "./components/Profile";
import TokenExplorer from './components/tokenExplorer';
import PresaleExplorer from './components/PresaleExplorer';
import TokenDetail from "./components/TokenDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Router> */}
        <main>
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/contactus' element={<ContactUs />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/presaleExplorer' element={<PresaleExplorer />} />
            <Route exact path='/presaleExplorer/tokenID' element={<TokenDetail />} />
            <Route exact path='/tokenExplorer' element={<TokenExplorer />} />
          </Routes>
        </main>
      {/* </Router> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
