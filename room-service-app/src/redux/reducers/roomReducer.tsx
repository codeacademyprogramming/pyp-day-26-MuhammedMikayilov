import { ACTION_TYPES } from "../actions/actionTypes";
// import { initialState } from "../initialState";
import { IAction } from "../interfaces/IAction";
import { IRoom } from "../interfaces/IRoom";

export const reducerRoom = (state: IRoom[] = [], action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ROOMS:
      return { ...state, rooms: action.payload };
    case ACTION_TYPES.CREATE_RESERVATIONS:
      let result = {
        ...state,
        reservations: { reservations: [action.payload] },
      };
      return result;
    default:
      return state;
  }
};
