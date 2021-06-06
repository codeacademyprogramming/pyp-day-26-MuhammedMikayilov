import { HttpClient } from "../../HttpClient";
import { IReservation } from "../../redux/interfaces/IRoom";

class ReservationService extends HttpClient {
  constructor() {
    super("http://localhost:8080");
  }

  getReservations() {
    return this.get("reservations");
  }
  postReservations(body: IReservation) {
    return this.post("reservations", body);
  }
}
export const reservationService = new ReservationService();
