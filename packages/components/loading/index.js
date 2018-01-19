import Vue from 'vue'
import Loading from './src'

let component

export default {
  show () {
    component = new Vue({
      render (h) {
        return h(Loading)
      }
    }).$mount()
    for (let _ of document.querySelectorAll('.c-loading')) _.remove()
    document.body.appendChild(component.$el)
  },
  hide () {
    for (let _ of document.querySelectorAll('.c-loading')) _.remove()
  }
}
