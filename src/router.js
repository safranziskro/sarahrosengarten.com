import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Soon from "./views/Soon.vue";
import Works from './views/Works.vue';
import Writing from './views/Writing.vue';
import Work from './components/Work.vue';
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Soon",
      component: Soon
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/works",
      name: "Works",
      component: Works
    },
    {
      path: "/writing",
      name: "Writing",
      component: Writing
    },
    {
      path: "/work/:id",
      name: "Work",
      component: Work,
      props: true 
    }
  ]
});
