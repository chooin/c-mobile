export default t => {
  if (t.to) {
    if (typeof t.to === 'string' && t.to.indexOf('//') === 0) {
      window.location.href = t.to.substring(1)
    } else {
      if ((typeof t.to === 'string' && t.to.indexOf('/') === 0) || typeof t.to === 'object') {
        t.$router.push(t.to)
      } else {
        window.location.href = t.to
      }
    }
  } else {
    t.$emit('click')
  }
}
