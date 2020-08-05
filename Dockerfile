FROM node:12
# Install typescript
RUN npm install -g typescript
# Clean directory
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# Create app directory
WORKDIR /home/node/app
# Remove node modules.
USER node
# Install app dependencies
COPY package*.json ./
# Install app dependencies
RUN npm install
# Audit fix npm install's
RUN npm audit fix
# Copy all sources
COPY --chown=node:node . .
# Build the code.
RUN npm run build
# Expose the 3000 port.
EXPOSE 3000
# Run node.
CMD [ "node", "dist/src/runtime/src/server.js" ]