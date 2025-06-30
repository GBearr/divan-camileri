# syntax=docker/dockerfile:1

##################### 1) Tüm bağımlılıkları yükle #####################
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci                               # dev + prod

##################### 2) Build #####################
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build                        # .next/standalone + static

##################### 3) Sadece prod ile çalıştır #####################
FROM node:20-alpine AS runner
WORKDIR /app
# İsteğe bağlı: non-root kullanıcı
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Gerekli dosyalar
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]