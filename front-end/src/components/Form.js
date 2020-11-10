import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import React, { useState } from "react";
import Title from "./Title";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialFormData = {
  fiftyCentQuantity: 0,
  oneRandQuantity: 0,
  twoRandQuantity: 0,
  fiveRandQuantity: 0,
  productId: 0
}

export default function Form() {
  const classes = useStyles();
  const [formData, setFormData] = useState({ ...initialFormData });
  const [loading, setLoading] = useState("insert the coins then press to buy");
  const [results, setResults] = useState();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postData(formData);
    window.location.reload() // not best
  };

  async function postData(formData) {
    const url = "/buy";
    const response = await axios.post(`${url}`, formData);
    if (response.status && response.statusText === "OK") {
      setResults(response.data);
    } else {
      setResults(response.data.message);
    }
    //setFormData({ ...initialFormData })
  }


  return (
    <React.Fragment>
      <Title>Coins</Title>
      <CssBaseline />
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <TextField
              name="fiftyCentQuantity"
              variant="outlined"
              id="fiftyCentQuantity"
              label="50 Cents"
              type="number"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              name="oneRandQuantity"
              variant="outlined"
              id="oneRandQuantity"
              label="1 Rands"
              type="number"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              name="twoRandQuantity"
              variant="outlined"
              id="twoRandQuantity"
              label="2 Rands"
              type="number"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              name="fiveRandQuantity"
              variant="outlined"
              id="fiveRandQuantity"
              label="5 Rands"
              type="number"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              name="productId"
              variant="outlined"
              id="productId"
              label="Item location"
              type="number"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          {loading}
        </Button>
      </form>
    </React.Fragment>
  );
}
