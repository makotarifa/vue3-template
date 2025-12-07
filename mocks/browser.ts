// @ts-ignore
import { setupWorker } from "msw/browser";
// @ts-ignore
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
