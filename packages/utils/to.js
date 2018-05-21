export default ({
  vm,
  to,
  replace
}) => {
  if (to) {
    if (typeof to === 'string' && to.indexOf('//') === 0) {
      if (replace) {
        window.location.replace(to.substring(1))
      } else {
        window.location.href = to.substring(1)
      }
    } else {
      if ((typeof to === 'string' && to.indexOf('/') === 0) || typeof to === 'object') {
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
