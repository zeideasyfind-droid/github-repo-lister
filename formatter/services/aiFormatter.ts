/**
 * formatter/services/aiFormatter.ts
 *
 * PURPOSE: OpenAI GPT integration for formatting
 *
 * RESPONSIBILITY:
 * - Initialize OpenAI API client
 * - Call GPT-4 (future: GPT-5.5) with system prompt
 * - Apply formatting rules using AI
 * - Handle API errors and rate limiting
 * - Cache API responses
 *
 * FUTURE IMPLEMENTATION:
 * - Use OpenAI system prompt from formatter/prompts/
 * - Pass property details to GPT
 * - Get back standardized property listing
 * - Apply post-processing if needed
 * - Cache results for same inputs
 *
 * ENVIRONMENT VARIABLES NEEDED:
 * - OPENAI_API_KEY
 */

/**
 * Initialize OpenAI API client
 */
export function initializeOpenAIClient(): void {
  // TODO: Initialize OpenAI client
  // 1. Get API key from environment
  // 2. Create client instance
  // 3. Set up error handling
  throw new Error('Not implemented yet - Phase 3');
}

/**
 * Format property using OpenAI GPT
 * @param propertyDetails - Parsed property details
 * @param systemPrompt - System prompt with formatting rules
 * @returns Formatted property listing
 *
 * FUTURE EXAMPLE:
 * propertyDetails: {
 *   bhk: "2",
 *   rent: "40000",
 *   furnishing: "semi-furnished",
 *   bathrooms: "2",
 *   balcony: "1",
 *   floor: "4",
 *   societyName: "Prestige Lakeside Habitat",
 *   locality: "Sarjapur Road"
 * }
 *
 * Returns: "Semi-furnished 2 BHK with 2 bathrooms & 1 balcony..."
 */
export async function formatWithAI(
  propertyDetails: Record<string, any>,
  systemPrompt: string
): Promise<string> {
  // TODO: Implement AI formatting
  // 1. Prepare system prompt
  // 2. Create user message with property details
  // 3. Call OpenAI API
  // 4. Extract formatted response
  // 5. Validate response format
  // 6. Return formatted property
  throw new Error('Not implemented yet - Phase 3');
}

/**
 * Get system prompt from file
 * @returns System prompt content
 */
export async function getSystemPrompt(): Promise<string> {
  // TODO: Load system prompt from formatter/prompts/system-prompt.md
  // Return the prompt content as string
  throw new Error('Not implemented yet - Phase 3');
}
