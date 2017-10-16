FROM node:8

MAINTAINER Juliachang

COPY . /home/fashion-worldmap
WORKDIR /home/fashion-worldmap

RUN npm install -g webpack
RUN npm install -g yarn
RUN yarn install
RUN webpack

CMD ["/bin/bash", "run_server.sh"]