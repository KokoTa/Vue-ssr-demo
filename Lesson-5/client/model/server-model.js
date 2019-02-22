/**
 * 后端发送请求的 api 逻辑
 */
const dbInit = require('../../server/db/db.js')
const dbConfig = require('../../app.config.js').db
const dbRequestHandle = dbInit(dbConfig.appId, dbConfig.appKey)

export default {
  getAllTodos () {
    return dbRequestHandle.getAllTodos()
  }
}
