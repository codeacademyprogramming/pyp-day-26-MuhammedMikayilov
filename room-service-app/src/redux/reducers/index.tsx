import { combineReducers } from "redux";

import { reducerRoom } from "./roomReducer";
import { reducerReservation } from "./reservationsReducer";

const reducer = combineReducers({
  rooms: reducerRoom!,
  reservations: reducerReservation!,
});

export default reducer;
