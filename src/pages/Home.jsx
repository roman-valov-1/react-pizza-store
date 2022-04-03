import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { setCategory } from '../redux/actions/filtersAC';

import {
   Categories,
   SortPopup,
   PizzaBlock
} from '../components/imports';

const categoryNames = [
   'Мясные',
   'Вегетарианская',
   'Гриль',
   'Острые',
   'Закрытые'
];

const sortItems = [
   { name: 'популярности', type: 'popular' },
   { name: 'цене', type: 'price' },
   { name: 'алфавиту', type: 'alphabet' }
];


function Home() {
   const dispatch = useDispatch();
   const {items, category} = useSelector(({ pizzasReducer, filtersReducer }) => {
      return{
         items: pizzasReducer.items,
         category: filtersReducer.category
      };
   });

   console.log(category);

   const onSelectCategory = index => {
      dispatch(setCategory(index));
   }

   return (
      <div className="container">
         <div className="content__top">
            <Categories
               onSelectCategory={onSelectCategory}
               items={categoryNames}
            />
            <SortPopup items={sortItems} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {
               items && items.map((obj) => (
                  <PizzaBlock
                     key={obj.id}
                     {...obj} />
               ))
            }
         </div>
      </div>
   )
}

export default Home;