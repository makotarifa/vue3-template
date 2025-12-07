import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import Lara from "@primevue/themes/lara";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import setupI18n from "../i18n";
import registerErrorHandler from "./plugins/errorHandler";

const app = createApp(App);
app.use(createPinia());
app.use(router);
import { setupAuthGuard } from "./router/authGuard";
setupAuthGuard(router);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false,
    },
  },
});

// Toast
app.use(ToastService);
app.component("PrimeToast", Toast);

// Start MSW in development if environment is set
if (import.meta.env.VITE_USE_MOCKS === "true") {
  // browser worker
  import("../mocks/browser").then(({ worker }) => {
    worker.start();
  });
}

// i18n
const i18n = setupI18n();
app.use(i18n);

// global error handler
registerErrorHandler(app);

// subscribe to errors via emitter and show toast using app's useToast when mounted
// Since we cannot use useToast here, components will listen to emitter to show toasts, AppShell will show them.

app.mount("#app");
