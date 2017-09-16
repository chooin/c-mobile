export default (t, to) => {
  to = to ? to.to : t.to
  if (to) {
    if (typeof to === 'string' && to.indexOf('//') === 0) {
      window.location.href = to.substring(1)
    } else {
      if ((typeof to === 'string' && to.indexOf('/') === 0) || typeof to === 'object') {
        t.$router.push(to)
      } else {
        window.location.href = to
      }
    }
  } else {
    t.$emit('click')
  }
}
