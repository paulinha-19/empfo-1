import { LocationObject } from "expo-location";
import { PlaceType } from "react-native-google-places-autocomplete";

export type markerLocationProps = {
  latitude: number;
  longitude: number;
  title: string;
  description: string;
};

export interface AddressComponent {
  long_name?: string;
  short_name?: string;
  types?: string[];
}

export interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

interface Point {
  lat: number;
  lng: number;
}

export type Geometry = {
  location: Point;
  viewport: {
    northeast: Point;
    southwest: Point;
  };
};

export type CustomLocationObject = LocationObject & {
  title?: string;
  opening_hours?: { open_now: boolean };
  photos?: any[];
  rating?: number;
  types?: string[];
  user_ratings_total?: number;
  vicinity?: string;
  status?: string;

  //AUTOCOMPLETE
  address_components?: AddressComponent[];
  business_status?: string;
  formatted_address?: string;
  formatted_phone_number?: string;
  icon?: string;
  icon_background_color?: string;
  permanently_closed?: boolean;
  url?: string;
  website?: string;
};

export type GooglePlace = {
  geometry: Geometry;
  name?: string;
  opening_hours?: { open_now: boolean };
  photos?: any[];
  rating?: number;
  types?: string[];
  user_ratings_total?: number;
  vicinity?: string;
  status?: string;

  //AUTOCOMPLETE
  address_components?: AddressComponent[];
  business_status?: string;
  formatted_address?: string;
  formatted_phone_number?: string;
  icon?: string;
  icon_background_color?: string;
  permanently_closed?: boolean;
  url?: string;
  website?: string;
  description?: string;
};

export type INearbysearch = LocationObject & {
  name?: string;
  opening_hours?: { open_now: boolean };
  photos?: Photo[];
  rating?: number;
  types?: string[];
  user_ratings_total?: number;
  vicinity?: string;
  status?: string;
  geometry: Geometry;
};

export type IGooglePlaceAutocomplete = LocationObject & {
  geometry: Geometry;
  address_components?: AddressComponent[];
  business_status?: string;
  formatted_address?: string;
  formatted_phone_number?: string;
  icon?: URL | string;
  icon_background_color?: string;
  name?: string;
  permanently_closed?: boolean;
  types?: string[];
  url?: URL | string;
  vicinity?: string;
  website?: string;
  description?: string;
};

export type PhotoNearbySearch = {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
};
