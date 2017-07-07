const initialState = []

export default function(state = initialState, action) {

  switch (action.type) {

    case 'ADD_DATA':

    let newID = () => {
      return '_' + Math.random().toString(36).substr(2, 9);
    };

    action.payload.id = newID();

    return [...state,action.payload];

    default:
      return state
  }

}
