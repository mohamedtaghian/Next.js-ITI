import Image from "next/image";
import { useRouter } from "next/router";

function ProductDetails({ product }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="bg-white">
      <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6 rounded-sm">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-sm shadow-md relative">
              <Image
                className="w-4/5 aspect-251/171 rounded-sm object-cover mx-auto"
                src={product.images[0]}
                width={500}
                height={500}
                alt={product.title}
              />
              <button
                type="button"
                className="absolute top-4 right-4 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="#ccc"
                  className="mr-1 hover:fill-[#333]"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-slate-900">
              {product.title}
            </h3>
            <div className="flex items-center space-x-1 mt-2">
              <svg
                className="w-4 h-4 fill-yellow-400"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <h4 className="text-slate-500 text-base ml-3!">
                {product.rating}
              </h4>
            </div>
            <p className="text-sm text-slate-500 mt-4">{product.description}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <p className="text-slate-900 text-2xl font-semibold">
                ${product.price}
              </p>
            </div>

            <div className="flex gap-4 mt-12 max-w-md">
              <button
                type="button"
                className="w-full px-4 py-2.5 cursor-pointer outline-none border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-sm"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="w-full px-4 py-2.5 cursor-pointer outline-none border border-blue-600 bg-transparent hover:bg-slate-50 text-slate-900 text-sm font-medium rounded-sm"
              >
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  const paths = data.products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  // const res = await fetch(`https://dummyjson.com/products/${id}`);
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const data = await res.json();

  if (!data.id) {
    return { notFound: true };
  }

  return {
    props: { product: data },
  };
}
