FROM node:16-alpine as build-step

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --omit=dev

FROM nginx:1.17.1-alpine
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/dist/my-app /usr/share/nginx/html