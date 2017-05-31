import Vue from 'vue'
const main = Vue.extend(require('./src'))

const Toast = (option = {
  duration: 2000
}) => {
  if (typeof option === 'string') {
    option = {
      texts: [option]
    }
  }

  Object.assign({
    texts: [],
    duration
  }, option)

  document.body.appendChild(main.$mount())
}
