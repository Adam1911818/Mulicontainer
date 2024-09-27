# Use Node.js as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend port (assume it runs on port 3000)
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
