export default function Home() {
  const products = [
    { name: "Signature Whole", price: "KSH 1,200", desc: "Freshly slaughtered" },
    { name: "Prime Thighs", price: "KSH 850", desc: "Hand-cut selection" },
    { name: "Royal Wings", price: "KSH 950", desc: "Boutique grade" }
  ];

  return (
    <div className="flex flex-col items-center pt-32 pb-20 px-6">
      <header className="text-center mb-32">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-4">
          ROYAL<span className="text-yellow-500">.</span>
        </h1>
        <p className="text-gray-500 tracking-[0.6em] uppercase text-[10px] font-medium">
          Elizabeth Wagura Atelier
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {products.map((item, i) => (
          <div key={i} className="glass-card p-10 flex flex-col h-[450px] justify-between">
            <div>
              <span className="text-yellow-500/50 font-mono text-xs">NO. 00{i+1}</span>
              <h3 className="text-3xl font-bold mt-4 mb-2">{item.name}</h3>
              <p className="text-gray-500 text-sm italic">{item.desc}</p>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="text-2xl font-bold tracking-tight">{item.price}</span>
              <button className="royal-button">Add to Order</button>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-40 text-center opacity-40">
        <p className="text-[10px] tracking-[1em] uppercase">Straight to your doorstep</p>
      </footer>
    </div>
  );
}
