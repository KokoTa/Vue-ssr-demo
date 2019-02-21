/**
 * 请求逻辑工具函数
 */
export const createError = (code, msg) => {
  const err = new Error(msg)
  err.code = code
  return err
}
