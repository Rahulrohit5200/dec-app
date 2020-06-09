import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import expensesReducer from "../reducer/expences";
import filtersReducer from "../reducer/filter";
import thunk from "redux-thunk";
const x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ()=>{
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
        }),
          x(applyMiddleware(thunk))
        );
      return store;
}
