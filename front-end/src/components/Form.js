import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import React, { useState } from "react";
import Title from "./Title";
import SnackBar from "./SnackBar"


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
  const [formData, setFormData] = useState({...initialFormData});
  const [loading, setLoading] = useState("insert the coins then press to buy");
  const [results, setResults] = useState([]);
  const url = "/buy";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
     async function postData(formData) {
      setLoading("Loading, please wait");
      const response = await axios.post(`${url}`, formData);
      if (response.status && response.statusText === "OK") {
        setResults(response.data.data);
      } else {
        setResults(null);
      }
      //setFormData({...initialFormData})
    }
    postData(formData)
    window.location.reload()
    // await postData(formData)
    // window.location.reload()

    // useEffect(() => {
    //   async function fetchData() {
    //     setLoading(true);
    //     const response = await axios.get(`${url}`);
    //     setLoading(false);
    //     if (response.status && response.statusText === "OK") {
    //       setProducts(response.data.data);
    //     } else {
    //       setProducts(null);
    //     }
    //   }
    //   fetchData();
    // },[url]);

  };



  return (
    <React.Fragment>
    <SnackBar/>
      <Title>Coins</Title>
      <CssBaseline />
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
