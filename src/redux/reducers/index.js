import { combinedReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combinedReducers({
  courses: courses
});

export default rootReducer;
