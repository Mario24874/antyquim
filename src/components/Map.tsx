import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

// Define las librerías fuera del componente
const libraries = ['places'];

const Map = () => {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Coordenadas de la empresa (Antyquim, C.A.)
  const companyLocation = {
    lat: 10.0530946,
    lng: -69.3820647,
  };

  // Obtener la ubicación del usuario
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error obteniendo la ubicación:', error);
        }
      );
    } else {
      console.error('Geolocalización no soportada por el navegador.');
    }
  }, []);

  // Calcular las direcciones
  const calculateDirections = () => {
    if (userLocation) {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: userLocation,
          destination: companyLocation,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error('Error calculando las direcciones:', status);
          }
        }
      );
    }
  };

  // Estilo del contenedor del mapa
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  // Clave API de Google Maps
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  if (!apiKey) {
    return (
      <div className="h-[400px] bg-gray-100 flex items-center justify-center text-gray-500">
        <p>Por favor, configura tu clave API de Google Maps.</p>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={companyLocation}
        zoom={15}
      >
        {/* Marcador de la empresa */}
        <Marker
          position={companyLocation}
          title="Antyquim, C.A."
          label={{
            text: "Antyquim, C.A.",
            color: "#000000",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        />

        {/* Marcador de la ubicación del usuario */}
        {userLocation && (
          <Marker
            position={userLocation}
            title="Tu ubicación"
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        )}

        {/* Direcciones */}
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 5,
              },
            }}
          />
        )}
      </GoogleMap>

      {/* Botón para calcular las direcciones */}
      <button
        onClick={calculateDirections}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Cómo llegar
      </button>
    </LoadScript>
  );
};

export default Map;