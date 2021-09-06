
FROM node:14.17.3

ENV DEV_DIR /usr/src/app

RUN mkdir -p ${DEV_DIR}
WORKDIR ${DEV_DIR}

COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY ./ ./

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]