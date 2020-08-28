import ElHorizontalTimelineItem from './src/item';

/* istanbul ignore next */
ElHorizontalTimelineItem.install = function(Vue) {
  Vue.component(ElHorizontalTimelineItem.name, ElHorizontalTimelineItem);
};

export default ElHorizontalTimelineItem;