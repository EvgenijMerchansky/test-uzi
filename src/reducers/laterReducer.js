const initialState = [];

export default (state=initialState,action) => {

  switch (action.type) {

    case 'ADD_LATER_DATA':
      return [...state,action.payload];
      break;

    default:
      return state

  }

}
