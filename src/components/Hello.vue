<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <div class="test">
      <a href="#/">点我</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to cc-admin',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.test {
    font-size: 28px;

    a {
      color: #42b983;
    }
}
</style>
