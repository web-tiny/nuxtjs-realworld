module.exports = {
  router: {
    // 自定义路由表规则
    linkActiveClass: 'active',
    extendRoutes (routes, resolve) {

      routes.splice(0)

      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '', // 默认子路由
              name: 'home',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              path: '/setting',
              name: 'setting',
              component: resolve(__dirname, 'pages/setting/')
            },
            {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/')
            },
          ]
        }
      ])
    }
  },
<<<<<<< HEAD
  // server: {
  //   host: "0.0.0.0",
  //   port: 6000
  // },
=======
  server: {
    host: "0.0.0.0",
    port: 6000
  },
>>>>>>> 7b6547a9304045b2cf93b6a8f17395cc404359bd
  plugins:[
    "~/plugins/request.js",
    "~/plugins/dayjs.js"
  ]
}
