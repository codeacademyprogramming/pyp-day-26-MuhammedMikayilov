import { ACTION_TYPES } from "../actions/actionTypes";
import { IReservation, IRoom } from "./IRoom";

export interface IAction {
  type: ACTION_TYPES;
  payload: IRoom;
}

export interface IGetAllReserveTheRoom {
  type: "GET_ALL_RESERVE_THE_ROOM";
  payload?: IReservation[];
}

export interface IReserveRoom {
  type: "ADD_RESERVE_ROOM";
  payload?: IReservation;
}

export const ADD_RESERVE_ROOM: IReserveRoom = {
  type: "ADD_RESERVE_ROOM",
};

export const GET_ALL_RESERVE_THE_ROOM: IGetAllReserveTheRoom = {
  type: "GET_ALL_RESERVE_THE_ROOM",
};
