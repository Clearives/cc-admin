<template>
  <div class="com">
    <h1>vue2 组件通信</h1>
    <Parent/>
  </div>
</template>

<script>
import Parent from './communication/Parent.vue'
export default {
  name: 'Communication',
  components: {
   Parent
 },
}
</script>

<style lang="less" scoped>
</style>
