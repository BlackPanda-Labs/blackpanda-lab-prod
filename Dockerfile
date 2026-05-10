FROM node:20-slim
RUN npm install -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install --no-frozen-lockfile
RUN cd artifacts/blackpanda && npx vite build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "artifacts/blackpanda/dist", "-p", "3000"]