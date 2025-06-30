# syntax=docker/dockerfile:1
######################## 1. Bağımlılıklar ########################
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev     # sadece prod bağımlılıkları

######################## 2. Derleme ########################
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build         # .next üretir

######################## 3. Çalıştırıcı ########################
FROM node:20-alpine AS runner
WORKDIR /app

# Güvenlik için non-root kullanıcı (opsiyonel)
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Sadece gerekli dosyalar
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node","server.js"]        # server.js artık kökte