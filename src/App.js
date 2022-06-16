import "./styles.css";
import * as React from "react";

export default function App() {
  const [location, setLocation] = React.useState("");

  React.useEffect(() => {
    console.log("use effect");

    detected();
  }, []);

  const detected = () => {
    if (window) {
      const winNav = window.navigator;
      if (winNav.geolocation) {
        // geoPost("geooo");
        winNav.geolocation.getCurrentPosition(geoPost, deneged);
      } else {
      }
    }
  };

  const geoPost = (data) => {
    console.log(data, "data");
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;

    console.log(`https://maps.google.com/?q=${latitude},${longitude}`);
    setLocation(`https://maps.google.com/?q=${latitude},${longitude}`);
  };

  const deneged = () => {
    alert("acceso denegado");
  };

  const permisoUbicacion = () => {
    window.navigator.geolocation.getCurrentPosition(geoPost, deneged);
  };

  return (
    <div className="App">
      <h1>Donde esta mi cliente?</h1>
      <button onClick={() => permisoUbicacion()}>Obtner la ubicacion</button>
      <p>
        Esta es mi ubicacion exacta:
        <a href={location} target="__blank">
          Abrir location
        </a>
      </p>
    </div>
  );
}
