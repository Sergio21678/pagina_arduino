import React from "react";
import { Card, CardContent, Typography, Avatar, Grid } from "@mui/material";

function ProfileCard() {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar style={{ width: 60, height: 60 }}>S</Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h6">Sergio</Typography>
            <Typography color="textSecondary">Usuario</Typography>
          </Grid>
        </Grid>
        <Typography style={{ marginTop: "1rem" }}>
          Este sistema registra y monitorea movimientos en tiempo real.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
