<template>
  <li class="el-horizontal-timeline-item">
    <div class="el-horizontal-timeline-item__tail"></div>
    <el-popover
      width="200"
      trigger="hover"
      :placement="placement"
    >
      <div v-if="!$slots.dot"
        class="el-horizontal-timeline-item__node"
        :class="[
          `el-horizontal-timeline-item__node--${size || ''}`,
          `el-horizontal-timeline-item__node--${type || ''}`
        ]"
        :style="{
          backgroundColor: color
        }"
        slot="reference"
      >
        <i v-if="icon"
          class="el-timeline-item__icon"
          :class="icon"
        ></i>
      </div>
      <div v-if="$slots.dot" class="el-timeline-item__dot" slot="reference">
        <slot name="dot"></slot>
      </div>
      <div class="el-timeline-item__wrapper">
        <div v-if="!hideTimestamp && placement === 'top'"
          class="el-timeline-item__timestamp is-top">
          {{timestamp}}
        </div>

        <div class="el-timeline-item__content">
          <slot></slot>
        </div>

        <div v-if="!hideTimestamp && placement === 'bottom'"
          class="el-timeline-item__timestamp is-bottom">
          {{timestamp}}
        </div>
      </div>
    </el-popover>
  </li>
</template>

<script>
  export default {
    name: 'ElHorizontalTimelineItem',
    inject: ['horizontaltimeline'],
    props: {
      timestamp: String,
      hideTimestamp: {
        type: Boolean,
        default: false
      },
      placement: {
        type: String,
        default: 'bottom'
      },
      type: String,
      color: String,
      size: {
        type: String,
        default: 'normal'
      },
      icon: String
    }
  };
</script>