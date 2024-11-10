#!/bin/bash

# Navigate to the src directory
cd src || exit 1

# Rename .js files to .ts
find . -type f -name "*.js" -exec bash -c 'mv "$0" "${0%.js}.ts"' {} \;

# Rename .jsx files to .tsx
find . -type f -name "*.jsx" -exec bash -c 'mv "$0" "${0%.jsx}.tsx"' {} \;

echo "Renaming completed!"
