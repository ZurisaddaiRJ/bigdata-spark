# os base
FROM debian:bullseye

# run apt-get
RUN apt-get update

# install some utilities
# El -y nos indica que cuando nos pregunten y/n para instalar automaticamente le dice que si(yes) a todo.
RUN apt-get install -y curl make g++

# install nodejs
RUN curl -sl https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

# add package.json
ADD package.json /package.json
RUN npm install

WORKDIR /src

EXPOSE 8080

CMD ["node", "/src/server.js"]
