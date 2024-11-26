# Use a smaller base image
ARG NODE_VERSION=node:20-alpine

# Stage 1: Build dependencies
FROM $NODE_VERSION AS dependency-base

# Create app directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy the package files
COPY package.json pnpm-lock.yaml .npmrc ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Stage 2: Build the application
FROM dependency-base AS production-base

# Copy the source code
COPY . .

# Build the application with verbose logging
RUN set -x && \
    pnpm run build && \
    ls -la /app/.output || exit 1

# Stage 3: Production image
FROM $NODE_VERSION AS production

# Copy built assets from previous stage
COPY --from=production-base /app/.output /app/.output
COPY --from=production-base /app/package.json /app
COPY --from=production-base /app/prisma  /app/prisma

# Define environment variables
ENV NUXT_HOST=0.0.0.0 \
    NUXT_APP_VERSION=latest \
    DATABASE_URL=file:./db.sqlite \
    NODE_ENV=production

# Set the working directory
WORKDIR /app

EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
