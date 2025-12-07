import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 as number }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
