export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-20 px-4">
      <header className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-bold tracking-[0.4em] uppercase text-white mb-6">
          Royal <span className="text-yellow-500/80">Chicken</span>
        </h1>
        <p className="text-gray-400 tracking-[0.5em] uppercase text-[10px] md:text-xs max-w-2xl mx-auto leading-relaxed opacity-60">
          Private Selection • Quality Guaranteed • Est. 2026
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          { title: "Imperial Breast", price: "£42.00" },
          { title: "Royal Thighs", price: "£38.50" },
          { title: "Golden Wings", price: "£55.00" }
        ].map((item, i) => (
          <div key={i} className="glass-card group p-10 flex flex-col items-start cursor-pointer">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-full mb-20 group-hover:scale-125 transition-transform duration-700" />
            <h3 className="text-2xl font-light tracking-tighter mb-2">{item.title}</h3>
            <span className="text-yellow-500 font-mono text-sm">{item.price}</span>
          </div>
        ))}
      </section>
      
      <footer className="mt-40 opacity-20 text-[9px] tracking-[1em] uppercase">
        Artisanal Poultry Excellence
      </footer>
    </div>
  );
}