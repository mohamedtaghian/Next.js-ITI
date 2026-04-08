import Image from "next/image";
import Link from "next/link";

function Custom404() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left Section: Text */}
      <div className="px-4py-8 flex flex-col items-center justify-center justify-self-center text-center">
        <h2 className="text-base-content mb-6 text-5xl font-semibold">
          Whoops!
        </h2>
        <h3 className="text-base-content mb-1.5 text-3xl font-semibold">
          Something went wrong
        </h3>
        <p className="text-base-content mb-6 max-w-sm">
          The page you’re looking for isn’t found, we suggest you back to home.
        </p>
        <Link
          href="/"
          className="btn btn-primary btn-gradient p-2 bg-blue-600 text-white rounded-l cursor-pointer"
        >
          Back to home page
        </Link>
      </div>
      {/* Right Section: Illustration */}
      <div className="relative max-h-screen w-full p-2 max-lg:hidden">
        <Image
          src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/404/error-5.png"
          alt="404 background"
          className="h-full w-full rounded-2xl"
          width={500}
          height={500}
        />
        <Image
          src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/404/error-6.png"
          alt="404 illustration"
          className="absolute top-1/2 left-1/2 h-[clamp(300px,40vw,477px)] -translate-x-[42%] -translate-y-1/2"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
Custom404.getLayout = function getLayout(page) {
  return (
    <main className="bg-slate-50 min-h-screen flex items-center justify-center">
      {page}
    </main>
  );
};

export default Custom404;
