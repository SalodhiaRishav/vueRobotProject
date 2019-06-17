<template>
  <div >    
        <div class="row">   
          <div class=col-4></div> 
      
             
        <img :src=headimagesrc alt="" class="col-4 part">
         
          <div class=col-4></div> 
        </div> 
        <div class="row">
         
              
        <img :src=leftimagesrc alt="" class="col-4 part leftarm">
            
        
        <img :src=torsoimagesrc alt="" class="col-4 part">
           
          
        <img :src=rightimagesrc alt="" class="col-4 part rightarm">

        </div>  
        <div class="row">
          <div class=col-4></div> 
         
        <img :src=baseimagesrc alt="" class="col-4 part">
            
          <div class=col-4></div> 
        </div>    
  </div>
</template>

<script>
import EventBus from './../eventbus';

export default {
  props:['robot'],
  components: {
    
  },
  data()
  {
     return{
         headimagesrc:this.robot.Head.src,
         leftimagesrc:this.robot.LeftArm.src,
         rightimagesrc:this.robot.RightArm.src,
         torsoimagesrc:this.robot.Torso.src,
         baseimagesrc:this.robot.Base.src
     }

  },
  created()
  {
      EventBus.$on('headchanged', data => {
       this.headimagesrc=data.src;      
          //console.log(this.robot.Head.title);

       })
       EventBus.$on('basechanged', data => {
        this.baseimagesrc=data.src   
       })
       EventBus.$on('leftarmchanged', data => {
         this.leftimagesrc=data.src;

       })
       EventBus.$on('rightarmchanged', data => {
         this.rightimagesrc=data.src;       
       })
       EventBus.$on('torsochanged', data => {
         this.torsoimagesrc=data.src;   
       })
     
  }
  
     
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.part
{
    height:100px;
    background-color: aquamarine;
}

.leftarm{
    transform: rotate(-90deg)

}

.rightarm
{
    transform: rotate(90deg)
}
</style>
