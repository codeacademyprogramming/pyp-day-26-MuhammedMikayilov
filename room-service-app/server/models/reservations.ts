import mongoose from "mongoose";
const { Schema } = mongoose;

const reservationSchema = new Schema({
  roomId: {
    type: String,
    required: true,
  },

  reservedBy: {
    type: String,
    required: true,
  },

  from: {
    type: String,
  },
  to: {
    type: String,
  },
  notes: {
    type: String,
  },
});

export default mongoose.model("Reservations", reservationSchema);
