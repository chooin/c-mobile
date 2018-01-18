export default (vm, to) => {
  to = to ? to.to : vm.to
  if (to) {
    if (typeof to === 'string' && to.indexOf('//') === 0) {
      window.location.href = to.substring(1)
    } else {
      if ((typeof to === 'string' && to.indexOf('/') === 0) || typeof to === 'object') {
        vm.$router.push(to)
      } else {
        window.location.href = to
      }
    }
  } else {
    vm.$emit('click')
  }
}
