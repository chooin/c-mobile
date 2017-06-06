import Vue from 'vue'
import Toast from './src'

export default (option = {}) => {
  if (typeof option === 'string') {
    option = {
      texts: [option]
    }
  } else if (typeof option.texts === 'string') {
    option.texts = [option.texts]
  }

  option = Object.assign({
    texts: [],
    duration: 2000,
    cb () {}
  }, option)

  const component = new Vue({
    data: {
      timer: null
    },
    render (h) {
      return h(Toast, {
        props: {
          texts: option.texts,
          cb: () => {
            clearTimeout(this.timer)
            component.$el.remove()
            option.cb()
          }
        }
      })
    },
    mounted () {
      document.querySelectorAll('.c-toast').forEach(el => { el.remove() })
      this.timer = setTimeout(() => {
        component.$el.remove()
        option.cb()
      }, option.duration)
    }
  }).$mount()

  document.body.appendChild(component.$el)
}
