import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { fetchPizzas } from "./redux/actions/pizzasAC";
import { Header } from './components/imports';
import { Home, Cart } from './pages/imports';

function App() {
   const dispatch = useDispatch();

   const { category, sortBy } = useSelector(({ filtersReducer }) => {
      return {
         category: filtersReducer.category,
         sortBy: filtersReducer.sortBy,
      };
   });

   React.useEffect(() => {
      dispatch(fetchPizzas(sortBy, category));
   }, [sortBy, category]);

   return (
      <BrowserRouter>
         <div className="wrapper">
            <Header />
            <div className="content">
               <Routes>
                  <Route path="/" element={<Home category={category} sortBy={sortBy}/>} />
                  <Route path="/cart" element={<Cart />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
