import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addReservations,
  getReservations,
} from "../../redux/actions/reservationAction";
import { IReservation } from "../../redux/interfaces/IRoom";
import AddReserv from "./AddReserv";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface IReservationState {
  reservations: { reservations: IReservation[] };
}

interface ParamTypes {
  id: string;
}

function RoomsDetail() {
  const classes = useStyles();
  const { id } = useParams<ParamTypes>();
  const [reservation, setReservation] = React.useState<IReservation[]>([]);

  const dispatch = useDispatch();

  const { reservations } = useSelector(
    (state: IReservationState) => state.reservations
  );

  const handleAddReservation = React.useCallback(
    (item: IReservation) => {
      addReservations(item)(dispatch);
    },
    [dispatch]
  );

  React.useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  React.useEffect(() => {
    const itemId = id.split(":")[1];
    const relationData = reservations?.filter(
      (reserv) => reserv.roomId.toString() === itemId.toString()
    );
    setReservation(relationData);
  }, [reservations, id]);

  return (
    <Box width="1024px" margin="0 auto" marginTop="100px">
      <Typography variant="h3" style={{ textAlign: "center" }}>
        Reservations
      </Typography>

      <Box width="1024px" margin="0 auto">
        <AddReserv handleAddReservation={handleAddReservation} id={id} />
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Fullname</b>
              </TableCell>
              <TableCell align="right">
                <b>From</b>
              </TableCell>
              <TableCell align="right">
                <b>To</b>
              </TableCell>
              <TableCell align="right">
                <b>Notes</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservation?.map((reserv, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {reserv.reservedBy}
                </TableCell>
                <TableCell align="right">{reserv.from}</TableCell>
                <TableCell align="right">{reserv.to}</TableCell>
                <TableCell align="right">{reserv.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default RoomsDetail;
