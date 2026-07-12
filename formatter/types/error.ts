/**
 * formatter/types/error.ts
 *
 * PURPOSE: Custom error type definitions
 *
 * RESPONSIBILITY:
 * - Define custom error classes
 * - Define error codes
 * - Provide error handling
 */

/**
 * Base formatter error
 */
export class FormatterError extends Error {
  // TODO: Implement FormatterError class
  // constructor(message: string, public code: string) { super(message); }
}

/**
 * Validation error
 */
export class ValidationError extends FormatterError {
  // TODO: Implement ValidationError class
}

/**
 * API integration error
 */
export class APIIntegrationError extends FormatterError {
  // TODO: Implement APIIntegrationError class
  // For Google Places or OpenAI API failures
}

/**
 * Parse error
 */
export class ParseError extends FormatterError {
  // TODO: Implement ParseError class
}
