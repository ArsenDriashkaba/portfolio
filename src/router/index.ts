import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const lazyLoadPage = (pageComponent: string) => {
  return () => import(`@/pages/${pageComponent}/${pageComponent}.vue`);
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.main(),
      name: "main",
      component: lazyLoadPage("Main"),
    },
  ],
});

export default router;
