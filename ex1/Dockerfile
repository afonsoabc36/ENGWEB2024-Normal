
FROM node

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json, package-lock.json and other necessary files
COPY package.json ./

RUN npm install

# Copy local code to the container image.
COPY . .

# Inform Docker that the container listens on the specified port at runtime.
EXPOSE 3000

# Run the web service on container startup.
CMD [ "npm", "start" ]
