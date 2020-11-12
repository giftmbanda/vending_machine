import Typography from "@material-ui/core/Typography";
import React from "react";
import Title from "./Title";


export default function Information() {
  return (
    <React.Fragment>
      <Title>Instruction</Title>
      <Typography component="p" variant="h6">
        Enter your coins quantity into the correct coin slot then press Buy
      </Typography>
    </React.Fragment>
  );
}
