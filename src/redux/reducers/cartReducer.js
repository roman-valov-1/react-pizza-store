const initialState = {
   items: {},
   totalPrice: 0,
   totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      // сделать константы для actions
      case 'ADD_PIZZA_CART': {
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

         const totalCount = Object.keys(newItems).reduce(
            (sum, key) => newItems[key].items.length + sum, 0
         );

         const totalPrice = Object.keys(newItems).reduce(
            (sum, key) => newItems[key].totalPrice + sum, 0
         );

         return {
            ...state,
            items: newItems,
            totalCount,
            totalPrice,
         };
      };

      case 'REMOVE_CART_ITEM': {
         const newItems = {
            ...state.items,
         };
         const currentTotalPrice = newItems[action.payload].totalPrice;
         const currentTotalCount = newItems[action.payload].items.length;

         delete newItems[action.payload];

         return {
            ...state,
            items: newItems,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalCount,
         };
      };

      case 'PLUS_CART_ITEM': {
         const newItems = [
            ...state.items[action.payload].items,
            state.items[action.payload].items[0]
         ];
         const pizzaPrice = state.items[action.payload].items[0].price;

         return {
            ...state,
            items: {
               ...state.items,
               [action.payload]: {
                  items: newItems,
                  totalPrice: getTotalPrice(newItems),
               },
            },
            totalPrice: state.totalPrice + pizzaPrice,
            totalCount: state.totalCount + 1,
         };
      };

      case 'MINUS_CART_ITEM': {
         const oldItems = state.items[action.payload].items;

         if (oldItems.length > 1) {
            const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const pizzaPrice = state.items[action.payload].items[0].price;

            return {
               ...state,
               items: {
                  ...state.items,
                  [action.payload]: {
                     items: newItems,
                     totalPrice: getTotalPrice(newItems),
                  },
               },
               totalPrice: state.totalPrice - pizzaPrice,
               totalCount: state.totalCount - 1,
            };
         } else {
            return state;
         };
      };

      case 'CLEAR_CART':
         return {
            items: {},
            totalPrice: 0,
            totalCount: 0,
         };
      default:
         return state;
   }
};

export default cartReducer;