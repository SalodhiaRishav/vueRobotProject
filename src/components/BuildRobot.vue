<template>


  <div >
    <div class="container">
     <div class="row">
       <div class="col-8">
        <div class="row">   
          <div class=col-4></div> 
          <robot-part partname="heads" eventname="headchanged" class="col-4"></robot-part>
          <div class=col-4></div> 

        </div> 
        <div class="row">

            <robot-part partname="arms" eventname="leftarmchanged" class="col-4 leftarm"></robot-part>
          <robot-part partname="torsos" eventname="torsochanged" class="col-4"></robot-part>  
          <robot-part partname="arms" eventname="rightarmchanged" class="col-4 rightarm"></robot-part>
        </div>
        <div class="row">
          <div class=col-4></div> 
          <robot-part partname="bases" eventname="basechanged" class="col-4"></robot-part>
          <div class=col-4></div> 
        </div>    
    </div>
    <div class="col-4">
      <div >
       <!-- <cart> </cart> -->
       <robot-preview :robot="robot"></robot-preview>
      </div>
    </div>
     </div>
    
    </div>
    

<div>
  <button @click="AddToCart">Add To Cart</button>
</div>
<cart></cart>
 
  </div>
</template>

<script>
import parts from './../parts'
import RobotPart from './RobotPart.vue';
import EventBus from './../eventbus';
import RobotPreview from './RobotPreview.vue';
import Cart from './Cart.vue';


export default {
  
  data()
  {
    return{
      robot:{},
      selectedHead:parts.heads[0],
      selectedBase:parts.bases[0],
      selectedTorso:parts.torsos[0],
      selectedLeftArm:parts.arms[0],
      selectedRightArm:parts.arms[0]
    }
  },

  components: {
    Cart,
    RobotPart,
    RobotPreview
  },
  created()
  {
       EventBus.$on('headchanged', data => {
         this.selectedHead=data;         
       })
       EventBus.$on('basechanged', data => {
         this.selectedBase=data;         
       })
       EventBus.$on('leftarmchanged', data => {
         this.selectedLeftArm=data;         
       })
       EventBus.$on('rightarmchanged', data => {
         this.selectedRightArm=data;         
       })
       EventBus.$on('torsochanged', data => {
         this.selectedTorso=data;         
       })
        this.robot.Base=this.selectedBase;
         this.robot.RightArm=this.selectedRightArm;
         this.robot.LeftArm=this.selectedLeftArm
         this.robot.Head=this.selectedHead;
         this.robot.Torso=this.selectedTorso;

  },
     methods:{
       AddToCart()
       {
         let cost=this.selectedHead.cost+this.selectedBase.cost+this.selectedTorso.cost+this.selectedLeftArm.cost+this.selectedRightArm.cost;
         let RobotName=this.selectedHead.title;
         let Robot = new Object();
         Robot.Base=this.selectedBase;
         Robot.RightArm=this.selectedRightArm;
         Robot.LeftArm=this.selectedLeftArm
         Robot.Head=this.selectedHead;
         Robot.Torso=this.selectedTorso;
         console.log(Robot);
         EventBus.$emit('itemadded',{'name':RobotName,'cost':cost})
       },
       doSomething()
       {
         console.log('something happend')
       }
     }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.robotpart{
  height: 40%;
  width: 30%;
  background-color: aliceblue
}
.cartpart
{
  height: 40%;
  width: 30%;
  background-color: antiquewhite
}
/* .leftarm
{
transform: rotate(-90deg);
}
.rightarm
{
transform: rotate(90deg);
} */

</style>
