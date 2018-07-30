/* eslint-disable */
const isBrowser = typeof window !== 'undefined'
let systemInfo
if (!isBrowser) systemInfo = wx && wx.getSystemInfoSync()
const isMiniProgram = !isBrowser && systemInfo
const isMiniProgramIsIPhoneX = isMiniProgram && systemInfo.model.indexOf('iPhone X') > -1

export default {
  isBrowser,
  isMiniProgram,
  isMiniProgramIsIPhoneX
}

export {
  isBrowser,
  isMiniProgram,
  isMiniProgramIsIPhoneX
}
