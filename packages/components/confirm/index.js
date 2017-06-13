import Vue from 'vue'
import Confirm from './src'

export default (option = {}) => {
  option = Object.assign({
    text: '',
    ok () {},
    cancel: null
  }, option)

  const component = new Vue({
    render (h) {
      return h(Confirm, {
        props: {
          text: option.text,
          ok: () => {
            this.hide()
            option.ok()
          },
          cancel: option.cancel ? () => {
            this.hide()
            option.cancel()
          } : null
        }
      })
    },
    methods: {
      show () {
        this.pageYOffset = window.pageYOffset
        let body = document.body
        body.style.height = '100%'
        body.style.width = '100%'
        body.style.overflow = 'hidden'
        body.style.position = 'fixed'
      },
      hide () {
        this.$el.remove()
        let body = document.body
        body.style.overflow = 'visible'
        body.style.position = 'static'
        window.scroll(0, this.pageYOffset)
      }
    },
    mounted () {
      this.show()
    }
  }).$mount()

  document.body.appendChild(component.$el)
}
