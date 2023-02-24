import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/Home.vue";
import ContactView from "../views/Contact/Contact.vue";
import About from "../views/About/About.vue";
import Portifolio from "../views/Portifolio/Portifolio.vue";
import Testimonials from "../views/Testimonials/Testimonials.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },

    {
      path: "/about",
      name: "about",
      component: About,
    },

    {
      path: "/portifoilio",
      name: "portifoilio",
      component: Portifolio,
    },

    {
      path: "/testimonials",
      name: "testimonials",
      component: Testimonials,
    },
  ],
});

export default router;
