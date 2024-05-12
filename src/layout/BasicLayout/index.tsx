import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import styles from "./index.module.scss";

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class={styles.basicLayoutWrapper}>
          <RouterView />
        </div>
      );
    };
  },
});
