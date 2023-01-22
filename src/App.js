import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import HelpCenter from "./Screens/HelpCenter/HelpCenter";
import Blogs from "./Screens/Blogs/Blogs";
import MakeVideo from "./Screens/MakeVideo/MakeVideo";
import MakeAudio from "./Screens/MakeAudio/MakeAudio";
import Complete from "./Screens/Complete/Complete";
import Pricing from "./Screens/Pricing/Pricing";
import Social from "./Screens/Social/Social";


const App = () => {
  return (
    <div>
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/helpcenter" element={<HelpCenter />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/MakeVideo" element={<MakeVideo />} />
            <Route path="/MakeAudio" element={<MakeAudio />} />
            <Route path="/Complete" element={<Complete />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Social" element={<Social />} />

            {/* //footer */}
          </Routes>
        </BrowserRouter>
     
    </div>
  );
};

export default App;
