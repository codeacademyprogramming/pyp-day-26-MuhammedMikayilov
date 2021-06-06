import {
  Button,
  Grid,
  InputLabel,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React from "react";

interface IProps {
  handleOnChangeVal: (e: any) => void;
  handleSubmit: (e: any) => void;
}
const Form: React.FC<IProps> = ({ handleOnChangeVal, handleSubmit }) => {
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputLabel>Fullname</InputLabel>
          <TextField
            id="standard-number"
            placeholder="Muhammed Mikayilov"
            type="text"
            name="reservedBy"
            fullWidth
            onChange={handleOnChangeVal}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel>From</InputLabel>
          <TextField
            id="date"
            type="date"
            defaultValue="2021-06-07"
            fullWidth
            name="from"
            onChange={handleOnChangeVal}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel>To</InputLabel>
          <TextField
            id="date"
            type="date"
            defaultValue="2021-06-07"
            fullWidth
            name="to"
            onChange={handleOnChangeVal}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Notes</InputLabel>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Some notes"
            style={{ width: "100%" }}
            name="notes"
            onChange={handleOnChangeVal}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add new Reserv
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
