import {
  flattenRoutes,
  reconstructHierarchy,
} from "@/foundation/NavigationStructure/flattenRouteStructure";
import { allRoutes } from "@/router";
import { keyBy } from "lodash";
import { useRoute } from "vue-router";

export default class NavigationStructure {
  static navigationStructure = undefined as unknown as AnyArray;
  static navigationStructureByName = undefined as unknown as AnyObject;

  static get(
    routeName = useRoute().name as keyof typeof this.navigationStructureByName
  ): AnyArray {
    if (!this.navigationStructure) {
      this.navigationStructure = reconstructHierarchy(flattenRoutes(allRoutes));
      this.navigationStructureByName = keyBy(this.navigationStructure, "name");
    }
    return this.navigationStructureByName[routeName].children;
  }
}
