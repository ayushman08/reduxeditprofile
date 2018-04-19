import { combineReducers } from 'redux';
import LibraryReducer from "./LibraryReducer"
import SelectionReducer from "./SelectionReducer"
// import UpdatedReducer from "./UpdatedReducer"


export default combineReducers({
    libraries:LibraryReducer,
    selectedLibrary:SelectionReducer,
    // updatedList:UpdatedReducer

});
