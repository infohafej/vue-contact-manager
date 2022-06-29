<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Add Contact</p>
        <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea odio voluptas fugit repellendus quia quod modi quibusdam sequi, amet, officia illum, magnam similique! Dolore sed facilis natus vero, ducimus earum?</p>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="addContact()">
         <div class="mb-2">
          <input v-model="contact.name" type="text" class=" form-control" placeholder="Name">
         </div>
         <div class="mb-2">
          <input v-model="contact.email" type="email" class=" form-control" placeholder="Email">
         </div>
         <div class="mb-2">
          <input v-model="contact.photo" type="text" class=" form-control" placeholder="Photo URL">
         </div>
         <div class="mb-2">
          <input v-model="contact.mobile" type="number" class=" form-control" placeholder="Mobile">
         </div>
         <div class="mb-2">
          <input v-model="contact.company" type="text" class=" form-control" placeholder="Company">
         </div>
         <div class="mb-2">
          <input v-model="contact.title" type="text" class=" form-control" placeholder="Title">
         </div>
         <div class="mb-2">
          <select v-model="contact.group_id" class=" form-control" v-if="groups.length > 0">
            <option value="">Select group</option>
             <option :value="group.id" v-for="group of groups" :key="group.id">{{group.name}}</option>
          </select>
         </div>
         <div class="mb-2">
          <input type="submit" class=" btn btn-success" value="Create">
         </div>
        </form>
      </div>
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-img">
      </div>
    </div>
    
  </div>
</template>

<script>
import {ContactService} from '@/services/ContactService'
export default {
    name :'AddContact',
    data : function (){
      return {
        contact:{
          name : '',
          email : '',
          company : '',
          title : '',
          photo : '',
          mobile : '',
          group_id : ''

        },
        groups:[]
      }
    },
    created : async function (){
      try{
        let response = await ContactService.getAllGroups();
        this.groups = response.data;
      }
      catch(error){
        console.log(error)
      }
    },
    methods : {
      addContact : async function (){
        try{
          let response = await ContactService.createContact(this.contact);
          if(response){
            return this.$router.push('/');
          }else{
            return this.$router.push('/contact/add');
          }
        }
        catch(error){
          console.log(error)
        }
      }
    }
}
</script>

<style>

</style>