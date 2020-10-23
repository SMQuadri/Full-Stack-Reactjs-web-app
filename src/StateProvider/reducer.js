export const initialState = {
  myList: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
      break;

    case 'ADD_TO_MYLIST':
      return { 
        ...state,
        myList: [...state.myList, action.item]
      }
      break;
    
    case 'REMOVE_FROM_MYLIST':
      let newList = [...state.myList];
      const index = state.myList.findIndex((myListItem) => myListItem.id === action.id);
      if(index >= 0) {
        newList.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in your myList`
        );
      }
      return { 
        ...state, 
        myList: newList,
      }
      break;

    default:
      return state;
  }
}

export default reducer;