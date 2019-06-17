<template>
  <div>
      <button @click="showPrevious">&#9668;</button>
      
       <img :src=currentSelectedPart.src alt="" style="height:100px;width:100px">  

    
      <button @click="showNext">&#9658;</button>
  </div>
</template>

<script>
import parts from './../parts'
import EventBus from './../eventbus'


export default {
    props:['partname','eventname'],

 data(){
  
         return{
             dataFetched:false,
          parts:null,  
         currentSelectedPart:null,
          currentSelectedIndex:0
         }
 
     },
     created()
     {
       this.parts=parts[this.partname]
       this.currentSelectedPart = this.parts[0];
       this.dataFetched=true;
     },
     methods:{
       showNext()
       {

         let partsLength=this.parts.length;
          if(this.currentSelectedIndex===partsLength-1)
          {
            this.currentSelectedIndex=0;
            
          }else
          {
             this.currentSelectedIndex++
          }
         this.currentSelectedPart=this.parts[this.currentSelectedIndex];
       
        EventBus.$emit(this.eventname,this.currentSelectedPart);
         return

       },
       showPrevious()
       {
         let partsLength=this.parts.length;
          if(this.currentSelectedIndex===0)
          {
            this.currentSelectedIndex=partsLength-1;
            
          }else
          {
             this.currentSelectedIndex--;
          }
         this.currentSelectedPart=this.parts[this.currentSelectedIndex];
         
          EventBus.$emit(this.eventname,this.currentSelectedPart);
         return

       }
     }
     
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
