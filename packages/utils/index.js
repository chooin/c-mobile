import to from './to'

const getObjectType = v => Object.prototype.toString.call(v).slice(8, -1)
const UA = window.navigator.userAgent.toLowerCase()
const isIPhoneX = /iphone/.test(UA) &&
                  (
                    window.screen.height === 812 &&
                    window.screen.width === 375
                  )

export {
  getObjectType,
  to,
  isIPhoneX
}
