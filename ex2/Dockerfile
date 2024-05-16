# Base image
FROM node
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

# Your app binds to port 16001 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 16001

# Define the command to run your app using CMD which defines your runtime
CMD [ "npm", "start" ]
