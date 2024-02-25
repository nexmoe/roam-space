# see https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact
ARG NODE_VERSION=node:20

FROM $NODE_VERSION AS dependency-base

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# copy the app, note .dockerignore
COPY package.json .
COPY pnpm-lock.yaml .

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

FROM dependency-base AS production-base

# Copy the source code and build the application
COPY . .
RUN pnpm run build

FROM $NODE_VERSION AS production

# Copy built assets from production-base to production
COPY --from=production-base /app/.output /app/.output

# Service hostname
ENV NUXT_HOST=0.0.0.0

# Service version
ARG NUXT_APP_VERSION
ENV NUXT_APP_VERSION=${NUXT_APP_VERSION}

ENV DATABASE_URL=file:./db.sqlite

# Run in production mode
ENV NODE_ENV=production

# start the app
CMD [ "node", "/app/.output/server/index.mjs" ]