import api from "@/domain/common/services/http";

export interface DummyItem {
  id: number;
  name: string;
}

export async function getDummyItems(): Promise<DummyItem[]> {
  const { data } = await api.get("/dummy");
  return data as DummyItem[];
}

export async function getDummyById(id: number): Promise<DummyItem> {
  const { data } = await api.get(`/dummy/${id}`);
  return data as DummyItem;
}

export default {
  getDummyItems,
  getDummyById,
};
