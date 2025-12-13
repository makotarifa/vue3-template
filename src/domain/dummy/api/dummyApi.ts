import api from "@/domain/common/services/http";
import type { DummyItem } from "../services/dummyService";

export function getItems() {
  return api.get<DummyItem[]>("/api/dummy");
}

export function getById(id: number) {
  return api.get<DummyItem>(`/api/dummy/${id}`);
}
