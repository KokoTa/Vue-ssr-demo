<template>
    <div>
      <h3>这是page1</h3>
      <p>state里面的静态数据：{{staticData}}</p>
      <p>计算属性里的静态数据：{{staticComputed}}</p>
      <p>axios请求的数据list的长度为：{{listLength}}</p>
      <div v-for="(item, index) in list" :key="index">
        <h4>{{item.name}} - {{ item.date }}</h4>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  // 这个是配置head信息，vue-meta-info插进提供的功能
  // metaInfo: {
  //   title: 'page1',
  //   meta: [{
  //     name: 'keyWords',
  //     content: '这个页面是page1'
  //   }],
  //   link: [{
  //     rel: 'stylesheet',
  //     href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
  //   }]
  // },
  data () {
    return {
      staticData: '这是data里的静态数据',
      forComputed: 10,
      list: []
    }
  },
  mounted () {
    this.getList()
  },
  computed: {
    staticComputed () {
      return '这是计算属性里的静态数据' + this.forComputed * 66
    },
    listLength () {
      return this.list ? this.list.length : 0
    }
  },
  methods: {
    getList () {
      axios.get('https://www.easy-mock.com/mock/5c050e88f57279499b6ac0e9/test/getList').then(res => {
        this.list = res.data.data.list
        this.$nextTick(() => document.dispatchEvent(new Event('render-event')))
      })
    }
  }
}
</script>