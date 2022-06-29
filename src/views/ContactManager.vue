<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Contact Manager
          <router-link to="/contact/add" class="btn btn-success btn-sm"><i class="fa fa-plus-circle"></i> Add New</router-link>
        </p>
        <p class="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe asperiores laborum eaque! Sequi quia labore saepe ea praesentium minima! Omnis, ut corrupti? Officiis officia, doloremque explicabo deleniti odio voluptate minima.</p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                <input type="text" class="from-control" placeholder="Search Name">
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark">
                </div>
              </div>
            </div>
          </div>
         
        </form>
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
  
  <div class="container mt-3" v-if="contacts.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="contact of contacts" :key="contact">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img :src="contact.photo" alt="" class="contact-img">
              </div>
              <div class="col-sm-7">
                <ul class=" list-group">
                  <li class=" list-group-item">Name : <span class=" fw-bold">{{contact.name}}</span></li>
                  <li class=" list-group-item">E-mai : <span class=" fw-bold">{{contact.email}}</span></li>
                  <li class=" list-group-item">Mobile : <span class=" fw-bold">{{contact.mobile}}</span></li>
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column align-items-center justify-content-center">

                <router-link :to="`/contact/view/${contact.id}`" class=" btn btn-warning my-1">
                  <i class="fa fa-eye"></i>
                </router-link>

                <router-link :to="`/contact/view/${contact.id}`" class=" btn  btn-primary my-1">
                  <i class="fa fa-pen"></i>
                </router-link>

                <button class=" btn btn-danger my-1">
                  <i class=" fa fa-trash"></i>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
import {ContactService} from '@/services/ContactService'
import Spinner from '../components/Spinner.vue'
export default {
    name : 'ContactManager',
    components: {
      Spinner
    },

    data : function () {
      return {
        loading : false,
        contacts : [],
        errorMessage : null
      }
    },
    created : async function (){
      try{
        this.loading = true;
        let response = await ContactService.getAllContacts();
        this.contacts = response.data;
        this.loading = false;
      }
      catch(error){
        this.errorMessage = error;
        this.loading = false;
      }
    }
    

}
</script>

<style>

</style>