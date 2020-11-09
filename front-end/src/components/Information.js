import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Title from "./Title";


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Information() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Instruction</Title>
      <Typography component="p" variant="h6">
        Enter your coins quantity into the correct coin slot then press Buy
      </Typography>
    </React.Fragment>
  );
}
