import Vue from 'vue'
import Confirm from './src'

export default (option = {}) => {
  option = Object.assign({
    text: '',
    ok () {},
    cancel () {}
  }, option)

  const component = new Vue({
    render (h) {
      return h(Confirm, {
        props: {
          text: option.text,
          ok: () => {
            component.$el.remove()
            option.ok()
          },
          cancel: () => {
            component.$el.remove()
            option.cancel()
          }
        }
      })
    }
  }).$mount()

  document.body.appendChild(component.$el)
}
