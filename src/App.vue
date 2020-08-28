<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="block">
      <div class="radio">
        Order: 
        <el-radio-group v-model="reverse">
          <el-radio :label="true">descending</el-radio>
          <el-radio :label="false">ascending</el-radio>
        </el-radio-group>
      </div>

      <el-horizontal-timeline :reverse="reverse">
        <el-horizontal-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :placement="activity.placement"
          :timestamp="activity.timestamp">
          {{activity.content}}
        </el-horizontal-timeline-item>
      </el-horizontal-timeline>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: true,
      activities: [{
        content: 'Custom icon',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more',
        placement: 'top'
      }, {
        content: 'Custom color',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87'
      }, {
        content: 'Custom size',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        content: 'Default node',
        timestamp: '2018-04-03 20:46'
      }]
    };
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
