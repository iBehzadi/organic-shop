import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "ProductStore",
  state: () => ({}),
  actions: {},
});

declare global {
  interface IProduct {
    id: number;
    title: string;
    category: number;
    images: string;
    price: number;
    stock_status: boolean;
    description: string;
  }
}
