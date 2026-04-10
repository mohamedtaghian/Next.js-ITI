const Home = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000"
                alt="Minimalism"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-lg font-medium">The Minimalist Collection</h3>
            <p className="text-zinc-500 text-sm">
              Elevated basics for daily wear.
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1711051506265-28b6329226a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"
                alt="Outerwear"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-lg font-medium">Structural Outerwear</h3>
            <p className="text-zinc-500 text-sm">
              Defined by form and function.
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000"
                alt="Accessories"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-lg font-medium">Timeless Accessories</h3>
            <p className="text-zinc-500 text-sm">
              The final touch to your silhouette.
            </p>
          </div>
        </div>
      </section>
      <section className="border-y border-zinc-100 py-12 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-12 text-4xl font-black uppercase tracking-tighter opacity-10">
          <span>Sustainable Materials</span>
          <span>Ethical Sourcing</span>
          <span>Worldwide Shipping</span>
          <span>Artisanal Quality</span>
          <span>Sustainable Materials</span>
        </div>
      </section>
    </>
  );
};

export default Home;
