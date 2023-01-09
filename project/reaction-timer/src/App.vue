<template>
  <div>
  <h1>Reaction timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <BlockBox :delay="delay" v-if="isPlaying" @end="end"></BlockBox>
  <ResultBox v-if="showResult" :score="score"/>
</div>
</template>

<script>

import BlockBox from "./components/Block-box.vue"
import ResultBox from "./components/Result-box.vue";
export default {
  name: 'App',
  data() {
    return {
      isPlaying:false,
      delay:null,
      score:0,
      showResult:false,
    }
  }, 
  components:{
    BlockBox,
    ResultBox
  },
  methods: {
    start(){
      this.delay=2000+(Math.random()*5000);
      this.isPlaying=true
    },
    end(reactionTime){
      this.score=reactionTime;
      this.isPlaying=false;
      this.showResult=true;
    }
  }, 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
