import Vue from 'vue'

const app = new Vue({
  data: {
    text: 1
  },
  template: '<div>{{text}}</div>'
})

app.$mount('#app')

setInterval(() => {
  app.text += 1
}, 1000)
