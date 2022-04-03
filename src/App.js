import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setPizzas } from "./redux/actions/pizzasAC";

import { Header } from './components/imports';
import { Home, Cart } from './pages/imports';

function App() {
   const dispatch = useDispatch();

   React.useEffect(() => {
      axios.get('http://localhost:3001/db.json').then(({ data }) => {
         dispatch(setPizzas(data.pizzas));
      });
   }, []);

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
