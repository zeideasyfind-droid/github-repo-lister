/**
 * formatter/types/google-places.ts
 *
 * PURPOSE: TypeScript type definitions for Google Places API
 *
 * RESPONSIBILITY:
 * - Define Google Places API response types
 * - Define place details types
 * - Ensure type safety for Google Maps integration
 */

/**
 * Google Places API place details
 */
export interface GooglePlaceDetails {
  // TODO: Define Google Places response structure
  // placeId: string;
  // name: string;
  // address: string;
  // placeType: string[];
  // location: { lat: number; lng: number };
}

/**
 * Extracted location information from Google Maps
 */
export interface LocationInfo {
  // TODO: Define extracted location info
  // placeName: string; // Official society name or landmark
  // locality: string; // Area (e.g., "Sarjapur Road")
  // isSociety: boolean; // Is it a residential society?
  // googleMapsUrl?: string;
}
