<template>
  <v-dialog v-model="dialog" max-width="600" scrollable>
    <v-card>
      <v-card-text>dqweqw</v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
   data:()=>({
       dialog:false
   }),
   props:['showAbout'],
   watch:{
     showAbout(){
       if(this.showAbout)this.dialog = true
     },
     dialog(){
       if(!this.dialog)this.$emit('close')
     }
   }
};
</script>

