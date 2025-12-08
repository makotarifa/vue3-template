import { ref } from "vue";
import api from "@/domain/common/services/http";

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);
  const loading = ref(false);

  const execute = async () => {
    loading.value = true;
    try {
      const res = await api.get<T>(url);
      data.value = res.data;
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, execute };
}
