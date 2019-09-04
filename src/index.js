const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
  ctx.body = '<h1>docker 打包演示</h1>'
})

app.listen(3000)