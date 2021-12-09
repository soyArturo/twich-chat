FROM node:16.13.1-alpine3.14

WORKDIR /usr/src/app

COPY . /usr/src/app/

COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

RUN npm install
CMD ["npm", "start"]

# ENTRYPOINT ["/usr/src/app/entrypoint.sh"]