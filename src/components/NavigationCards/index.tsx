import { defineComponent, ref, watch } from "vue";
import styles from "./index.module.scss";
import { FlattenedRoute } from "@/foundation/NavigationStructure/flattenRouteStructure";
import NavigationStructure from "@/foundation/NavigationStructure";
import { RouteRecordName, useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const data = ref();

    watch(
      () => route.path,
      () => {
        data.value = NavigationStructure.get(route.name as RouteRecordName);
      },
      {
        immediate: true,
      }
    );

    function displayNavCard({ name, meta }: FlattenedRoute) {
      return (
        <div class={styles.navCard} onClick={() => router.push({ name })}>
          {meta?.locale}
        </div>
      );
    }
    return () =>
      data.value.length > 0 && (
        <div class={styles.navCardsContainer}>
          {data.value.map(displayNavCard)}
        </div>
      );
  },
});
