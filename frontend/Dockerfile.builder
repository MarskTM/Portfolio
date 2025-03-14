FROM node:22.14.0-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the files
COPY . .

# Build the Next.js app
RUN npm run build
