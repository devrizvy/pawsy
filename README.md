# Pawsy

A modern TypeScript-based backend API server built with Express and PostgreSQL, featuring authentication, database management with Prisma ORM, and a robust middleware system.

## 🚀 Features

- **Express.js Server** - Fast and scalable HTTP server
- **Authentication** - JWT-based authentication with middleware support
- **Database** - PostgreSQL with Prisma ORM for type-safe database access
- **Type Safety** - Full TypeScript support
- **CORS & Cookie Support** - Built-in CORS handling and cookie-based session management
- **Error Handling** - Global error handler middleware for consistent API responses
- **Code Quality** - Biome for code formatting and linting

## 📋 Tech Stack

- **Runtime**: Bun
- **Language**: TypeScript
- **Framework**: Express.js v5.2.1
- **Database**: PostgreSQL with Prisma v7.2.0
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Validation**: Zod
- **Code Quality**: Biome v2.3.10
- **Dev Tools**: tsx, ts-node

## 📦 Installation

### Prerequisites
- [Bun](https://bun.sh) installed on your system
- PostgreSQL database running

### Setup

1. Clone the repository:
```bash
git clone https://github.com/devrizvy/pawsy.git
cd pawsy
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env` file in the root directory and configure your environment variables:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/pawsy
PORT=3000
JWT_SECRET=your_jwt_secret_key_here
```

4. Generate Prisma client:
```bash
bun run generate
```

5. Run database migrations:
```bash
bun run migrate
```

## 🏃 Running the Server

### Development Mode
```bash
bun run dev
```
The server will start with hot-reload enabled on the configured port.

### Production Mode
```bash
bun run src/server.ts
```

The server will log: `The PAWSY is running on port ☛  {PORT}`

## 📁 Project Structure

```
pawsy/
├── src/
│   ├── app.ts              # Express app configuration
│   ├── server.ts           # Server entry point
│   ├── app/
│   │   ├── routes/         # API route definitions
│   │   └── middlewares/    # Custom middleware (auth, error handling)
│   ├── config/             # Configuration files
│   ├── helper/             # Helper functions and utilities
│   ├── lib/                # Library utilities
│   └── shared/             # Shared types and constants
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── biome.json              # Biome linter configuration
└── README.md               # This file
```

## 🔌 API Endpoints

The API is available at `/api/v1/` with authentication required.

**Base URL**: `http://localhost:3000/api/v1/`

### Health Check
- `GET /` - Server status check (returns: "Pawsy's server is running!")

All other endpoints require JWT authentication via the auth middleware.

## 🔐 Authentication

The server uses JWT-based authentication. Include your JWT token in requests as follows:

```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" http://localhost:3000/api/v1/your-endpoint
```

## 📝 Available Scripts

```bash
# Start development server with hot-reload
bun run dev

# Format code using Biome
bun run format

# Generate Prisma client
bun run generate

# Run database migrations
bun run migrate
```

## 🛠️ Development

### Code Formatting
```bash
bun run format
```

### Type Checking
```bash
bun check
```

## 📄 Environment Variables

Create a `.env` file with the following variables:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/pawsy_db
PORT=3000
JWT_SECRET=your_super_secret_jwt_key
NODE_ENV=development
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the MIT License.

## 🎯 What is Pawsy?

Pawsy is a pet-related backend service (implied by the name) that provides APIs for managing pet-related data with secure authentication and robust error handling.

## 📞 Support

For issues, questions, or suggestions, please create an issue on the [GitHub repository](https://github.com/devrizvy/pawsy/issues).

---

**Last Updated**: April 2026