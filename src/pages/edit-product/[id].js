import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "@/lib/product-schema";
import { useRouter } from "next/router";

function EditProduct({ product }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: product.title,
      description: product.description,
      price: product.price,
      productImage: product.images?.[0] || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`/api/products/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        router.push("/products");
      } else {
        alert("Failed to update product: " + (result.error || "Unknown error"));
      }
    } catch (err) {
      alert("Something went wrong: " + err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center text-sm text-slate-800 min-h-screen justify-center"
    >
      <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
        Edit Product
      </p>
      <h1 className="text-4xl font-bold py-4 text-center">Edit Your Product</h1>

      <div className="max-w-96 w-full px-4">
        {/* Title */}
        <label htmlFor="title" className="font-medium">
          Title
        </label>
        <div className="flex items-center mt-2 mb-1 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <input
            {...register("title")}
            type="text"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter Product Title"
          />
        </div>
        {errors.title && (
          <p className="text-red-500 text-xs mb-4 ml-3">
            {errors.title.message}
          </p>
        )}

        {/* Price */}
        <label htmlFor="price" className="font-medium mt-4">
          Product Price
        </label>
        <div className="flex items-center mt-2 mb-1 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <input
            {...register("price")}
            type="number"
            step="0.01"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter Product Price"
          />
        </div>
        {errors.price && (
          <p className="text-red-500 text-xs mb-4 ml-3">
            {errors.price.message}
          </p>
        )}

        {/* Image URL */}
        <label htmlFor="productImage" className="font-medium mt-4">
          Product Image URL
        </label>
        <div className="flex items-center mt-2 mb-1 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <input
            {...register("productImage")}
            type="text"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="https://example.com/image.jpg"
          />
        </div>
        {errors.productImage && (
          <p className="text-red-500 text-xs mb-4 ml-3">
            {errors.productImage.message}
          </p>
        )}

        {/* Description */}
        <label htmlFor="description" className="font-medium mt-4">
          Description
        </label>
        <textarea
          {...register("description")}
          rows={4}
          className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all"
          placeholder="Enter Product Description"
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-1 ml-1">
            {errors.description.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="transition-all cursor-pointer flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full disabled:bg-slate-400"
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}

export default EditProduct;

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);

    if (!res.ok) return { notFound: true };

    const product = await res.json();

    if (!product || !product.id) return { notFound: true };

    return { props: { product } };
  } catch {
    return { notFound: true };
  }
}
