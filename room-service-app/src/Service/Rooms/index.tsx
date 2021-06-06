import { HttpClient } from "../../HttpClient";
import { IReservation } from "../../redux/interfaces/IRoom";

class RoomService extends HttpClient {
  constructor() {
    super("http://localhost:8080");
  }

  getRooms() {
    return this.get("rooms");
  }
  postReservations(body: IReservation) {
    return this.post("rooms", body);
  }
}

export const roomService = new RoomService();
