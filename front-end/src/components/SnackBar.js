import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackBar = (props) => {
  let open = props.SnackBarInfo.open;
  const message = props.SnackBarInfo.message;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    else open = false;
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={100}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
