import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

const libraries = ['places'];

const Map = () => {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const companyLocation = {
    lat: 10.0530946,
    lng: -69.3820647,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    libraries,
  });

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

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  if (loadError) {
    return <div>Error al cargar el mapa</div>;
  }

  if (!isLoaded) {
    return <div>Cargando el mapa...</div>;
  }

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={companyLocation}
        zoom={15}
      >
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

      <button
        onClick={calculateDirections}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Cómo llegar
      </button>
    </>
  );
};

export default Map;