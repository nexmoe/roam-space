# Roam Space （正在积极开发中）

集合在互联网关于你的一切

## Feature

- Rsshub
- Social Button
- SEO 良好
- 集成 S3 来做静态资源持久化

## 极低的维护负担

配置如下内容，然后 Roam Space 将为你生成成百上千个关于你的页面

<https://github.com/nexmoe/roam-space/blob/c2ae01487c388d2a48868b1876c6518a279d11e1/config/flow.json>

## 不是什么

- 不是 Hexo、WordPress 之类的 CMS
- 不是博客
- 不是 Linktree、Bento 之类的模块化组装链接页

## Preview

![image](https://github.com/nexmoe/roam-space/assets/16796652/599b6dfc-92c4-4c3f-bf68-2ef94c8a1ffd)

## 设计概念

### Space

### Flow

### Module

## 技术栈

1. **Nuxt 3**: 基于 Vue.js 的高性能框架，用于构建服务端渲染（SSR）和静态生成（SSG）的应用。`nuxt`、`@nuxt/image`、`@nuxt/test-utils`、`@nuxt/html-validator`、`@nuxtjs/google-fonts`、`@nuxtjs/i18n`、`@nuxtjs/seo`、`@nuxtjs/tailwindcss`、`@nuxtjs/web-vitals`、`nuxt-gtag`、`nuxt-icon`、`nuxt-scheduler` 和 `nuxt-svgo` 等。

2. **Prisma**: 一个类型安全的 ORM（对象关系映射器），用于 Node.js 和 TypeScript，用于数据库交互。项目中使用了`@prisma/client` 和 `prisma` 进行数据库操作，以及`prisma generate`命令来生成数据库访问客户端代码。

3. **TRPC (Tanner's Request/Response Protocol)**: 一种用于构建 API 的类型安全的请求响应协议。项目使用了`@trpc/client` 和 `@trpc/server` 来处理 API 请求。

4. **Pinia**: Vue 的状态管理库，用以替代 Vuex，提供更简单的状态管理方案。项目中使用了`pinia` 和 `@pinia/nuxt`。

5. **TypeScript**: 强类型的 JavaScript 超集，用于提升代码质量。项目中通过`typescript`和相关配置进行类型检查。

6. **Tailwind CSS**: 一个实用优先的 CSS 框架，用于快速构建界面。项目使用了`tailwindcss-animate`和自定义配置。

7. **VueUse**: 一套 Vue 实用函数库，提供了很多有用的 Vue Composition API 工具。项目中使用了`@vueuse/nuxt`。

8. **ESLint**: 代码质量检查工具，确保代码风格一致性和最佳实践。项目中配置了 ESLint 及其相关插件如`@nuxtjs/eslint`。

9. **Husky**: 用于在 Git 提交前运行脚本的工具，常用于代码质量检查。项目中使用了`husky`来执行这些钩子。

10. **AWS SDK v3**: 用于与 Amazon Web Services 交互的库，特别是项目中使用了`@aws-sdk/client-s3`来操作 S3 存储服务。

11. **其他辅助库和技术**：包括`sharp`用于图片处理，`clsx`用于类名管理，`zod`进行输入验证，`dayjs`处理日期和时间，`uuid`生成唯一 ID 等。

采用现代前端技术栈开发的 Web 应用，侧重于性能优化、可维护性和开发效率，结合了服务端渲染、静态站点生成、数据库操作、状态管理、测试自动化等多种功能。
