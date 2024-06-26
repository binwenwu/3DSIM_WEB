import type { RouteRecordRaw } from "vue-router"
import { createRouter, createWebHashHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
  { name: "home", path: "/", component: () => import("./views/home.vue") },
  { name: "map", path: "/map", component: () => import("./views/blank-map.vue") }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
