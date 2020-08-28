import HorizontalTimeline from './src/main';

HorizontalTimeline.install = function(Vue) {
  Vue.component(HorizontalTimeline.name, HorizontalTimeline);
};

export default HorizontalTimeline;