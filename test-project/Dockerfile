FROM node:14
WORKDIR /home/node/app
COPY package*.json jest-cache.test.ts tsconfig.json jest.config.ts ./
RUN npm ci
CMD ["sleep", "infinity"]
