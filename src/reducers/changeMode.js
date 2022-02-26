const initialState = {
  darkMode: 0,
};

export default function addResReducer(state = initialState, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        darkMode: state.darkMode + 1,
      };
    }
    case "decrement": {
      return {
        ...state,
        darkMode: state.darkMode - 1,
      };
    }
    case "reset": {
      return {
        ...state,
        darkMode: 0,
      };
    }
    default:
      return state;
  }
}
