const initialState = [];

export default (state=initialState,action) => {

  switch (action.type) {

    case 'GANRES':
      return [...state,action.payload];
      break;

    default:
      return state
      
  }

}
