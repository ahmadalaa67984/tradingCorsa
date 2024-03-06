import { createRouter, createWebHistory } from 'vue-router';
import RigesterPage from './views/RigesterPage.vue';
import HomePage from './views/HomePage.vue';
import CoursesPage from './views/CoursesPage.vue';
import OurServicesPage from './views/OurServicesPage.vue';
import Toolspage from './views/Toolspage.vue';
import ContactUsPage from './views/ContactUsPage.vue';
import TradingPage from './views/TradingPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/rigester',
    name: 'rigister',
    component: RigesterPage
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesPage
  },
  {
    path:'/ourservices',
    name:'OurServicesPage',
    component:OurServicesPage
  },
  {
    path:'/tools',
    name:'tools',
    component:Toolspage
  },
  {
    path:'/contactus',
    name:'contactus',
    component:ContactUsPage
  },
  {
    path:'/trading',
    name:'trading',
    component:TradingPage 
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;