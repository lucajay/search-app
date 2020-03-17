export const initialState = {
    favList: []
};
  
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_IN_REDUX':
      return { ...state, favList: [...state.favList, action.payload] };
    case 'REMOVE_FROM_REDUX':
      let alteredFavList = state.favList.filter( item=> {
        return item.imdbID != action.payload
      })
      if(alteredFavList.length === 0){
        return { ...state, favList: [] } 
      } else{
        return { ...state, favList: alteredFavList }
      }
    case 'SAVE_IN_LIST':
      let newList = [...state.favIDs, action.payload];
      localStorage.setItem('list', String(newList));
      return { ...state, favIDs: newList };
    case 'REMOVE_FROM_LIST':
      let indexof = state.favIDs.indexOf(action.payload);
      if( indexof > -1){
        state.favIDs.splice(indexof, 1);
        localStorage.setItem('list', state.favIDs.join(',') );
        return { ...state, favIDs: state.favIDs };
      }
    default:
      return state;
  }
};