import Vue from 'vue'
import Toast from './toast.vue'

export default (option = {}) => {
  if (
    typeof option === 'string' ||
    typeof option === 'number'
  ) {
    option = {
      text: [option]
    }
  } else if (Array.isArray(option)) {
    option = {
      text: option
    }
  } else if (
    typeof option.text === 'string' ||
    typeof option.text === 'number'
  ) {
    option.text = [option.text]
  }

  option = Object.assign({
    text: [],
    duration: 2000,
    cb () {}
  }, option)

  const component = new Vue({
    data () {
      return {
        timer: null,
        pageYOffset: null,
        visible: false
      }
    },
    render (h) {
      return h(Toast, {
        props: {
          text: option.text,
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
  const nodeList = document.querySelectorAll('.c-toast')
  for (var i = 0; i < nodeList.length; ++i) {
    nodeList[i].remove()
  }
  document.body.appendChild(component.$el)
}
