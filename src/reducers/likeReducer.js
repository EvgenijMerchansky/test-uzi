const initialState = {
  count: 0
};

export default function(state = initialState,action){


  switch (action.type) {
    case 'ADD_LIKE':
    initialState.count = action.payload

      return Object.assign({},state, state.count = action.payload+1 );

      break;
    default:
      return state
  }
}
