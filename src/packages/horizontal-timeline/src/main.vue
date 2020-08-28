<script>
  export default {
    name: 'ElHorizontalTimeline',
    props: {
      reverse: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        horizontaltimeline: this
      };
    },
    render() {
      const reverse = this.reverse;
      const classes = {
        'el-horizontal-timeline': true,
        'is-reverse': reverse
      };
      let slots = this.$slots.default || [];
      if (reverse) {
        slots = slots.reverse();
      }
      return (<ul class={ classes }>
        { slots }
      </ul>);
    }
  };
</script>