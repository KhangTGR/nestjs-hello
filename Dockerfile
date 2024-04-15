# Stage 1: Install dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --omit=optional

# Stage 2: Build the application
FROM deps AS builder
WORKDIR /app

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Stage 3: Create the final image
FROM node:20-alpine AS runner

RUN apk add --no-cache libc6-compat

WORKDIR /home/nextjs

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json .
COPY --from=builder /app/tsconfig* .

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "start"]
