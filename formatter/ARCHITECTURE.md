# EasyFind Formatter - Version 1 Architecture

## Design Philosophy

**Lean, focused, and extensible.**

Version 1 optimizes for shipping a working formatter quickly while maintaining clean separation of concerns. No over-engineering. Features are added when there's a real implementation need.

---

## Core Flow

```
User Input (Raw Property Details)
    ↓
Input Validation & Sanitization
    (utils/validators, services/sanitizer)
    ↓
Google Places API Resolution
    (services/googlePlaces)
    ↓
Community Type Detection
    (services/communityDetector)
    ↓
Property Standardization
    (services/standardizer)
    ↓
GPT Formatting (via OpenAI)
    (services/aiFormatter)
    ↓
Formatted Output Ready for Copy-Paste
```

---

## Directory Structure

```
formatter/
├── api/                          # HTTP handlers
│   ├── formatter.handler.ts      # Main endpoint
│   ├── validators.ts             # Request validation
│   ├── errorHandler.ts           # Error responses
│   └── index.ts
│
├── services/                     # Business logic
│   ├── formatterEngine.ts        # Orchestration
│   ├── googlePlaces.ts           # Google Places adapter
│   ├── aiFormatter.ts            # OpenAI adapter
│   ├── validator.ts              # Data validation
│   ├── sanitizer.ts              # Input sanitization
│   ├── communityDetector.ts      # Society detection
│   ├── standardizer.ts           # Field standardization
│   └── index.ts
│
├── engines/                      # Core processing engines
│   ├── .gitkeep                  # Future: SOP engine, parser
│
├── types/                        # Type definitions
│   ├── property.ts
│   ├── api.ts
│   ├── formatter.ts
│   ├── error.ts
│   ├── google-places.ts
│   ├── openai.ts
│   └── index.ts
│
├── utils/                        # Utilities
│   ├── formatters.ts
│   ├── parsers.ts
│   ├── constants.ts
│   ├── validators.ts
│   ├── regex.ts
│   └── index.ts
│
├── config/                       # Configuration
│   ├── config.ts
│   ├── environment.ts
│   ├── features.ts
│   ├── api-config.ts
│   └── index.ts
│
├── prompts/                      # AI system prompts
│   ├── system-prompt.md
│   ├── formatting-rules.md
│   ├── sop.md
│   └── examples.json
│
├── docs/                         # Documentation
│   ├── API.md
│   ├── INTEGRATION.md
│   ├── ARCHITECTURE.md (this file)
│   └── DEVELOPMENT.md
│
├── tests/                        # Test structure
│   ├── unit/
│   ├── integration/
│   ├── e2e/
│   └── fixtures/
│
├── README.md                     # Module overview
├── index.ts                      # Main barrel export
└── ARCHITECTURE.md               # This file
```

---

## Layer Responsibilities

### API Layer (`formatter/api/`)
- Accept HTTP requests
- Validate request format
- Handle errors gracefully
- Return standardized responses

### Services Layer (`formatter/services/`)
- **formatterEngine**: Orchestrates the full flow
- **googlePlaces**: Resolves locations via Google Places API
- **aiFormatter**: Sends data to OpenAI GPT-5.5
- **validator**: Validates property details
- **sanitizer**: Cleans input and output
- **communityDetector**: Determines gated vs semi-gated
- **standardizer**: Normalizes property fields

### Engines Layer (`formatter/engines/`)
- **Reserved for Phase 2+**: SOP engine, property parser
- Extracted when logic becomes complex enough to warrant separation

### Types Layer (`formatter/types/`)
- Property definitions
- API contracts
- Error types
- API integration types

### Utils Layer (`formatter/utils/`)
- Formatters: INR, dates, strings
- Parsers: Extract values from text
- Constants: Enums and config values
- Validators: Format checking
- Regex: Common patterns

### Config Layer (`formatter/config/`)
- Environment variables
- API keys management
- Feature flags
- Application settings

---

## Request Flow Example

```typescript
// User sends raw property details to /api/formatter
POST /api/formatter
{
  "propertyDetails": "2BHK in Sarjapur Road, semi-furnished, 40000 rent...",
  "googleMapsUrl": "https://maps.google.com/..."
}

// 1. API validates request (api/formatter.handler.ts)
// 2. Services orchestrate flow (services/formatterEngine.ts)
//    - Validate & sanitize input
//    - Resolve Google Maps location
//    - Detect community type
//    - Standardize fields
//    - Send to GPT-5.5
// 3. Return formatted property listing

RESPONSE 200
{
  "success": true,
  "data": {
    "formatted": "Semi-furnished 2 BHK with 2 bathrooms & 1 balcony...",
    "parsed": { "bhk": 2, "rent": 40000, ... }
  },
  "timestamp": "2024-01-01T12:00:00Z"
}
```

---

## Future Extensibility

When ready, these layers can be added without breaking existing code:

- **Logging**: Add `formatter/logger/` for observability
- **Caching**: Add `formatter/cache/` for performance
- **Storage**: Add `formatter/storage/` for history/persistence
- **Auth**: Add `formatter/auth/` for security
- **Portals**: Add `formatter/integrations/` for Facebook, Housing.com, etc
- **Features**: Add `formatter/features/` for image processing, WhatsApp, etc
- **Workers**: Add `formatter/workers/` for async jobs
- **Events**: Add `formatter/events/` for event-driven workflows

---

## Clean Import Paths

```typescript
// Barrel exports make imports clean
import { formatPropertyHandler } from 'formatter';
import { FormattedProperty } from 'formatter/types';
import { formatINR, parseINR } from 'formatter/utils';
import { formatterConfig } from 'formatter/config';

// Instead of
import { formatPropertyHandler } from 'formatter/api/formatter.handler';
import { FormattedProperty } from 'formatter/types/property';
import { formatINR } from 'formatter/utils/formatters';
```

---

## Version 1 MVP

Focus on these three files:

1. **services/formatterEngine.ts** - Main orchestration
2. **services/aiFormatter.ts** - GPT integration
3. **services/googlePlaces.ts** - Location resolution

Everything else is support for these core functions.

---

## Key Principles

✅ **Lean**: Only what's needed for Version 1
✅ **Focused**: Clear responsibilities per module
✅ **Extensible**: Easy to add layers later
✅ **Clean**: Barrel exports for readable code
✅ **Documented**: Purpose of each file clear
✅ **Type-Safe**: Full TypeScript throughout
✅ **Testable**: Modular design enables testing

---

## Next Steps (Phase 2)

1. Implement core services
2. Add type implementations
3. Add utility functions
4. Test basic flow
5. Integrate with Google Places API
6. Integrate with OpenAI API
