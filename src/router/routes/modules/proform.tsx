import BasicLayout from "@/layout/BasicLayout";

const proform = {
  path: "/proform",
  name: "ProForm",
  meta: {
    locale: "ProForm",
    order: 1,
  },
  component: BasicLayout,
  children: [
    {
      path: "examples",
      name: "Examples",
      meta: {
        locale: "ProForm Examples",
      },
      component: BasicLayout,
      children: [
        {
          path: "basic",
          name: "Basic Example",
          component: () => import("@/views/ProForm/examples/Basic/index"),
          meta: {
            locale: "Basic ProForm Example",
          },
        },
        {
          path: "advanced",
          name: "Advanced Example",
          component: () => import("@/views/ProForm/examples/Advanced/index"),
          meta: {
            locale: "Advanced ProForm Example",
          },
        },
      ],
    },
  ],
};

export default proform;
