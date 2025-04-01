# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Install cors
RUN npm install cors

# Copy the rest of the application code to the working directory
COPY . .

# Generate Prisma client
RUN npx prisma generate

# migrate the database
RUN npx prisma migrate deploy

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]