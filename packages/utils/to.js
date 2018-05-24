export default ({
  vm,
  to,
  replace
}) => {
  if (to) {
    if (
      typeof to === 'string' &&
      to.indexOf('//') === 0
    ) {
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
      ) {
        if (replace) {
          vm.$router.replace(to)
        } else {
          vm.$router.push(to)
        }
      } else {
        window.location.href = to
      }
    }
  } else {
    vm.$emit('click')
  }
}
