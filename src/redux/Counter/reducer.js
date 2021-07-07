const iState={
  c1:0,
  c2:0,
  c3:0,
  c4:0
}

const reducer = (state =iState, action) => {
  console.log(state,'state');

    switch (action.type) {

        case 'c1':
           return {
            ...state,
           count: action.payload + 1,
           
           }
          //  case 'c2':
          //  return {
          //   ...state,
          //   [action.name]: state[action.name] + 1,
          //  }
          //  case 'c3':
          //  return {
          //   ...state,
          //   [action.name]: state[action.name] + 1,
          //  }
          //  case 'c4':
          //  return {
          //   ...state,
          //   [action.name]: state[action.name] + 1,
          //  }

        default:
           return{
               state
           }
    }
};

export default reducer;