import Vue from 'vue'
import Tabs from './tabs'
import Tab from './tab'

export default () => {
  Vue.component(Tabs.name, Tabs)
  Vue.component(Tab.name, Tab)
}
