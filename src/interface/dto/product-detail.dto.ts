export interface ProductBrand {
    value: string;
    label: string;
    wording: string;
    urlkey: string;
  }
  
  export interface ProductMedia {
    position: string;
    media_type: string;
    types: string[];
    media_path: string;
    video_content?: VideoMedia;
  }
  
  export interface VideoMedia {
    video_title: string;
    video_url: string;
  }
  
  export interface ProductWarranty {
    text: string;
    image?: string | undefined;
  }
  
  export interface ProductCustomize {
    title: string;
    customize_id: string;
    values: CustomizeValue[];
  }
  
  export interface CustomizeMediagallery {
    position: string;
    disabled: string;
    media_type: string;
    types: string[];
    file: string;
  }
  
  export interface CustomizeValue {
    status: string;
    sku: string;
    value_id: number;
    text: string;
    mediagallery: CustomizeMediagallery[];
    price: number;
    special_price: number;
    stocks: CustomizeStock[];
    isChecked: boolean;
  }
  
  export interface CustomizeStock {
    saleable: boolean;
    quantity: number;
  }
  
  export interface ProductShipping {
    text: string;
    image?: string | undefined;
  }
  
  export interface ProductAdditionalInformation {
    label: string;
    value: string;
  }
  
  export interface ProductStock {
    saleable: boolean;
    quantity: number;
  }
  
  export interface ProductReview {
    reviews_count: number;
    rating_summary: number;
    star_rating: number;
  }
  
  export interface ProductDetailShort {
    id: number;
    sku: string;
    url_key: string | undefined;
    image: string;
    is_free: boolean;
    item_id: number;
  }
  
  export interface ProductDetailDto {
    status: number;
    id: number;
    sku: string;
    name: string;
    price: number;
    special_price: number;
    price_range: ProductPriceRange;
    brand: ProductBrand[];
    type_id: string;
    media: ProductMedia[];
    description: string;
    customizes: ProductCustomize[];
    warranty: ProductWarranty[];
    shipping: ProductShipping[];
    additional_information: ProductAdditionalInformation[];
    stocks: ProductStock[];
    review: ProductReview[];
    coin: string;
    promotion: string | null;
    category: string;
    category_id: number;
  }
  
  export interface ProductPriceRange {
    price_max: number;
    price_min: number;
    special_price_max: number;
    special_price_min: number;
  }
  
  export interface ProductKeyExchange {
    id: string;
    type: string;
  }