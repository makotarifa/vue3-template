import { App } from "vue";
import emitter from "@/domain/common/services/eventBus";

export default function registerErrorHandler(app: App) {
  // Vue runtime errors
  app.config.errorHandler = (err: unknown, instance, info) => {
    const message = (err as Error)?.message || String(err);
    console.error("Unhandled Vue error", message, err, info);
    emitter.emit("error", message);
  };

  // Promise rejections
  window.addEventListener("unhandledrejection", (ev) => {
    const reason = (ev.reason && (ev.reason.message || ev.reason)) || "Unhandled rejection";
    console.error("Unhandled Rejection", ev.reason);
    emitter.emit("error", reason as string);
  });
}
