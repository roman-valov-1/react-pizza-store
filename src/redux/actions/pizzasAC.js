import axios from "axios";

export const setLoaded = (payload) => ({
   type: 'SET_LOADED',
   payload 
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
   dispatch(setLoaded(false));
   
   axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
      .then(({ data }) => {
      dispatch(setPizzas(data)); 
      //Создать отдельный файл API где будут обрабатываться все запросы к серверу
   });
};

export const setPizzas = (items) => ({
   type: 'SET_PIZZAS',
   payload: items,
});