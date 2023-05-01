import { CHANGECOLOR, STATUSCHANGED } from "./actionTypes";

//Color Change
export const colorChange = (color, colorChangeType) => {
  return {
    type: CHANGECOLOR,
    payload: {
      color,
      colorChangeType,
    },
  };
};

//Status Change
export const statusChange = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
