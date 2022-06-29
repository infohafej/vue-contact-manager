<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">View Contact</p>
        <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea odio voluptas fugit repellendus quia quod modi quibusdam sequi, amet, officia illum, magnam similique! Dolore sed facilis natus vero, ducimus earum?</p>
      </div>
    </div>
  </div>
   <!---Spinner ---->
  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <Spinner/>
        </div>
      </div>
    </div>
  </div>

  <!---Error ---->
  <div v-if="!loading && errorMessage">
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h2 text-danger fw-bold">{{errorMessage}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-img">
      </div>
      <div class="col-md-6">
        <ul class=" list-group">
            <li class=" list-group-item">Name : <span class=" fw-bold">{{contact.name}}</span></li>
            <li class=" list-group-item">E-mai : <span class=" fw-bold">{{contact.email}}</span></li>
            <li class=" list-group-item">Mobile : <span class=" fw-bold">{{contact.mobile}}</span></li>
            <li class=" list-group-item">Company : <span class=" fw-bold">{{contact.company}}</span></li>
            <li class=" list-group-item">Title : <span class=" fw-bold">{{contact.title}}</span></li>
            <li class=" list-group-item">Group : <span class=" fw-bold">{{group.name}}</span></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link to="/" class=" btn btn-success"><i class=" fa fa-arrow-alt-circle-left"></i> Back</router-link>
      </div>
      
    </div>
  </div>
  
</template>

<script>
import {ContactService} from '@/services/ContactService'
import Spinner from '../components/Spinner.vue'
export default {
    name : 'ViewContact',
    components: {
      Spinner
    },
    data : function (){
      return {
        contactId : this.$route.params.contactId,
        contact : {},
        group :{},
        loading : false,
        errorMessage : null
      }
    },
    created : async function (){
      try{
        this.loading = true;
        let response = await ContactService.getContact(this.contactId);
        let groupResponse = await ContactService.getGroup(response.data);
        this.contact = response.data;
        this.group = groupResponse.data;
        this.loading = false
      } 
      catch (error){
        this.errorMessage = error
        this.loading = false
      }
      
    }
}
</script>

<style>

</style>