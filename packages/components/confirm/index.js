import Vue from 'vue'
import Confirm from './confirm.vue'

export default (option = {}) => {
  option = Object.assign({
    title: '',
    text: '',
    ok: {
      text: 'OK',
      color: null,
      click () {}
    },
    cancel: {
      // text: 'Cancel',
      color: null,
      click () {}
    }
  }, option)

  const component = new Vue({
    render (h) {
      return h(Confirm, {
        data () {
          return {
            pageYOffset: null
          }
        },
        props: {
          title: option.title,
          text: option.text,
          ok: {
            text: option.ok.text || 'OK',
            color: option.ok.color,
            click: () => {
              this.hide()
              if (option.ok.click) option.ok.click()
            }
          },
          cancel: {
            text: option.cancel.text,
            color: option.cancel.color,
            click: () => {
              this.hide()
              if (option.cancel.click) option.cancel.click()
            }
          }
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
