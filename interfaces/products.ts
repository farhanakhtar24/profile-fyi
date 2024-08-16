interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

interface MetaData {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}

export interface Iproduct {
  id: number;
  title: string;
  description?: string | undefined | null;
  category: string;
  price: number;
  discountPercentage?: number | undefined | null;
  rating?: number | undefined | null;
  stock: number;
  tags?: string[];
  brand?: string | undefined | null;
  sku?: string | undefined | null;
  weight?: number | undefined | null;
  dimensions: Dimensions;
  warrantyInformation?: string | undefined | null;
  shippingInformation?: string | undefined | null;
  availabilityStatus?: string | undefined | null;
  reviews: Review[];
  returnPolicy?: string | undefined | null;
  minimumOrderQuantity?: number | undefined | null;
  meta: MetaData;
  images: string[];
  thumbnail: string;
}

export interface IproductList {
  products: Iproduct[];
  total: number;
  skip: number;
  limit: number;
}
