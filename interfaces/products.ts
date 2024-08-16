interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string | Date;
  reviewerName: string;
  reviewerEmail: string;
}

interface MetaData {
  createdAt: string | Date;
  updatedAt: string | Date;
  barcode: string;
  qrCode: string;
}

export interface Iproduct {
  id: number;
  title: string;
  description?: string | null;
  category: string;
  price: number;
  discountPercentage?: number | null;
  rating?: number | null;
  stock: number;
  tags?: string[] | null;
  brand?: string | null;
  sku?: string | null;
  weight?: number | null;
  dimensions?: Dimensions | null;
  warrantyInformation?: string | null;
  shippingInformation?: string | null;
  availabilityStatus?: string | null;
  reviews?: Review[] | null;
  returnPolicy?: string | null;
  minimumOrderQuantity?: number | null;
  meta?: MetaData | null;
  images: string[];
  thumbnail: string;
}

export interface IproductList {
  products: Iproduct[];
  total: number;
  skip: number;
  limit: number;
}
