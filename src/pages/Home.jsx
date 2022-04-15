import React from 'react';
import { useSelector, useDispatch } from "react-redux";


import { fetchPizzas } from "../redux/actions/pizzasAC";
import { setCategory, setSortBy } from '../redux/actions/filtersAC';

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
   'Закрытые'
];

const sortItems = [
   { name: 'популярности', type: 'popular', order: 'desc' },
   { name: 'цене', type: 'price', order: 'desc' },
   { name: 'алфавиту', type: 'name', order: 'asc' }
];


function Home() {
   

   const dispatch = useDispatch();
   const { items, isLoaded } = useSelector(({ pizzasReducer }) => {
      return {
         items: pizzasReducer.items,
         isLoaded: pizzasReducer.isLoaded,
      };
   });
   const { category, sortBy } = useSelector(({ filtersReducer }) => {
      return {
         category: filtersReducer.category,
         sortBy: filtersReducer.sortBy,
      }
   })

   React.useEffect(() => {
      dispatch(fetchPizzas(sortBy, category));
   }, [sortBy, category]);

   const onSelectCategory = index => {
      dispatch(setCategory(index));
   };

   const onSelectSortType = type => {
      dispatch(setSortBy(type));
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
                        {...obj} />
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