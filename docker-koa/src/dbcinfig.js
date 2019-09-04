const mongoose = require('mongoose')

// const URL = 'mongodb://root:123456@localhost:27019/admin'
const URL = 'mongodb://root:123456@db:27019/admin'

const connect = function () {
  mongoose.connect(URL, {
    useNewUrlParser: true
  })
}

connect()

mongoose.connection.on('error', function (err) {
  if(err){
    console.error('启动mongoose报错啦～～～',err);
    setTimeout(connect, 5000);
  }
})

mongoose.connection.on('connected', function () {
  console.log('mongoose 链接成功');
})


const UerSchema = new mongoose.Schema({
  name: String,
  gender: Number,
  email: String
})

  
const User = mongoose.model('user', UerSchema)

// try {
//   const user = new User({
//     name:'测试' + Date.now(),
//     gender: 0,
//     email: 'xxx@hotels.cn'
//   })
  
//   user.save()
  
// } catch (error) {
//   console.log(error);
// }

module.exports = {
  User
}