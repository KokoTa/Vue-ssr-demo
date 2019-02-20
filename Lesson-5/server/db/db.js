/**
 * apiCloud 云端数据库操作
 */
const sha1 = require('sha1')
const axios = require('axios')

const className = 'Todo' // 云端数据库具体类名

const request = axios.create({
  baseURL: 'https://d.apicloud.com/mcm/api'
})

const createError = (code, rest) => {
  const error = new Error(rest.message)
  error.code = code
  return error
}

const handleRequest = ({ status, data, ...rest }) => {
  if (status === 200) {
    return data
  } else {
    return createError(status, rest)
  }
}

module.exports = (appId, appKey) => {
  const getHeaders = () => {
    const now = Date.now()
    const secret = sha1(`${appId}UZ${appKey}UZ${now}`)
    return {
      'X-APICloud-AppId': appId,
      'X-APICloud-AppKey': `${secret}.${now}`
    }
  }

  return {
    async getAllTodos () {
      // 把请求后的结果交给 handle 函数处理
      return handleRequest(
        await request.get(`/${className}`, {
          headers: getHeaders()
        })
      )
    },
    async addTodo (todo) {
      return handleRequest(
        await request.post(`/${className}`, todo, {
          headers: getHeaders()
        })
      )
    },
    async updateTodo (id, todo) {
      return handleRequest(
        await request.put(`/${className}/${id}`, todo, {
          headers: getHeaders()
        })
      )
    },
    async deleteTodo (id, todo) {
      return handleRequest(
        await request.delete(`/${className}/${id}`, {
          headers: getHeaders()
        })
      )
    },
    async deleteCompleted (ids) {
      const requests = ids.map((id) => {
        return {
          method: 'delete',
          path: `/mcm/api/${className}/${id}`
        }
      })
      return handleRequest(
        // 调用云端的批量操作API
        await request.post('/batch', {
          requests
        }, {
          headers: getHeaders()
        })
      )
    }
  }
}
