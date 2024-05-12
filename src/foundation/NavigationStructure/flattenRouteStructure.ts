import {
  RouteRecordName,
  RouteRecordNormalized,
  RouteRecordRaw,
} from "vue-router";

export interface FlattenedRoute {
  name: RouteRecordName;
  parentName?: RouteRecordName | null;
  children?: FlattenedRoute[];
  meta?: AnyObject;
}

export function flattenRoutes(
  routes: (RouteRecordNormalized | RouteRecordRaw)[],
  parentName: RouteRecordName | null = null,
  result: FlattenedRoute[] = []
): FlattenedRoute[] {
  routes.forEach((route) => {
    const flatRoute: FlattenedRoute = {
      name: route.name || "",
      parentName,
      meta: route.meta,
    };
    result.push(flatRoute);

    if (route.children && route.children.length > 0) {
      flattenRoutes(route.children, route.name, result);
    }
  });
  return result;
}

export function reconstructHierarchy(
  routes: FlattenedRoute[]
): FlattenedRoute[] {
  const enhancedRoutes = routes.map((route) => ({
    ...route,
    children: [] as FlattenedRoute[],
  }));

  enhancedRoutes.forEach((parentRoute) => {
    routes.forEach((potentialChild) => {
      if (parentRoute.name === potentialChild.parentName) {
        const childCopy: FlattenedRoute = { ...potentialChild };
        parentRoute.children.push(childCopy);
      }
    });
  });

  return enhancedRoutes;
}
