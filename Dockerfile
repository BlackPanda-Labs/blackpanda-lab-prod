FROM node:20-slim
RUN npm install -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install --no-frozen-lockfile
RUN cd artifacts/blackpanda && npx vite build
RUN npm install -g serve
CMD ["sh", "-c", "serve artifacts/blackpanda/dist -p ${PORT:-3000}"]