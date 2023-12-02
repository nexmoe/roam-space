# 第一阶段：构建阶段
FROM node:21.3.0-alpine as build

WORKDIR /src

# 将依赖项安装到单独的图层中
COPY package.json pnpm-lock.yaml .npmrc ./
RUN npm config set registry https://registry.npmmirror.com && \
    npm install -g pnpm && \
    pnpm install

# 复制应用程序代码并构建
COPY . .
RUN pnpm build

# 第二阶段：运行阶段
FROM node:21.3.0-alpine as base

EXPOSE 3000

WORKDIR /src

# 复制构建阶段生成的代码和依赖项（仅复制构建所需的文件和依赖项）
COPY --from=build /src/.output /src/.output

CMD [ "node", ".output/server/index.mjs" ]