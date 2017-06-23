import Vue from 'vue'
import Toast from './src'

export default (option = {}) => {
  if (typeof option === 'string') {
    option = {
      texts: [option]
    }
  } else if (Array.isArray(option)) {
    option = {
      texts: option
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
      timer: null,
      pageYOffset: null
    },
    render (h) {
      return h(Toast, {
        props: {
          texts: option.texts,
          cb: () => {
            clearTimeout(this.timer)
            this.hide()
          }
        }
      })
    },
    methods: {
      show () {
        document.querySelectorAll('.c-toast').forEach(el => {
          el.remove()
        })
      },
      hide () {
        this.$el.remove()
        option.cb()
      }
    },
    mounted () {
      this.show()
      this.timer = setTimeout(() => {
        this.hide()
      }, option.duration)
    }
  }).$mount()

  document.body.appendChild(component.$el)
}
