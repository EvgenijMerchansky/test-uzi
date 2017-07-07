const initialState = [];

export default (state=initialState,action) => {

  switch (action.type) {

    case 'ONLY_GANRE':
      return [...state,action.payload];
      break;

    default:
      return state

  }

}
