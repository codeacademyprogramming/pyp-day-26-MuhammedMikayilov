import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { getRooms } from "../../redux/actions/roomAction";
import { Rooms } from "./Rooms";
import "./styles/roomManagment.scss";
function RoomManagmentApp() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);
  return (
    <Box width="1024px" margin="0 auto">
      <Typography
        variant="h3"
        style={{ marginTop: "50px", textAlign: "center" }}
      >
        Room Managment App
      </Typography>
      <Box className="hotel">
        <Rooms />
      </Box>
    </Box>
  );
}

export default RoomManagmentApp;
