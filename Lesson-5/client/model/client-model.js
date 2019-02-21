/**
 * 客户端发送请求的逻辑。即将 action 中的逻辑拆出来
 */
import axios from 'axios'
import { createError } from './util'

const request = axios.create({
  baseURL: '/'
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request
      .then((res) => {
        console.log(res)
        const data = res.data
        if (!data) {
          return reject(createError(400, 'no data')) // 这里要 return 否则后面的逻辑会继续进行
        }
        if (!data.sccuess) {
          return reject(createError(400, data.message))
        }
        resolve(data.data)
      })
      .catch((err) => { // axios 除了 200 - 300 之间的状态吗都会直接报错
        const res = err.response
        if (res.status === 401) {
          return reject(createError(401, 'need auth'))
        }
      })
  })
}

export default {
  getAllTodos () {
    return handleRequest(request.get('/api/todos'))
  }
}
