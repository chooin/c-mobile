/* eslint-disable */
let isBrowser = false
let isMiniProgram = false
let isMiniProgramIsIPhoneX = false
let isIPhoneX = false
let isNode = false
let Megalo = typeof Megalo === 'undefined' ? (typeof wx === 'undefined' ? false : wx) : Megalo

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

Megalo = isMiniProgram ? Megalo : false

export default {
  isBrowser,
  isMiniProgram,
  isMiniProgramIsIPhoneX,
  isIPhoneX,
  isNode,
  Megalo
}

export {
  isBrowser,
  isMiniProgram,
  isMiniProgramIsIPhoneX,
  isIPhoneX,
  isNode,
  Megalo
}
