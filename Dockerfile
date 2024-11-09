FROM node:20-slim

# Install Cypress dependencies and curl for healthcheck
RUN apt-get update && apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
COPY src ./src

# Install dependencies and Cypress globally
RUN npm install

EXPOSE 3000

CMD ["npm", "start"] 