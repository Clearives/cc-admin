<template>
  <div class="lifecycle-wrapper">
    <h2>vue2生命周期</h2>
    <div v-html="message">

    </div>
  </div>
</template>

<script>
let cycleArr = [];
let logInfo = (cycle, el, data, message) => {
  console.group(`${cycle} start`);
  cycleArr.push({
    el: el,
    data: data,
    message: message
  });
  console.log('%c%s', 'color:#f60', `el     : ${el}`);
  console.log('%c%s', 'color:#f60', `data   : ${data}`);
  console.log('%c%s', 'color:#f60', `message: ${message}`);
  console.log('%c%s', 'color:#f60', `cycleArr: ${cycleArr}`);
  console.groupEnd();
};
export default {
  name: 'Lifecycle',
  data() {
    return {
      message: '',
      cycleArr2: cycleArr
    };
  },
  beforeCreate: function () {
    console.log(this);
    logInfo('beforeCreate', this.$el, this.$data, this.message);
  },
  created: function () {
    logInfo('created', this.$el, this.$data, this.message);
    this.message += `<p>beforeCreate</p><p>created: ${new Date()}</p>`;
  },
  beforeMount: function () {
    logInfo('beforeMount', this.$el, this.$data, this.message);
    this.message += `<p>beforeMount: ${new Date()}</p>`;
  },
  mounted: function () {
    logInfo('mounted', this.$el, this.$data, this.message);
    this.message += `<p>mounted: ${new Date()}</p>`;
  },
  beforeUpdate: function () {
    logInfo('beforeUpdate', this.$el, this.$data, this.message);
  },
  updated: function () {
    logInfo('updated', this.$el, this.$data, this.message);
    // this.message += `<p>updated: ${new Date()}</p>`
  },
  beforeDestroy: function () {
    logInfo('beforeDestroy', this.$el, this.$data, this.message);
  },
  destroyed: function () {
    logInfo('destroyed', this.$el, this.$data, this.message);
  }
};
</script>

<style lang="less">
</style>
