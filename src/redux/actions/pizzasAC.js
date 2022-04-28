import { pizzasAPI } from "../../API/api";

export const setLoaded = (payload) => ({
   type: 'SET_LOADED',
   payload
});
   
export const setPizzas = (items) => ({
   type: 'SET_PIZZAS',
   payload: items,
});

export const fetchPizzas = (sortBy, category) => async (dispatch) => {
   dispatch(setLoaded(false));
   let response = await pizzasAPI.getPizzas(sortBy, category);
   dispatch(setPizzas(response));
};