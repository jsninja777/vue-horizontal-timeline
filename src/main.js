import Vue from 'vue'
import ElementUI from 'element-ui'
import HorizontalTimeline from './packages/horizontal-timeline'
import HorizontalTimelineItem from './packages/horizontal-timeline-item'
import 'element-ui/lib/theme-chalk/index.css'
import './packages/index.css'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(HorizontalTimeline)
Vue.use(HorizontalTimelineItem)

new Vue({
  el: '#app',
  render: h => h(App)
})
