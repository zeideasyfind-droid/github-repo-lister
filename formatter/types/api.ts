/**
 * formatter/types/api.ts
 *
 * PURPOSE: TypeScript type definitions for API requests and responses
 *
 * RESPONSIBILITY:
 * - Define API request body types
 * - Define API response types
 * - Define error response types
 * - Ensure type safety for API layer
 */

/**
 * Formatter API request body
 */
export interface FormatterRequest {
  // TODO: Define API request structure
  // propertyDetails: string; // Raw property input from user
  // googleMapsUrl?: string;
  // additionalContext?: string;
}

/**
 * Formatter API success response
 */
export interface FormatterSuccessResponse {
  // TODO: Define success response structure
  // success: true;
  // data: {
  //   formatted: string; // Formatted property listing
  //   parsed?: Record<string, any>; // Structured data
  // };
  // timestamp: string;
}

/**
 * Formatter API error response
 */
export interface FormatterErrorResponse {
  // TODO: Define error response structure
  // success: false;
  // error: {
  //   message: string;
  //   code: number;
  //   details?: Record<string, any>;
  // };
  // timestamp: string;
}

/**
 * Combined API response type
 */
export type FormatterResponse = FormatterSuccessResponse | FormatterErrorResponse;
