import { createStore } from "redux";
import { rootReducer } from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const favListLocalStorage = localStorage.getItem('list') ? localStorage.getItem('list').split(',') : [];
const favArray = []
favListLocalStorage.map((listItem) => {
  favArray.push(JSON.parse(localStorage.getItem(listItem)));
})
const data = {
  favList: favArray,
  favIDs: favListLocalStorage
}

export const configureStore = (initialState) => {
  const store = createStore(rootReducer, data, composeWithDevTools());
  return store;
};

export default configureStore;