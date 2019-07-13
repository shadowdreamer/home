<template>
  <v-dialog v-model="dialog" max-width="600" scrollable>
    <v-card >
      <v-card-title  class="title takane white--text" primary-title >
        关于本站
      </v-card-title>
      <v-card-text class="takane--text" >
        zaima？
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat color="takane"   @click="dialog=false">buzai cnm</v-btn>
      </v-card-actions>
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

