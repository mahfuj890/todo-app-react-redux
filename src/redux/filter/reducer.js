import { STATUSCHANGED, CHANGECOLOR } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case CHANGECOLOR:
      const { color, colorChangeType } = action.payload;
      switch (colorChangeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((existColor) => existColor !== color),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
