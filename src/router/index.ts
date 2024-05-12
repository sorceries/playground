import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";
import BasicLayout from "@/layout/BasicLayout";

export const allRoutes = [
  {
    path: "/",
    name: "Home",
    meta: {
      locale: "HomePage",
    },
    component: BasicLayout,
    children: [...routes],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes,
});

export default router;
