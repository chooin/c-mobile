/* eslint-disable */
const isBrowser = typeof window !== 'undefined'
let systemInfo
if (!isBrowser) systemInfo = wx && wx.getSystemInfoSync()
const isMiniProgram = !isBrowser && systemInfo
const isMiniProgramIsIPhoneX = isMiniProgram && systemInfo.model.indexOf('iPhone X') > -1
const isIPhoneX = isMiniProgramIsIPhoneX

export default {
  isBrowser,
  isMiniProgram,
  isMiniProgramIsIPhoneX,
  isIPhoneX
}

export {
  isBrowser,
  isMiniProgram,
  isMiniProgramIsIPhoneX,
  isIPhoneX
}
