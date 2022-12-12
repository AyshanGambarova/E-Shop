export type TProductGenerel = {
  brand: string;
  category: string;
  price: number;
};
export type TProduct = TProductGenerel & {
  id: number;
};

export type TProductFilter = TProductGenerel & {};
