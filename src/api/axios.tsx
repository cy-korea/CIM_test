import axios from "axios";

const instance = axios.create({
  baseURL: "https://y-system.synology.me:8081",
});

export const getItem = () => {
  return instance.get("/item").then((res) => res.data);
};

export const postItem = (itemData: {
  name: string;
  count: number;
}): Promise<{ redirectUrl?: string }> => {
  return instance.post("/item/create", itemData).then((res) => res.data);
};

export const deleteItem = async (id: number) => {
  await instance.delete(`/item/delete/${id}`);
};

export const updateItem = async (id: number, count: number): Promise<void> => {
  await instance.put(`/item/update/${id}`, { count }).then((res) => res.data);
};
