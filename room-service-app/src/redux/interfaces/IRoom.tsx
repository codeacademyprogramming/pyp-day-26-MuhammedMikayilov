export interface IReservation {
  // id: number;
  roomId: number | string;
  reservedBy: string;
  from: string;
  to: string;
  notes: string;
}
export interface IRoom {
  id: IReservation["roomId"];
  reservations: IReservation[];
}
