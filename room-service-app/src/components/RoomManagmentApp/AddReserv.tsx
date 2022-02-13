import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { Box } from "@material-ui/core";
import Form from "./Form";
import { IReservation } from "../../redux/interfaces/IRoom";
import swal from "sweetalert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  handleAddReservation: (item: IReservation) => void;
  id: string;
}

// Components
const AddReserv: React.FC<IProps> = ({ handleAddReservation, id }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [formValue, setFormValue] = React.useState<IReservation>({
    reservedBy: "",
    roomId: "",
    from: "",
    to: "",
    notes: "",
  });

  const handleOnChangeVal = React.useCallback(
    (e) => {
      const { value, name } = e.target;
      const itemId = id.split(":")[1];
      setFormValue({ ...formValue, [name]: value, roomId: itemId });
    },
    [formValue, id]
  );

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      handleAddReservation(formValue);
      handleClose();
      swal({
        title: "Good job!",
        text: "Added successfully",
        icon: "success",
      });
    },
    [formValue, handleAddReservation]
  );

  return (
    <Box width="1024px" margin="0 auto">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new Reserve
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              Reservations
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Add
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Box width="1024px" margin="0 auto" marginY={5}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Add new Reservation
            </Typography>
          </Box>
          <Divider />
          <Box width="1024px" margin="0 auto" marginY={5}>
            <Form
              handleOnChangeVal={handleOnChangeVal}
              handleSubmit={handleSubmit}
            />
          </Box>
        </List>
      </Dialog>
    </Box>
  );
};

export default AddReserv;
