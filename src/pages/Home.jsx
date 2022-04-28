import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { setCategory, setSortBy } from '../redux/actions/filtersAC';
import { addPizzaToCart } from "../redux/actions/cartAC";
import {
   Categories,
   SortPopup,
   PizzaBlock,
   PizzaLoadingBlock
} from '../components/imports';

const categoryNames = [
   'Мясные',
   'Вегетарианская',
   'Гриль',
   'Острые',
   'Микс'
];

const sortItems = [
   { name: 'популярности', type: 'popular', order: 'desc' },
   { name: 'цене', type: 'price', order: 'desc' },
   { name: 'алфавиту', type: 'name', order: 'asc' }
];

function Home({ category, sortBy}) {
   const dispatch = useDispatch();

   const { items, isLoaded } = useSelector(({ pizzasReducer }) => {
      return {
         items: pizzasReducer.items,
         isLoaded: pizzasReducer.isLoaded,
      };
   });

   const cartItems = useSelector(({ cartReducer }) => cartReducer.items);

   

   const onSelectCategory = (index) => {
      dispatch(setCategory(index));
   };

   const onSelectSortType = (type) => {
      dispatch(setSortBy(type));
   };

   const handleAddPizza = (obj) => {
      dispatch(addPizzaToCart(obj));
   };

   return (
      <div className="container">
         <div className="content__top">
            <Categories
               onSelectCategory={onSelectCategory}
               items={categoryNames}
               ActiveCategory={category}
            />
            <SortPopup
               items={sortItems}
               activeSortType={sortBy.type}
               onSelectSortType={onSelectSortType}
            />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {
               isLoaded
                  ? items.map((obj) => (
                     <PizzaBlock
                        key={obj.id}
                        {...obj}
                        onCLickAddPizza={handleAddPizza}
                        addedCount={cartItems[obj.id]?.items?.length} />
                  ))
                  : Array(12)
                     .fill(0)
                     .map((item, index) => <PizzaLoadingBlock key={index} />)
            }
         </div>
      </div>
   )
}

export default Home;