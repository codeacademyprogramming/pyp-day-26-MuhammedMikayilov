import { roomService } from "../../Service/Rooms";
import { ACTION_TYPES } from "./actionTypes";

export const getRooms = () => (dispatch: Function) => {
  roomService.getRooms().then(({ data }) => {
    dispatch({
      type: ACTION_TYPES.GET_ROOMS,
      payload: data,
    });
  });
};
