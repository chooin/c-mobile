import Vue from 'vue'
import Toast from './src';

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
            option.cb()
            component.$el.remove()
          }
        }
      })
    },
    mounted () {
      document.querySelectorAll('.c-toast').forEach(el => { el.remove() })
      this.timer = setTimeout(() => {
        option.cb()
        component.$el.remove()
      }, option.duration)
    }
  }).$mount()

  document.body.appendChild(component.$el)
}
