// TypeScript
// - TypeScript is a strongly typed programming language that builds on JavaScript, giving you
//   better tooling at any scale. Developed and maintained by Microsoft (initially released in 2012
//   by Anders Hejlsberg), it addresses the limitations of dynamic typing in large-scale JavaScript
//   applications.
// - TypeScript source code files use the '.ts' extension (or '.tsx' for files containing JSX/React
//   components). These files are not executed directly by engines like V8. Instead, TypeScript
//   introduces a static type system at development time. Through a process called type checking and
//   transpilation, TypeScript code is stripped of its types and converted into standard, executable
//   JavaScript.
// - Website: https://www.typescriptlang.org/

//==================================================================================================
// Commands
//==================================================================================================

// Global Installation
// - To use TypeScript for compiling files or running the compiler CLI, it must be installed
//   globally or locally via npm.
// - Global installation provides the 'tsc' command across the system.
// > npm install -g typescript

// Local Installation (Recommended for Projects)
// - Installs TypeScript as a development dependency inside a specific project.
// - Local installations isolate the compiler per project and require 'npx' (e.g., 'npx tsc') or an
//   npm script to run, avoiding system PATH or NVM version conflicts.
// > npm install --save-dev typescript

// Print the installed TypeScript compiler version.
// > tsc -v
// > tsc --version

// Compile a TypeScript file into standard JavaScript.
// - Reads the .ts file, strips type annotations, and outputs a corresponding .js file.
// > tsc <path-to-file.ts>

// Initialize a new project configuration file (tsconfig.json).
// - Generates the default configuration file used to control compiler options and type checking.
// > tsc --init

// Run TypeScript files directly without manual compilation steps.
// - Modern Node.js (v22+) natively supports running .ts files directly using experimental flags,
//   or via external execution tools like tsx or ts-node.
// > node --experimental-strip-types <path-to-file.ts>
// > npx tsx <path-to-file.ts>
