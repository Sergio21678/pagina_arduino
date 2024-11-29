import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      settingsTitle: "Configuración del Usuario",
      notifications: "Notificaciones",
      darkTheme: "Tema Oscuro",
      language: "Cambiar Idioma",
      saveSettings: "Guardar Configuración",
      notificationsActivated: "Notificaciones activadas",
      notificationsDeactivated: "Notificaciones desactivadas",
      darkThemeActivated: "Tema oscuro activado",
      darkThemeDeactivated: "Tema claro activado",
      languageChanged: "Idioma cambiado a {{language}}",
      welcome: "Welcome",
      vehicleInfo: "Vehicle Information",
      noVehicleInfo: "No vehicle information available.",
      lastMovements: "Last Detected Movements",
    },
  },
  en: {
    translation: {
        welcome: "Bienvenido",
        vehicleInfo: "Información del Vehículo",
        noVehicleInfo: "No hay información del vehículo registrada.",
        lastMovements: "Últimos Movimientos Detectados",
      settingsTitle: "User Settings",
      notifications: "Notifications",
      darkTheme: "Dark Theme",
      language: "Change Language",
      saveSettings: "Save Settings",
      notificationsActivated: "Notifications activated",
      notificationsDeactivated: "Notifications deactivated",
      darkThemeActivated: "Dark theme activated",
      darkThemeDeactivated: "Light theme activated",
      languageChanged: "Language changed to {{language}}",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma predeterminado
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
