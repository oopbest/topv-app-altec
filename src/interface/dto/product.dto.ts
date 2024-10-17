export interface ProductDto {
  id: number;
  sku: string;
  name: string;
  price: number;
  special_price: number | undefined;
  type_id: string;
  saleable: boolean;
  category_id: number;
  url_key: string;
  image: string | null;
  reviews_count: number;
  rating_summary: number;
  star_rating: number;
  position: string | number;
  discount_rate?: number;
}
