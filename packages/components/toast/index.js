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
      pageYOffset: null,
      visible: false
    },
    render (h) {
      return h(Toast, {
        props: {
          texts: option.texts,
          cb: () => {
            clearTimeout(this.timer)
            this.hide()
          },
          visible: this.visible
        }
      })
    },
    methods: {
      show () {
        this.visible = true
      },
      hide () {
        this.visible = false
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
