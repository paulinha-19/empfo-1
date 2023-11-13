import {
  LocationObject,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import { GooglePlace, CustomLocationObject } from "../types/map";
import MapView from "react-native-maps";

export async function getMyLocation(
  setCurrentLocation: (currentLocation: LocationObject | null) => void
) {
  const { status } = await requestForegroundPermissionsAsync();
  if (status !== "granted") {
    alert("Permissão para acessar a localização foi negada.");
    return;
  }
  const currentPosition = await getCurrentPositionAsync();
  setCurrentLocation(currentPosition);
}

export async function watchPosition(
  setCurrentLocation: (currentLocation: LocationObject | null) => void
) {
  try {
    await watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setCurrentLocation(response);
      }
    );
  } catch (err) {
    console.warn("Algo deu errado...");
  }
}

export function addMarkersToMap(
  places: GooglePlace[],
  setMarkers: (markers: CustomLocationObject[] | null) => void
) {
  if (places) {
    setMarkers(null);
    const newMarkers: CustomLocationObject[] = places.map((place) => ({
      coords: {
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
        altitude: 0,
        accuracy: 0,
        altitudeAccuracy: 0,
        heading: 0,
        speed: 0,
      },
      timestamp: Date.now(),
      title: place.name,
      description: place.vicinity,
      url: place.url,
      vicinity: place.vicinity,
      types: place.types,
      icon: place.icon,
      opening_hours: place.opening_hours,
      photos: place.photos,
      rating: place.rating,
      status: place.status,
      website: place.website,
      permanently_closed: place.permanently_closed,
      address_components: place.address_components,
      business_status: place.business_status,
      formatted_address: place.formatted_address,
      formatted_phone_number: place.formatted_phone_number,
      icon_background_color: place.icon_background_color,
      user_ratings_total: place.user_ratings_total,
    }));
    setMarkers(newMarkers);
  }
}

export const handleUserLocationPress = (
  currentLocation: LocationObject | null | undefined,
  mapRef: React.MutableRefObject<MapView | null>,
  setMarkerLocation: React.Dispatch<
    React.SetStateAction<CustomLocationObject | null>
  >,
  setMarkers: React.Dispatch<
    React.SetStateAction<CustomLocationObject[] | null>
  >
) => {
  if (currentLocation) {
    mapRef.current?.animateToRegion(
      {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      2000
    );
  }
  setMarkerLocation(null);
  setMarkers(null);
};

// export async function handleMapPress(
//   event: MapPressEvent,
//   setMarkerLocation: (location: markerLocationProps | null) => void
// ) {
//   setMarkerLocation(null);
//   const newMarkerLocation: markerLocationProps = {
//     latitude: event.nativeEvent.coordinate.latitude,
//     longitude: event.nativeEvent.coordinate.longitude,
//     title: "",
//     description: "",
//   };

//   try {
//     const reverseGeocodeResponse = await axios.get(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${newMarkerLocation.latitude},${newMarkerLocation.longitude}&key=${process.env.API_KEY}`
//     );

//     if (reverseGeocodeResponse.data.results.length > 0) {
//       const addressInfo = reverseGeocodeResponse.data.results[0];
//       newMarkerLocation.title = addressInfo.formatted_address;
//       newMarkerLocation.description = "Descrição do local";
//     }
//   } catch (error) {
//     console.error("Erro ao buscar informações de localização:", error);
//   }

//   setMarkerLocation(newMarkerLocation);
// }
