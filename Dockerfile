FROM node:lts-slim

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install Node.js dependencies, including the "next" package
RUN npm install
RUN mkdir fabrzy

# Copy the rest of the application code
COPY /fabrzy ./fabrzy
COPY package.json .
COPY next.config.mjs .

# Set the default command to run the application
CMD ["npm", "run", "start"]
