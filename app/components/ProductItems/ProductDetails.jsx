import Image from "next/image";
import ImageGallery from "@/app/components/ProductItems/productDetailComp/ImageGallery";
import InfoProduct from "@/app/components/ProductItems/productDetailComp/InfoProduct";
import AddToCart from "@/app/components/ProductItems/productDetailComp/AddToCart";

export default function ProductDetails({ product }) {
  // const { searchParams } = searchParams;

  const StokeOfModel = product?.listModels.map((item) => {
    const value = item.size.map((x) => x.stoke);
    const total = value.reduce((a, c) => a + c, 0);
    return total;
  });

  const globalStoke = StokeOfModel.reduce((a, c) => a + c, 0);

  let allImages = [];
  product.listModels?.map((item) => {
    if (item.url.length > 0) {
      item.url.map((x) => allImages.push(x));
      return allImages;
    }
  });

  return (
    <div className="max-w-[1280px] mx-auto px-5 py-5">
      {product && (
        <div className="flex flex-col gap-10 mdl:flex-row justify-center">
          <div className="mdl:w-1/2]">
            <ImageGallery product={product} />
          </div>

          <div className="mdl:w-1/2 mx-10 mdl:mx-1">
            <InfoProduct product={product} globalStoke={globalStoke} />
            <AddToCart product={product} />
          </div>
        </div>
      )}

      {/* next section **************************************************************** */}
      <div className=" mt-20 h-[340px]">
        {product && (
          <div className="flex h-full">
            <div className="">
              <span className=" w-[5px] h-[25px] bg-purple-600 rounded-full inline-block"></span>
              <span className="ml-2 font-medium text-xl">
                Product Description
              </span>
              <div className="flex my-2">
                <div className="mr-10 ">
                  <h3 className="font-medium">Category</h3>
                  <p className="text-sm text-purple-500">{product.category}</p>
                </div>
                <div>
                  <h3 className="font-medium ">Dress Style</h3>
                  <p className="text-sm text-purple-500">{product.type}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium">Description</h3>
                <p>
                  Product Description Product Description Product Description
                  Product Description Product Description Product Description
                </p>
              </div>
            </div>
            <div className="hidden mdl:flex justify-end relative items-center h-full w-[500px] bg-red-400">
              <Image
                fill
                objectFit="cover"
                objectPosition="center"
                src={allImages[0].urlImage}
                className="bg-red-200 "
                alt="image of product"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
