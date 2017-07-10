const initialState = {
    count: '',
};

export default function(state = initialState,action){

  switch (action.type) {

    case 'GET_LIKE':

      return Object.assign({}, state, {count: action.payload});

    case 'ADD_LIKE':

      return Object.assign({},state , {count: state.count+1});

      break;
    default:
      return state
  }
}
