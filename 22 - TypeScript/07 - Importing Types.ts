// Importing Types
// - TypeScript-specific feature used to import only type definitions without emitting any runtime
//   JavaScript code, preventing circular dependencies and unneeded imports in compiled output.

//==================================================================================================
// Import Statements
//==================================================================================================

// Regular Import
// - Imports both runtime values (like classes, functions, or enums) and types from a module.
// - Emits corresponding JavaScript code in the compiled output.

import { Person } from '../.resources/user.ts'

// Type Import
// - Explicitly imports only TypeScript types or interfaces, ensuring the compiler completely
//   erases the import statement during transpilation to JavaScript.

import type { User } from '../.resources/user.ts'
