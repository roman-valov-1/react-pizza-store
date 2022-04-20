import { combineReducers } from "redux";

import filtersReducer from "./filtersReducer";
import pizzasReducer from "./pizzasReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
   filtersReducer,
   pizzasReducer,
   cartReducer
});

export default rootReducer;