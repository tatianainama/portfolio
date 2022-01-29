FROM node:17.1.0-buster-slim
RUN echo 'Acquire::http::Proxy "http://proxies.labs:3142/apt-cacher/";' > /etc/apt/apt.conf.d/01proxy
RUN apt-get update && apt-get install --no-install-recommends -y git openssh-client ca-certificates python2 make g++ 

ADD yarn.lock /tmp/yarn.lock
ADD package.json /tmp/package.json
COPY . /usr/src/app/
RUN ls /usr/src/app/
RUN cd /tmp && yarn install
RUN mkdir -p /usr/src 

WORKDIR /usr/src/app/

RUN ln -s /tmp/node_modules /usr/src/app/node_modules
ENTRYPOINT /bin/bash
RUN yarn run build
RUN mkdir dist && mv .next/standalone dist/ && mv .next/static ./dist/.next/static
