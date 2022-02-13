import { ACTION_TYPES } from "../actions/actionTypes";
import { IAction } from "../interfaces/IAction";
import { IReservation } from "../interfaces/IRoom";

export const reducerReservation = (
  state: IReservation[] = [],
  action: IAction
) => {
  switch (action.type) {
    case ACTION_TYPES.GET_RESERVATIONS:
      return { ...state, reservations: action.payload };
    default:
      return state;
  }
};
