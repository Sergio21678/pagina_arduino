import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function MovementsTable() {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const fetchMovements = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/sensor_data/");
        if (!response.ok) throw new Error("Error al obtener datos");
        const data = await response.json();
        setMovements(data.slice(-10)); // Últimos 10 movimientos
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovements();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h5" style={{ marginBottom: "1rem" }}>
        Últimos Movimientos Detectados
      </Typography>
      <TableContainer component={Paper} style={{ marginBottom: "2rem" }}>
        <Table>
          <TableHead style={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>Fecha y Hora</TableCell>
              <TableCell>Latitud</TableCell>
              <TableCell>Longitud</TableCell>
              <TableCell>Movimiento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movements.map((movement) => (
              <TableRow key={movement.id}>
                <TableCell>{new Date(movement.timestamp).toLocaleString()}</TableCell>
                <TableCell>{movement.latitude}</TableCell>
                <TableCell>{movement.longitude}</TableCell>
                <TableCell>{movement.pir_state ? "Detectado" : "No Detectado"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ height: "400px", width: "100%", marginTop: "2rem", border: "1px solid #ccc", borderRadius: "8px" }}>
        {movements.length > 0 && movements[0].latitude && movements[0].longitude ? (
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/view?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&center=${movements[0].latitude},${movements[0].longitude}&zoom=15`}
            title="Mapa"
            style={{ border: "none" }}
          ></iframe>
        ) : (
          <Typography variant="h6" align="center" style={{ padding: "2rem" }}>
            No hay datos de ubicación disponibles.
          </Typography>
        )}
      </div>
    </div>
  );
}

export default MovementsTable;
