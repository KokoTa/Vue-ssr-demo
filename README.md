# Vue ssr demo

## 说明

* Lesson-1：`vue-server-renderer` 是Vue SSR使用到的核心库，我们应该如何使用呢？

* Lesson-2：服务端发送需要避免状态单例，即每个连接返回的都应该是一个新的实例，我们应该如何实现呢？

* Lesson-3：服务端渲染以及数据预获取。[参考博客地址](https://github.com/youngwind/blog/issues/112)

* Lesson-4：官方服务端渲染demo。[文档地址](https://ssr.vuejs.org/zh/structure.html)

* Lesson-5：原生服务端渲染完成一个 TODO 应用。

* Lesson-6：使用 Nuxt 框架实现路由鉴权(Session/Token)。

* Lesson-7：使用 prerender-spa-plugin 完成部分页面预渲染。

## 注意事项

1. Lesson-1 ~ Lesson-4 基于 Webpack3，Lesson-5 基于 Webpack4

2. Lesson-1 ~ Lesson-3 的 package.json 放置在项目根目录下，其余的都是放置在各自目录中

3. Lesson-4 对 SSR 进行了大概的描述和实现。Lesson-5 其进行了更为高级和详细的编写

4. Lesson-6 使用了服务端渲染框架 Nuxt，用于实际的生产开发

5. Lesson-7 使用了预渲染，对于一些 “死” 数据的页面使用预渲染是一种不错的选择，但对于 “活” 数据的页面 SSR 才是唯一出路
