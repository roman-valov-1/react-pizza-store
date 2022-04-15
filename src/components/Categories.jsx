import React from 'react';

function Categories({ ActiveCategory, items, onSelectCategory }) {

   return (
      <div className="categories">
         <ul>
            <li className={ActiveCategory === null ? 'active' : ''}
               onClick={() => onSelectCategory(null)}>Все</li>
            {items && items.map( (item, index) => (
               <li className={ActiveCategory === index ? 'active' : ''}
               onClick={() => onSelectCategory(index)} 
               key={`${item}_${index}`} >{item}</li> 
            ))}
         </ul>
      </div>
   )
}

export default Categories;
