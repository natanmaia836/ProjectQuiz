const routes = [
  {
    path: "/",
    name: "selecione",
    component: () => import("pages/SelecionePage.vue"),
  },

  {
    path: "/hp-quiz",
    name: "hp-quiz",
    component: () => import("pages/HPQuizPage.vue"),
  },

  {
    path: "/sda-quiz",
    name: "sda-quiz",
    component: () => import("pages/SDAQuizPage.vue"),
  },

  {
    path: "/got-quiz",
    name: "got-quiz",
    component: () => import("pages/GOTQuizPage.vue"),
  },

  {
    path: "/vikns-quiz",
    name: "vikns-quiz",
    component: () => import("pages/VIKNSQuizPage.vue"),
  },

  {
    path: "/main-layout",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/index-page", component: () => import("pages/IndexPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
