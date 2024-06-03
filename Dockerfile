# Use the official MongoDB image from the Docker Hub
FROM mongo:latest

# Set environment variables
# ENV MONGO_INITDB_ROOT_USERNAME=admin
# ENV MONGO_INITDB_ROOT_PASSWORD=adminpassword
ENV MONGO_INITDB_DATABASE=family

# Copy the initialization script
COPY init-mongo.js /docker-entrypoint-initdb.d/
