FROM registry.gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/main:latest as cache
# Ensure that a folder exists, if it doesn't our COPY command later on will fail
RUN mkdir -p /cache_nuxt

FROM node:16 AS builder
ARG ga_id
ENV GOOGLE_ANALYTICS_ID=$ga_id
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY --from=cache /cache_nuxt /app/node_modules/.cache/nuxt
COPY . .
RUN yarn run build

FROM nginx:stable-alpine
RUN apk upgrade --no-cache
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public /usr/share/nginx/html
# Copy compiled nuxt webpack assets. If nuxt doesn't need to recompile, we save
# about a minute or so in the build stage. nuxt is rather conservative with
# caching, so this is not a big concern:
# https://nuxtjs.org/announcements/nuxt-static-improvements/#excluding-files-from-cache
COPY --from=builder /app/node_modules/.cache/nuxt /cache_nuxt
