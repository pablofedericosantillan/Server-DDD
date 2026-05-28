# Server-DDD

Backend API built with TypeScript, NestJS, MongoDB, and a Domain-Driven Design inspired structure.

The project separates domain, application, infrastructure, and transport concerns to keep business rules away from HTTP and persistence details.

## Features

- User creation endpoint
- Paginated user listing endpoint
- Healthcheck endpoint
- MongoDB persistence with Mongoose
- Soft delete plugin configuration
- Request validation with `class-validator`
- Swagger/OpenAPI documentation
- Structured application layers for commands, queries, repositories, and domain entities

## Tech Stack

- Node.js 20+
- TypeScript
- NestJS
- MongoDB
- Mongoose
- Swagger/OpenAPI
- Jest
- ESLint + Prettier

## Architecture

```text
src/
  domain/          Business entities and domain types
  application/     Commands, queries, DTOs, and repository interfaces
  infrastructure/  Config and MongoDB repository implementations
  transport/       HTTP controllers, modules, serializers, and transport config
  shared/          Shared DTOs, pagination, logging, and Swagger helpers
```

## API Overview

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/healthcheck` | Service healthcheck |
| `POST` | `/users` | Create a user |
| `GET` | `/users` | List users with pagination |
| `GET` | `/docs` | Swagger documentation |

## Requirements

- Node.js `>=20`
- npm `>=10`
- MongoDB instance

## Environment Variables

Create a `.env` file in the project root:

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/server-ddd
NODE_ENV=development
```

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run start:dev
```

The API runs on:

```text
http://localhost:3000
```

Swagger docs are available at:

```text
http://localhost:3000/docs
```

## Useful Commands

```bash
npm run build
npm run lint
npm run test
```

## Example Request

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"email":"email@email.com","pwd":"secret"}'
```

## Portfolio Notes

This project is useful as a portfolio backend because it shows:

- Layered backend architecture
- NestJS module organization
- DTO validation
- MongoDB repository implementation
- Swagger API documentation
- Command/query separation in the application layer

## Next Improvements

- Add authentication and authorization
- Add more unit and integration tests
- Add Docker Compose for MongoDB
- Add GitHub Actions for lint, build, and tests
- Improve Swagger descriptions and response examples
