import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from './components/imports';
import { Home, Cart } from './pages/imports';

function App() {
   return (
      <BrowserRouter>
         <div className="wrapper">
            <Header />
            <div className="content">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
