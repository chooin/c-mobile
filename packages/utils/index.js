import to from './to'

const getObjectType = v => Object.prototype.toString.call(v).slice(8, -1)

export {
  getObjectType,
  to
}
