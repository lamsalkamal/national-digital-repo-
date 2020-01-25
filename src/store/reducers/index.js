import { combineReducers } from "redux";
import searchDocumentReducer from "./searchDocumentReducer";
import uploadThesisReducer from "./uploadThesisReducer";

export default combineReducers({
  searchDocument: searchDocumentReducer,
  uploadThesis: uploadThesisReducer
});
