import express, { Request, Response } from "express";
const mongoose = require("mongoose");
import { IReservationPayload } from "./interfaces";
import { Reservations } from "./models";
const cors = require("cors");
const app = express();
app.use(cors());

const uri =
  "mongodb+srv://MuhammedMikayilov:MuhammedMikayilov@cluster0.27jgn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("success"))
  .catch((err: any) => console.log("err", err));

const PORT = "8080";
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World",
  });
});
app.get("/rooms", (req, resp) => {
  const rooms = require("./data/rooms.json");
  resp.json(rooms);
});
app.get("/reservations", async (req, res) => {
  try {
    const reservations = await Reservations.find();
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post("/reservations", async (req, res) => {
  const reservationPayload: IReservationPayload = {
    ...req.body,
  };
  const reserved = new Reservations(reservationPayload);
  try {
    const newReserv = await reserved.save();
    res.status(200).json(newReserv);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.listen(PORT, () => {
  console.log("server is started");
});
