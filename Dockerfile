###################
# BUILD FOR LOCAL 'DEVELOPMENT'
###################

FROM node:20-alpine AS development

COPY --chown=node:node package*.json prisma/ ./

RUN npm ci

USER node

###################
# 'BUILD' FOR PRODUCTION
###################

FROM node:20-alpine AS build

COPY --chown=node:node --from=development ./node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

###################
# 'PRODUCTION'
###################

FROM node:20-alpine AS production

WORKDIR /usr/src/app

COPY --chown=node:node --from=build ./node_modules ./node_modules
COPY --chown=node:node --from=build ./dist ./dist

CMD [ "node", "dist/src/main.js" ]
