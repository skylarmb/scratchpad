FROM node:16-alpine
WORKDIR /home/node/app
RUN corepack enable
RUN corepack prepare pnpm@latest --activate
COPY pnpm-lock.yaml ./
RUN pnpm fetch

COPY package.json ./
RUN pnpm install --frozen-lockfile --offline

COPY nodemon.json tsconfig.json .env src ./

CMD ["pnpm", "test"]
