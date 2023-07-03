<template>
  <div id="home">
    
    <HelloWorld msg=""/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>

<style lang="scss" scoped>
 #home{
  width: auto;
  height: auto;
  background-color: #064F51;
 }
</style>

