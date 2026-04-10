import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Card({ item }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${item.title}"?`)) return;

    try {
      const res = await fetch(`/api/products/${item.id}`, {
        method: "DELETE",
      });

      const result = await res.json();

      if (result.success) {
        router.replace(router.asPath); // Refresh the current page to reflect deletion
      } else {
        alert("Failed to delete product.");
      }
    } catch (err) {
      alert("Something went wrong: " + err.message);
    }
  };

  return (
    <div className="relative flex flex-col bg-white shadow-sm my-6 border border-slate-200 rounded-lg w-96">
      <div className="top-2.5 right-2.5 z-10 absolute flex flex-col gap-2.5">
        <Link
          href={`/edit-product/${item.id}`}
          className="bg-black p-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <svg
            fill="#fff"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            enableBackground="new 0 0 20 20"
            xmlSpace="preserve"
          >
            <path d="M17,20H1c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h9v2H2v14h14v-8h2v9C18,19.6,17.6,20,17,20z" />
            <path d="M9.3,10.7c-0.4-0.4-0.4-1,0-1.4l9-9c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-9,9C10.3,11.1,9.7,11.1,9.3,10.7z" />
          </svg>
        </Link>

        <button
          onClick={handleDelete}
          className="bg-black p-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>

      <div className="relative bg-clip-border p-2.5 rounded-xl h-96 overflow-hidden">
        <Image
          className="bg-blue-50 rounded-md w-full h-full object-cover"
          src={item.images?.[0] || "https://placehold.co/300x300"}
          alt={item.title}
          width={300}
          height={300}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold text-slate-800 text-xl line-clamp-1">
            {item.title}
          </p>
          <p className="font-semibold text-cyan-600 text-xl">${item.price}</p>
        </div>
        <p className="font-light text-slate-600 leading-normal">
          {item.description}
        </p>
        <div className="flex flex-col gap-6 mt-6">
          <Link
            href={`products/${item.id}`}
            className="bg-gray-600 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700 disabled:opacity-50 shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:shadow-none px-4 py-2 border border-transparent rounded-md w-full text-white text-sm text-center transition-all duration-300 cursor-pointer disabled:pointer-events-none"
          >
            View details
          </Link>
          <button
            className="bg-cyan-600 hover:bg-cyan-700 focus:bg-cyan-700 active:bg-cyan-700 disabled:opacity-50 shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:shadow-none px-4 py-2 border border-transparent rounded-md w-full text-white text-sm text-center transition-all duration-300 cursor-pointer disabled:pointer-events-none"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
