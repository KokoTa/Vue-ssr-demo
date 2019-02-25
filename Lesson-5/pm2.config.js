module.exports = {
  apps: [{
    name: 'vue-ssr-todo',
    script: './server/server.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      HOST: 'localhost', // 只允许本地访问，不让外网访问
      PORT: 8888
    }
  }]
}
