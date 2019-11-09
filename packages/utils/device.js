/* eslint-disable */
let isBrowser = false
let isMiniProgram = false
let isMiniProgramIsIPhoneX = false
let isIPhoneX = false
let isNode = false

if (typeof window !== 'undefined') {
  isBrowser = true
} else if (wx && wx.getSystemInfoSync()) {
  isMiniProgram = true
  if (wx.getSystemInfoSync().model.indexOf('iPhone X') > -1) {
    isMiniProgramIsIPhoneX = true
    isIPhoneX = true
  }
} else if (typeof global === 'object' && global['process']) {
  isNode = true
}

export default {
  isBrowser,
  isMiniProgram,
  isMiniProgramIsIPhoneX,
  isIPhoneX,
  isNode
}

export {
  isBrowser,
  isMiniProgram,
  isMiniProgramIsIPhoneX,
  isIPhoneX,
  isNode
}
