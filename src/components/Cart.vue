<template>


  <div>
   <ul class="list-group">
       <li class="list-group-item" v-for="item in cart">Robot-Name : {{item.name}} <br>Robot-Cost : {{item.cost}}</li>
   </ul>
  </div>
</template>

<script>
import EventBus from './../eventbus';

export default {
    data(){
        return {
            
            cart:[]
        }
    },
  components: {
    
  },
  created()
  {
       EventBus.$on('itemadded', data => {
           this.cart.push(data);
});
  }
     
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
