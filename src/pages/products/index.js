import Card from "@/components/Card";
import Link from "next/link";

function Products({ products }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.length === 0 && (
          <p className="text-slate-500 col-span-3 text-center py-20">
            No products yet. Add your first one!
          </p>
        )}
        {products?.map((p) => (
          <Card item={p} key={p._id || p.id} />
        ))}
      </div>
      <Link
        href={"/add-product"}
        className="bg-black size-10 text-white flex justify-center items-center rounded-full fixed right-3 bottom-3"
      >
        <span className="text-2xl">+</span>
      </Link>
    </>
  );
}

export default Products;

// Using getServerSideProps so the list always reflects the latest DB state
export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/products");

    if (!res.ok) throw new Error(`Failed to fetch, status: ${res.status}`);

    const products = await res.json();

    return { props: { products } };
  } catch (error) {
    console.error("Fetch error:", error);
    return { props: { products: [] } };
  }
}
