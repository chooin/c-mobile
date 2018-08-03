import { isBrowser, isMiniProgram } from './device'
import getObjectType from './get-object-type'

const miniProgramTo = to => {
  let search = ''
  let uri
  if (getObjectType(to) === 'String') {
    uri = to
  } else if (
    getObjectType(to) === 'Object' &&
    to.path
  ) {
    uri = to.path
  }
  if (
    getObjectType(to) === 'Object' &&
    getObjectType(to.query) === 'Object' &&
    Object.keys(to.query).length > 0
  ) {
    let querys = []
    for (let i in to.query) {
      querys.push(`${i}=${to.query[i]}`)
    }
    search = `?${querys.join('&')}`
  }
  return `${uri}${search}`
}

/* eslint-disable */
export default ({
  vm,
  to,
  replace,
  success,
  fail,
  complete
}) => {
  if (to) {
    if (isBrowser) { // 浏览器
      if (
        typeof to === 'string' &&
        to.indexOf('//') === 0
      ) { // 字符串
        to = to.indexOf('.') > -1
          ? to
          : to.substring(1)
        if (replace) {
          window.location.replace(to)
        } else {
          window.location.href = to
        }
      } else {
        if (
          (
            typeof to === 'string' &&
            to.indexOf('/') === 0
          ) ||
          typeof to === 'object'
        ) { // Vue router 操作
          if (replace) {
            vm.$router.replace(to)
          } else {
            vm.$router.push(to)
          }
        } else { // 其他，如：拨打电话、发送邮件
          if (replace) {
            window.location.replace(to)
          } else {
            window.location.href = to
          }
        }
      }
    } else if (isMiniProgram) { // 小程序
      if (
        typeof to === 'string' &&
        to.indexOf('tel:') === 0
      ) { // 拨打电话
        wx.makePhoneCall({
          phoneNumber: to.replace('tel:')
        })
      } else {
        let url = miniProgramTo(to)
        success = success ? success : () => {}
        fail = fail ? fail : () => {}
        complete = complete ? complete : () => {}
        if (replace) {
          wx.redirectTo({
            url,
            success,
            fail,
            complete,
          })
        } else {
          wx.navigateTo({
            url,
            success,
            fail,
            complete,
          })
        }
      }
    }
  } else {
    vm.$emit('click')
  }
}
