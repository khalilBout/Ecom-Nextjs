import ProductDetails from "@/app/components/ProductItems/ProductDetails";
import { getProductById } from "@/services/getData/product/index";

// for SEO
// الدالة المسؤولة عن تحسين الموقع في محركات البحث
export async function generateMetadata({ params }) {
  const productDetailsData = await getProductById(params.id);
  return {
    title: productDetailsData.title,
    description: productDetailsData.desc,
  };
}

export default async function TheProduct({ params }) {
  const productDetailsData = await getProductById(params.id);
  return <ProductDetails product={productDetailsData} />;
}
