import Vue from 'vue'
import Loading from './loading.vue'

let component

export default {
  show (text) {
    component = new Vue({
      render (h) {
        return h(Loading, {
          props: {
            text
          }
        })
      }
    }).$mount()
    document.body.classList.add('c-mobile__is-loading')
    const nodeList = document.querySelectorAll('.c-loading')
    for (var i = 0; i < nodeList.length; ++i) {
      nodeList[i].remove()
    }
    document.body.appendChild(component.$el)
  },
  hide () {
    document.body.classList.remove('c-mobile__is-loading')
    const nodeList = document.querySelectorAll('.c-loading')
    for (var i = 0; i < nodeList.length; ++i) {
      nodeList[i].remove()
    }
  }
}
