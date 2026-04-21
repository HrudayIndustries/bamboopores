import React from 'react';

const ProductCard = ({ title, description, uses }) => (
  <div className="border-l-2 border-green-700 pl-6 py-4 mb-8 bg-gray-50 hover:bg-white transition-all shadow-sm">
    <h3 className="text-xl font-bold text-gray-800 uppercase tracking-tight">{title}</h3>
    <p className="text-gray-600 mt-2 max-w-2xl">{description}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {uses.map((use, index) => (
        <span key={index} className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">
          {use}
        </span>
      ))}
    </div>
  </div>
);

const HrudayWebsite = () => {
  const products = [
    {
      title: "Incense Sticks (Agarbatti)",
      description: "Premium sticks primarily manufactured from Bambusa nutans. Known for superior tensile strength and consistent burn rates.",
      uses: ["Ritual", "Aromatherapy", "Export Grade"]
    },
    {
      title: "Bamboo Vinegar",
      description: "A natural byproduct of our zero-waste carbonization process. A potent organic liquid for agriculture and skin care.",
      uses: ["Organic Pesticide", "Soil Conditioner", "Deodorizer"]
    },
    {
      title: "Bamboo Composite Board",
      description: "Eco-friendly alternative to hardwood. High density, moisture-resistant, and chemically treated with Borax-Boric acid for longevity.",
      uses: ["Furniture", "Construction", "Interior Design"]
    },
    {
      title: "Activated Charcoal",
      description: "High-surface-area carbon produced from bamboo residue. Optimized for filtration and industrial applications.",
      uses: ["Water Purification", "Air Filters", "Metallurgy"]
    },
    {
      title: "Agarbatti Masala",
      description: "Standardized aromatic blends and binding powders for incense production, ensuring low-smoke emission.",
      uses: ["Industrial Raw Material", "Bulk Supply"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 px-6 py-12 md:px-24">
      {/* Header */}
      <header className="mb-20">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-green-900">
          HRUDAY <span className="text-gray-400">INDUSTRIES</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-xl italic">
          Hemalata Research Industry for Universal Development and Agro-economic Yield.
        </p>
        <div className="mt-6 flex gap-4 text-sm font-mono text-gray-400">
          <span>GSTIN: [Your Number]</span>
          <span>UDYAM: [Your Number]</span>
        </div>
      </header>

      {/* About Section */}
      <section className="mb-20">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-6 font-bold">The Vision</h2>
        <p className="text-xl leading-relaxed max-w-3xl">
          Based in **Dumuriput, Koraput**, we integrate indigenous tribal wisdom with 
          computational research to create a **zero-waste** bamboo ecosystem. 
          Our facility prioritizes sustainable agro-economics and high-yield processing.
        </p>
      </section>

      {/* Product List */}
      <section className="mb-20">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-10 font-bold">Industrial Output</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="border-t border-gray-200 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-2">Inquiries</h4>
            <p className="text-gray-600">Dumuriput, Koraput, Odisha</p>
            <p className="text-green-800 font-medium underline">contact@hruday.github.io</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-gray-400">
              © 2026 HRUDAY Industries. Research-Driven Sustainability.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HrudayWebsite;
