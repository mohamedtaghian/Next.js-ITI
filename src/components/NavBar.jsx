import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <nav className="top-0 z-20 inset-s-0 bg-neutral-primary border-default border-b w-full">
      <div className="flex flex-wrap justify-between items-center mx-auto p-4 max-w-7xl">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center font-semibold text-heading text-xl whitespace-nowrap">
            TOT
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:hidden inline-flex justify-center items-center hover:bg-neutral-secondary-soft p-2 rounded-base focus:outline-none focus:ring-2 focus:ring-neutral-tertiary w-10 h-10 text-body hover:text-heading text-sm"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className="hidden md:block w-full md:w-auto" id="navbar-default">
          <ul className="flex md:flex-row flex-col rtl:space-x-reverse md:space-x-8 bg-neutral-secondary-soft md:bg-neutral-primary mt-4 md:mt-0 p-4 md:p-0 border border-default md:border-0 rounded-base font-medium">
            <li>
              <Link
                href="/"
                className="block bg-brand md:bg-transparent md:p-0 px-3 py-2 rounded md:text-fg-brand"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-neutral-tertiary md:p-0 px-3 py-2 md:border-0 rounded text-heading md:hover:text-fg-brand"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="block md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-neutral-tertiary md:p-0 px-3 py-2 md:border-0 rounded text-heading md:hover:text-fg-brand"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/brands"
                className="block md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-neutral-tertiary md:p-0 px-3 py-2 md:border-0 rounded text-heading md:hover:text-fg-brand"
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="block md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-neutral-tertiary md:p-0 px-3 py-2 md:border-0 rounded text-heading md:hover:text-fg-brand"
              >
                Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
