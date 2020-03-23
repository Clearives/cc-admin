<template>
  <section>Music</section>
</template>

<script>
import { queryHighquality } from '../../api/api';

export default {
  data() {
    return {
      list: []
    };
  },
  methods: {},
  mounted() {
    queryHighquality().then((res) => {
      console.log(res);
    });
  }
};
</script>

<style lang="css">
</style>
