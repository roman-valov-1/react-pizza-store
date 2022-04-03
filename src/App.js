import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setPizzas } from "./redux/actions/pizzasAC";

import { Header } from './components/imports';
import { Home, Cart } from './pages/imports';

// function App() {

//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       console.log(data.pizzas);
//     });
//   }, []);

//   return (
//     <BrowserRouter>
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home items={[]}/>} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

class App extends React.Component {
   componentDidMount() {
      axios.get('http://localhost:3000/db.json').then(({ data }) => {
         this.props.setPizzas(data.pizzas);
      });
   }

   render() {
      return (
         <BrowserRouter>
            <div className="wrapper">
               <Header />
               <div className="content">
                  <Routes>
                     <Route path="/" element={<Home items={this.props.items} />} />
                     <Route path="/cart" element={<Cart />} />
                  </Routes>
               </div>
            </div>
         </BrowserRouter>
      )
   }
}


const mapStateToProps = (state) => {
   console.log(state);
   return {
      items: state.pizzasReducer.items,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      setPizzas: (items) => dispatch(setPizzas(items))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
