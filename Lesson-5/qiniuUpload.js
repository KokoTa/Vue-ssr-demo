// 上传静态文件到CDN：https://developer.qiniu.com/kodo/sdk/1289/nodejs#upload-token
const qiniu = require('qiniu')
const fs = require('fs')
const path = require('path')
const appConfig = require('./app.config.js').cdn

const { ak, sk, bucket } = appConfig

const mac = new qiniu.auth.digest.Mac(ak, sk)

const config = new qiniu.conf.Config()
config.zone = qiniu.zone.Zone_z0

// 文件上传（表单方式）
// key 云端存储位置，file 本地文件位置
const doUpload = (key, file) => {
  const options = {
    scope: `${bucket}:${key}`
  }
  const formUploader = new qiniu.form_up.FormUploader(config)
  const putExtra = new qiniu.form_up.PutExtra()
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)

  return new Promise((resolve, reject) => {
    formUploader.putFile(uploadToken, key, file, putExtra, function (respErr,
      respBody, respInfo) {
      if (respErr) {
        return reject(respErr)
      }
      if (respInfo.statusCode === 200) {
        resolve(respBody)
      } else {
        reject(respBody)
      }
    })
  })
}

const publicPath = path.join(__dirname, './client-build')

// 递归上传
// dir 文件夹或文件的绝对路径，prefixPath 嵌套的文件夹的路径(如：client-build/resource)
const uploadAll = (dir, prefixPath) => {
  const filesName = fs.readdirSync(dir)
  filesName.forEach((fileName) => { // 可能是文件夹也可能是文件
    const localPath = path.join(dir, fileName) // 本地文件路径
    const remotePath = prefixPath ? `${prefixPath}/${fileName}` : fileName // 上传到远端的路径
    if (fs.lstatSync(localPath).isDirectory()) {
      return uploadAll(localPath, remotePath) // 如果是文件夹就递归
    }
    doUpload(remotePath, localPath)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

uploadAll(publicPath)
