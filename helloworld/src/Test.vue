<template>
<div id="test">123123
  <div class="example">{{ msg }}
      <span class="ex">123</span>  
      <span class="ex">123</span>  
  </div></div>
</template>

<script>
export default {
    name: 'test',
    el: '#test',
    data() {
        return {
            msg: 'Hello world!'
        }
    }
}
</script>

<style lang="scss">
@import "./scss/index.scss";
.example {
  color: $color-red;
  background: url("./assets/images/test.jpg");
  .ex {
    color: green;
  }
}
</style>