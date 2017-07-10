const initialState = []

export default function(state = initialState, action) {

  switch (action.type) {

    case 'TRADE_DATA':

    return Object.assign({},...state,[action.payload]);

    default:
      return state
  }

}
