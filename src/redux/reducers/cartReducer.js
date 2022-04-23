const initialState = {
   items: {},
   totalPrice: 0,
   totalCount: 0
};

const getTotalPrice = arr => arr.reduce( (sum, obj) => obj.price + sum, 0);

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      // сделать константы для actions
      case 'ADD_PIZZA_CART':
         const currentPizzaItems = !state.items[action.payload.id]
         ? [action.payload]
         : [...state.items[action.payload.id].items, action.payload];

         const newItems = {
            ...state.items,
            [action.payload.id]: {
               items: currentPizzaItems,
               totalPrice: getTotalPrice(currentPizzaItems),
            }
         };

         const items =Object.values(newItems).map( obj => obj.items);
         const allPizzas = [].concat.apply([], Object.values(items));
         const totalPrice = getTotalPrice(allPizzas);

         return {
            ...state,
            items: newItems,
            totalCount: allPizzas.length,
            totalPrice
         };
      case 'CLEAR_CART': 
         return {
            items: {},
            totalPrice: 0,
            totalCount: 0,
         }
      default:
         return state;
   }
};

export default cartReducer;