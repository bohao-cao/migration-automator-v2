 # Create image based on the official Node 6 image from the dockerhub
FROM node:latest

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/service

# Change directory so 
WORKDIR /usr/src/service

# Copy dependency definitions
COPY package.json /usr/src/service

# Install dependecies
RUN npm install nodemon -g
RUN npm install mongoose -g
RUN npm link mongoose

# Get all the code needed to run the app
COPY . /usr/src/service

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]