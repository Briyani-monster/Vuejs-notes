<template >
    <div v-if="showBlock" class="block" @click.self="stopTimer">
        click Me
    </div>
</template>
<script>
export default {
    name:"BlockBox",
    props:["delay","end"],
    data() {
        return {
            showBlock:false,
            timer:null,
            reactionTime:0,
        }
    },
    mounted() {
        setTimeout(()=>this.showBlock=true,this.delay)
        this.startTimer();
    },
    methods: {
    startTimer(){
        this.timer=setInterval(()=>this.reactionTime+=10,10)
    },
    stopTimer(){
        clearInterval(this.timer)
        this.showBlock=false;
        this.$emit("end",this.reactionTime)
        console.log(this.reactionTime)
    }   
    },
    
}
</script>
<style >
    .block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>