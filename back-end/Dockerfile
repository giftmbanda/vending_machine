# our first command is to pull a base image
#FROM node:12.14.1-alpine3.9
FROM node:12.14.1-alpine3.9

# command is about creating a new directory
RUN mkdir -p /usr/src/app

# assign the created folder as a working dir
WORKDIR /. /app

# copying the ‘package.json’ file to working dir
COPY package.json ./

# run the ‘npm cache clean’ command
RUN npm cache verify

# run the ‘npm install’ command
RUN npm install

#Copy the current directory . in the project to the workdir . in the image.
COPY . .

# asks the container to expose port number 3333
EXPOSE 4000

CMD [ "npm", "start" ]