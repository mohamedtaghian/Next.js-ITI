import Image from "next/image";
import Link from "next/link";

function Card({ item }) {
  return (
    <div className="relative flex flex-col bg-white shadow-sm my-6 border border-slate-200 rounded-lg w-96">
      <div className="relative bg-clip-border p-2.5 rounded-xl h-96 overflow-hidden">
        <Image
          className="bg-blue-50 rounded-md w-full h-full object-cover"
          src={item.images[0]}
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
