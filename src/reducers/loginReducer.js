const initialState = [];

export default function(state = initialState,action){
  switch (action.type) {
    case 'CHECK_USER':

      return Object.assign({},state,action.payload);

      break;
    default:
      return state
  }
}
