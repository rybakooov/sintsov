FROM node:12

WORKDIR /project/

COPY . /project/

RUN npm ci
RUN npm run build

CMD [ "npm", "start" ]