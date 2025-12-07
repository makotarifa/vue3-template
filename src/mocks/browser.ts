// @ts-ignore
import { setupWorker } from "msw";
// @ts-ignore
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
