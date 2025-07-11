FROM node:20.9.0-bullseye-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

ENV NODE_ENV=production
ENV DEBUG=todo-express-backend:server

USER node

CMD ["npm", "start"]