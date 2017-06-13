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
        this.pageYOffset = window.pageYOffset
        let body = document.body
        body.style.height = '100%'
        body.style.width = '100%'
        body.style.overflow = 'hidden'
        body.style.position = 'fixed'
      },
      hide () {
        this.$el.remove()
        option.cb()
        if (document.querySelectorAll('.c-toast').length === 0) {
          let body = document.body
          body.style.overflow = 'visible'
          body.style.position = 'static'
          console.log(this.pageYOffset)
          window.scroll(0, this.pageYOffset)
        }
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
