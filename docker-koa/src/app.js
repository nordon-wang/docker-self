/** 
 * 是为 docker项目做的服务
*/
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router  = require('koa-router')()
const cors = require('@koa/cors')

const {User}  = require('./dbcinfig')

const app = new Koa()

const main = async ctx => {
  ctx.body = 'hi 1'
}


app.use(cors())
app.use(bodyParser())

// app.use(main)
router.get('/', async (ctx, next) => {
  try {
    const {name, gender, email}  = ctx.query

    const user = new User({
      name, gender, email
    })

    const res = await user.save()
    ctx.body = {
      code: 200,
      res,
      msg: '成功'
    }
    
  } catch (error) {
    ctx.body = {
      code: 500,
      msg: '出错啦～～'
    }
  }
})

app.use(router.routes())
app.listen(3000)