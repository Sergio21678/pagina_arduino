import React, { useState } from "react";
import { Typography, TextField, Button, Card, CardContent } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

function Profile() {
  const { user, setUser } = useAuth(); // Usar setUser para actualizar el contexto global
  const email = user.email; // Obtener el correo del usuario autenticado
  const [name, setName] = useState(user.name || ""); // Inicializar con el nombre actual
  const [password, setPassword] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState(user.vehicleInfo || {
    marca: "",
    modelo: "",
    año: "",
    placa: "",
  });

  const handleSave = () => {
    // Actualizar en el localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("vehicleInfo", JSON.stringify(vehicleInfo));

    // Actualizar el estado global del usuario
    setUser({
      ...user,
      name,
      vehicleInfo,
    });

    alert("Información actualizada exitosamente.");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Perfil del Usuario
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Información Personal</Typography>
          <TextField
            label="Nombre"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "1rem" }}
          />
          <Typography variant="h6" style={{ marginTop: "1rem" }}>
            Información del Vehículo
          </Typography>
          <TextField
            label="Marca"
            fullWidth
            value={vehicleInfo.marca}
            onChange={(e) => setVehicleInfo({ ...vehicleInfo, marca: e.target.value })}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            label="Modelo"
            fullWidth
            value={vehicleInfo.modelo}
            onChange={(e) => setVehicleInfo({ ...vehicleInfo, modelo: e.target.value })}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            label="Año"
            fullWidth
            value={vehicleInfo.año}
            onChange={(e) => setVehicleInfo({ ...vehicleInfo, año: e.target.value })}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            label="Placa"
            fullWidth
            value={vehicleInfo.placa}
            onChange={(e) => setVehicleInfo({ ...vehicleInfo, placa: e.target.value })}
            style={{ marginBottom: "1rem" }}
          />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Guardar Cambios
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
