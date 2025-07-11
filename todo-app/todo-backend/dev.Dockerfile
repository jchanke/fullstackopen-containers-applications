FROM node:20.9.0-bullseye-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install

ENV NODE_ENV=development

USER node

CMD ["npm", "run", "dev"]