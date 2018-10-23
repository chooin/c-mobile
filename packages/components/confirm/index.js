import Vue from 'vue'
import Confirm from './confirm.vue'

export default (option = {}) => {
  if (
    typeof option === 'string' ||
    typeof option === 'number'
  ) {
    option = {
      text: `${option}`
    }
  }
  if (
    option &&
    option.button &&
    !Array.isArray(option.button)
  ) {
    option.button = [option.button]
  }
  option = Object.assign({
    title: '',
    text: '',
    button: [
      {
        text: 'OK',
        color: null,
        click () {}
      }
    ]
  }, option)

  const component = new Vue({
    render (h) {
      let button = []
      for (let i in option.button) {
        button.push({
          text: option.button[i].text,
          color: option.button[i].color,
          click: () => {
            if (option.button[i].click) option.button[i].click()
            this.hide()
          }
        })
      }
      return h(Confirm, {
        data () {
          return {
            pageYOffset: null
          }
        },
        props: {
          title: option.title,
          text: option.text,
          button
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
