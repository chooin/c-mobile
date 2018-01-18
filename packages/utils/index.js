import to from './to'

const UA = window.navigator.userAgent.toLowerCase()
const isIPhoneX = /iphone/.test(UA) &&
                  (
                    window.screen.height === 812 &&
                    window.screen.width === 375
                  )

export {
  to,
  isIPhoneX
}
