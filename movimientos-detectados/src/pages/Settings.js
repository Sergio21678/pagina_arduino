import React, { useState } from "react";
import { Container, FormControlLabel, Switch, Typography, Button, Select, MenuItem } from "@mui/material";

function Settings() {
  const [notifications, setNotifications] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [language, setLanguage] = useState("es"); // Idioma por defecto español

  const handleToggleNotifications = () => {
    setNotifications(!notifications);
    alert(`Notificaciones ${!notifications ? "activadas" : "desactivadas"}`);
  };

  const handleToggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.style.backgroundColor = darkTheme ? "#fff" : "#121212"; // Cambiar el fondo de la página
    document.body.style.color = darkTheme ? "#000" : "#fff";
    alert(`Tema ${!darkTheme ? "oscuro" : "claro"} activado.`);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    alert(`Idioma cambiado a ${event.target.value === "es" ? "Español" : "Inglés"}`);
  };

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Configuración del Usuario
      </Typography>

      {/* Notificaciones */}
      <FormControlLabel
        control={<Switch checked={notifications} onChange={handleToggleNotifications} />}
        label="Notificaciones"
        style={{ marginTop: "1rem" }}
      />

      {/* Tema Oscuro */}
      <FormControlLabel
        control={<Switch checked={darkTheme} onChange={handleToggleTheme} />}
        label="Tema Oscuro"
        style={{ marginTop: "1rem" }}
      />

      {/* Guardar Configuración */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert("Configuración guardada exitosamente.")}
        style={{ marginTop: "1rem" }}
      >
        Guardar Configuración
      </Button>
    </Container>
  );
}

export default Settings;
