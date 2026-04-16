FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/seed ./seed
COPY --from=builder /app/astro.config.mjs ./

RUN mkdir -p data

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321
CMD ["sh", "-c", "npx emdash init && node ./dist/server/entry.mjs"]
