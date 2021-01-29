import { combineReducers } from "redux";
import climaReducer from "./clima";

const rootReducer = combineReducers({ climaReducer });

export default rootReducer;
