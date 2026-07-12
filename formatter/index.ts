/**
 * formatter/index.ts
 *
 * Main export file for the formatter module.
 * Provides clean API for importing formatter functionality.
 */

// Services
export * from './services/formatterEngine';
export * from './services/googlePlaces';
export * from './services/aiFormatter';
export * from './services/validator';
export * from './services/sanitizer';
export * from './services/communityDetector';
export * from './services/standardizer';

// Types
export * from './types/property';
export * from './types/api';
export * from './types/formatter';
export * from './types/error';
export * from './types/google-places';
export * from './types/openai';

// Utils
export * from './utils/formatters';
export * from './utils/parsers';
export * from './utils/constants';
export * from './utils/validators';
export * from './utils/regex';

// Config
export * from './config/config';
export * from './config/environment';
export * from './config/features';
export * from './config/api-config';

// API
export { formatPropertyHandler, healthCheck } from './api/formatter.handler';
