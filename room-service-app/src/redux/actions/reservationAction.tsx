import { reservationService } from "../../Service/Reservations";
import { IReservation } from "../interfaces/IRoom";
import { ACTION_TYPES } from "./actionTypes";

export const getReservations = () => (dispatch: Function) => {
  reservationService.getReservations().then(({ data }) => {
    console.log("data", data);
    dispatch({
      type: ACTION_TYPES.GET_RESERVATIONS,
      payload: data,
    });
  });
};

export const addReservations = (data: IReservation) => (dispatch: Function) => {
  reservationService
    .postReservations(data)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.CREATE_RESERVATIONS,
        payload: { reservation: [{ data }] },
      });
    })
    .then(() => getReservations()(dispatch));
};
