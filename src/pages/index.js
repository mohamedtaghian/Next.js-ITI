import Card from "@/components/Card";
import { NavBar } from "@/components/NavBar";

const Home = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 justify-items-center">
      {products.products.map((p) => (
        <Card item={p} key={p.id} />
      ))}
    </div>
  );
};

export default Home;
export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
}
