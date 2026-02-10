export default function Home() {
  const items = [
    { name: "WHOLE CHICKEN", price: "KES 800" },
    { name: "CHICKEN PARTS", price: "KES 450" },
    { name: "SPECIAL CUTS", price: "KES 600" }
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-20 px-4">
      <header className="text-center mb-16">
        <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-none mb-4">
          ROYAL <br /> <span className="gold-text">CHICKEN</span>
        </h1>
        <p className="text-gray-500 tracking-[0.3em] uppercase text-sm">
          ELIZABETH WAGURA • 0720580353
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {items.map((item, i) => (
          <div key={i} className="organic-card">
            <h3 className="text-2xl font-light tracking-widest text-center mb-4">{item.name}</h3>
            <p className="gold-text font-bold tracking-widest">{item.price}</p>
            <button className="cart-button">ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
}
