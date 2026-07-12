/**
 * formatter/types/openai.ts
 *
 * PURPOSE: TypeScript type definitions for OpenAI API
 *
 * RESPONSIBILITY:
 * - Define OpenAI API request types
 * - Define OpenAI API response types
 * - Define message types
 */

/**
 * OpenAI chat message
 */
export interface ChatMessage {
  // TODO: Define OpenAI message structure
  // role: 'system' | 'user' | 'assistant';
  // content: string;
}

/**
 * OpenAI API request
 */
export interface OpenAIRequest {
  // TODO: Define OpenAI request structure
  // model: string; // "gpt-4" or future "gpt-5.5"
  // messages: ChatMessage[];
  // temperature?: number;
  // max_tokens?: number;
}

/**
 * OpenAI API response
 */
export interface OpenAIResponse {
  // TODO: Define OpenAI response structure
  // choices: Array<{
  //   message: ChatMessage;
  //   finish_reason: string;
  // }>;
  // usage: {
  //   prompt_tokens: number;
  //   completion_tokens: number;
  //   total_tokens: number;
  // };
}
