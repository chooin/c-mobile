/* eslint-disable */
let isBrowser = false
let isMiniProgram = false
let isMiniProgramIsIPhoneX = false
let isIPhoneX = false
let isNode = false
let Megalo = Megalo || wx

if (typeof window !== 'undefined') {
  isBrowser = true
} else if (Megalo && Megalo.getSystemInfoSync()) {
  isMiniProgram = true
  if (Megalo.getSystemInfoSync().model.indexOf('iPhone X') > -1) {
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
