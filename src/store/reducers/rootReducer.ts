import {combineReducers} from 'redux';
import loginReducer from "./loginReducer";
import calculationReducer from "./calculationsReducer";

export default combineReducers({
    login: loginReducer,
    calculations: calculationReducer
})