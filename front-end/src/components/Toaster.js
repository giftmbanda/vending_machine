import React, { useEffect } from "react";
import {
  Snackbar, SnackbarContent,
  IconButton, CheckCircleIcon,
  CloseIcon, ErrorIcon, InfoWrapper,
} from "../styles/SnackBar_style";

const Toaster =({ status, msg }) =>{
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    setOpen(true);
  }, [status]);

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <SnackbarContent
        status={status}
        contentprops={{
          "aria-describedby": "message-id",
        }}
        // prettier-ignore
        message={(
          <InfoWrapper id='message-id'>
            {status === 'success' ?
              <CheckCircleIcon /> :
              <ErrorIcon />
            }
            {msg || `${status}`}
          </InfoWrapper>
        )}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
}
export default Toaster;
