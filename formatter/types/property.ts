/**
 * formatter/types/property.ts
 *
 * PURPOSE: TypeScript type definitions for property listings
 *
 * RESPONSIBILITY:
 * - Define Property interface
 * - Define PropertyDetails interface
 * - Define FormattedProperty interface
 * - Ensure type safety across formatter
 *
 * FUTURE IMPLEMENTATION:
 * - RawProperty: Input from user
 * - ParsedProperty: After parsing and validation
 * - FormattedProperty: Final standardized output
 */

/**
 * Raw property details as input by user
 */
export interface RawProperty {
  // TODO: Define raw property structure
  // address?: string;
  // bhk?: string;
  // rent?: string;
  // maintenance?: string;
  // furnishing?: string;
  // googleMapsUrl?: string;
  // [key: string]: any;
}

/**
 * Parsed and validated property details
 */
export interface ParsedProperty {
  // TODO: Define parsed property structure
  // bhk: number;
  // rent: number;
  // maintenance: number;
  // furnishing: 'Unfurnished' | 'Semi-furnished' | 'Fully Furnished';
  // bathrooms: number;
  // balcony: number;
  // floor: string;
  // societyName?: string;
  // locality: string;
  // googleMapsUrl?: string;
  // communityType: 'Gated' | 'Semi-gated';
}

/**
 * Final formatted property listing ready for output
 */
export interface FormattedProperty {
  // TODO: Define formatted property structure
  // title: string; // "Semi-furnished 2 BHK with 2 bathrooms & 1 balcony"
  // rent: string; // "₹40k"
  // maintenance: string; // "₹4k"
  // deposit: string; // "₹1.7L"
  // sqft: string;
  // floor: string; // "4/4"
  // availableFrom: string;
  // preferredTenant: string;
  // pets: string;
  // community: 'Gated' | 'Semi-gated';
  // location: string;
  // societyName?: string;
  // googleMapsUrl?: string;
}

/**
 * Complete formatter output
 */
export interface FormatterOutput {
  // TODO: Define formatter output structure
  // success: boolean;
  // formatted?: string; // Final text-based output
  // data?: FormattedProperty; // Structured data
  // errors?: string[];
  // timestamp: string;
}
