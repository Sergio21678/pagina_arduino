import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomeNavbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          SISTEMA DE SEGURIDAD
        </Typography>
        <Button color="inherit" onClick={() => navigate("/login")}>
          Iniciar Sesión
        </Button>
        <Button color="inherit" onClick={() => navigate("/register")}>
          Registrarse
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default HomeNavbar;
