import NavigationCards from "@/components/NavigationCards";
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import styles from "./app.module.scss";

export default defineComponent({
  setup() {
    return () => (
      <div class={styles.appWrapper}>
        <div class={styles.header}>
          <div class={styles.siteName}>Sorceries Playground</div>
        </div>
        <div class={styles.contentWrapper}>
          <NavigationCards class={styles.navigationContent} />
          <div class={styles.contentContent}>
            <RouterView />
          </div>
        </div>
        <div class={styles.footer}>
          <div class={styles.copyrightSection}>
            © 2024 All Rights Reserved. Powered by Yiwwhl.
          </div>
        </div>
      </div>
    );
  },
});
