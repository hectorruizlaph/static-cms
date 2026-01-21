# Project Overview

This document outlines the tasks for building a static CMS with a dynamic page builder.

This is a Nextjs app 
never run dev server
## Tasks

### 1. The Data
- [x] Create a hardcoded `data.json` file that mimics a Headless CMS response.
- [x] It should contain an array of objects, e.g., `[{ "type": "hero", "props": {...}}, { "type": "pricing", "props": {...}}]`

### 2. The Logic
- [x] Build a `PageBuilder` component that iterates through the data array.
- [x] The `PageBuilder` should render the correct component based on the `type` property.

### 3. Style
- [x] Style all the components in `app/components`. 

### 4. The AI Twist
- [x] Generate a unit test suite for the `PageBuilder` component.
- [x] The test suite should handle "Unknown Component Type" errors gracefully, ensuring the application does not crash. For example, if the JSON data requests a "slider" component that doesn't exist.

### 5. Docker Deployment
- [x] Add a `Dockerfile` to the project.
- [x] Add a `docker-compose.yml` file to the project.

## Important Considerations
- Never run npm, development server or shell commands