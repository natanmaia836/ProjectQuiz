const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/select-quiz",
        name: "SelecioneQuizPage",
        component: () => import("pages/SelecioneQuizPage.vue"),
      },
      {
        path: "/quiz",
        name: "QuizPage",
        component: () => import("pages/QuizPage.vue"),
      },
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
