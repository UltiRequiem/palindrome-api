FROM node:16-alpine as base

WORKDIR /src
COPY package*.json ./
EXPOSE 8080

FROM base as production
ENV NODE_ENV=production
RUN yarn
COPY . ./
CMD ["yarn", "start"]


FROM base as dev
ENV NODE_ENV=development
RUN yarn
COPY . ./
CMD ["yarn", "run","dev"]
