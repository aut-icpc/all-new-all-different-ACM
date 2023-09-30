# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

RUN npm install -g @angular/cli

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose port 80
EXPOSE 80

# Start the Angular app using ng serve on port 80
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80", "--disable-host-check"]
