const initialState = {
  filtered: [],
  filteredGenre: []
}

export default (state=initialState,action) => {
  switch (action.type) {
    case 'CHANGE_LIST':

      return Object.assign({}, state, {filtered: action.payload});

      break;
    case 'CHANGE_GENRE_LIST':

      return Object.assign({}, state, {filteredGenre: action.payload})

    default:
      return state
  }
}
