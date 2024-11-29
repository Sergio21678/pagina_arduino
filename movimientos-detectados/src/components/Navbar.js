import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          SISTEMA DE SEGURIDAD
        </Typography>
        {user.isAuthenticated ? (
          <>
            <Typography variant="body1" style={{ marginRight: "1rem" }}>
              Bienvenido, {user.name || "Usuario"}
            </Typography>
            <Button color="inherit" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
            <Button color="inherit" onClick={() => navigate("/profile")}>
              Perfil
            </Button>
            <Button color="inherit" onClick={() => navigate("/history")}>
              Historial
            </Button>
            <Button color="inherit" onClick={() => navigate("/settings")}>
              Configuración
            </Button>
            <Button color="inherit" onClick={logout}>
              Cerrar Sesión
            </Button>
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
