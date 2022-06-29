import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactManager from '../views/ContactManager.vue'
import AddContact from '../views/AddContact.vue'
import ViewContact from '../views/ViewContact.vue'
import EditContact from '../views/EditContact.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/contact',
    component: Home
  },
  {
    path: '/contact',
    name: 'ContactManager',
    component: ContactManager
  },
  {
    path: '/contact/add',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/contact/view/:contactId',
    name: 'ViewContact',
    component: ViewContact
  },
  {
    path: '/contact/edit/:contactId',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
