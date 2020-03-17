const saveInRedux = (data) => ({
    type: 'SAVE_IN_REDUX',
    payload: data
});
const removeFromRedux = (id) => ({
    type: 'REMOVE_FROM_REDUX',
    payload: id    
})
const saveInList = (id) => ({
    type: 'SAVE_IN_LIST',
    payload: id    
})
const removeFromList = (id) => ({
    type: 'REMOVE_FROM_LIST',
    payload: id    
})

export {
    saveInRedux, removeFromRedux, saveInList, removeFromList
};
