/**
 * formatter/types/formatter.ts
 *
 * PURPOSE: TypeScript type definitions for formatter configuration
 *
 * RESPONSIBILITY:
 * - Define formatter config types
 * - Define formatting rule types
 * - Define standardization rules
 */

/**
 * Formatter configuration
 */
export interface FormatterConfig {
  // TODO: Define formatter configuration
  // apiKey?: string;
  // model?: string; // "gpt-4" or future "gpt-5.5"
  // maxRetries?: number;
  // timeout?: number;
}

/**
 * Formatting rule
 */
export interface FormattingRule {
  // TODO: Define formatting rule structure
  // field: string; // Field name (e.g., "furnishing", "rent")
  // pattern?: RegExp; // Pattern to match
  // transformer: (value: string) => string; // Transformation function
}

/**
 * Standardization rules collection
 */
export interface StandardizationRules {
  // TODO: Define standardization rules
  // furnishing: FormattingRule[];
  // monetary: FormattingRule[];
  // bathroom: FormattingRule[];
  // [key: string]: FormattingRule[];
}
