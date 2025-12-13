import * as dummyApi from "@/domain/dummy/api/dummyApi";

export interface DummyItem {
  id: number;
  name: string;
}

export async function getDummyItems(): Promise<DummyItem[]> {
  const { data } = await dummyApi.getItems();
  return data as DummyItem[];
}

export async function getDummyById(id: number): Promise<DummyItem> {
  const { data } = await dummyApi.getById(id);
  return data as DummyItem;
}

export default {
  getDummyItems,
  getDummyById,
};
