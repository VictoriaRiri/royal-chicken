export default function Home() {
  const products = [
    { name: "WHOLE CHICKEN", price: "KSH 500" },
    { name: "LIVER", price: "KSH 30" },
    { name: "GIZZARDS", price: "KSH 20" },
    { name: "CHICKEN LEGS", price: "KSH 5" },
    { name: "NECKS", price: "KSH 30" }
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-20 px-4">
      <header className="text-center mb-20">
        <h1 className="text-8xl md:text-[10rem] font-bold tracking-tighter leading-none mb-4 text-white">
          ROYAL <br /> <span className="gold-text">CHICKEN</span>
        </h1>
        <p className="text-gray-500 tracking-[0.4em] uppercase text-xs">
          ELIZABETH WAGURA • 0720580353
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {products.map((item, i) => (
          <div key={i} className="organic-blob">
            <h3 className="text-xl font-light tracking-widest text-center mb-2">{item.name}</h3>
            <p className="gold-text font-bold tracking-widest">{item.price}</p>
            <button className="add-to-cart">ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
}
