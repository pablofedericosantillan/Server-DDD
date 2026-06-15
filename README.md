# Server-DDD

Backend API built with TypeScript, NestJS, MongoDB, and a Domain-Driven Design inspired structure.

The project separates domain, application, infrastructure, and controllers concerns to keep business rules away from HTTP and persistence details.

## Tech Stack

- Node.js 20+
- TypeScript
- NestJS
- MongoDB/Mongoose
- Swagger/OpenAPI

## Architecture

```text
src/
  domain/          Business entities and domain types
  application/     Commands, queries, DTOs, and repository interfaces
  infrastructure/  Config and MongoDB repository implementations
  controllers/     HTTP controllers, modules, serializers, and transport config
  shared/          Shared DTOs, pagination, logging, and Swagger helpers
```

## Requirements

- Node.js `>=20`
- npm `>=10`
- MongoDB instance

## Environment Variables

Create a `.env` file in the project root:

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/server-ddd
```

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev:backend
```

The API runs on:

```text
http://localhost:3000
```

Swagger docs are available at:

```text
http://localhost:3000/docs
```
