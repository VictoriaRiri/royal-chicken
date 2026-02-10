export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
      <header className="mb-24">
        <h1 className="text-6xl md:text-8xl font-bold tracking-[0.4em] uppercase text-white mb-4">
          Royal <span className="text-yellow-500/90">Chicken</span>
        </h1>
        <p className="text-gray-400 tracking-[0.3em] uppercase text-xs max-w-xl mx-auto leading-loose">
          Elizabeth Wagura • Slaughter & Delivery Service
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-20">
        {['Whole Chicken', 'Chicken Parts', 'Special Cuts'].map((item, i) => (
          <div key={i} className="glass-card p-12 group cursor-pointer border border-white/10 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl">
            <h3 className="text-xl font-light tracking-widest uppercase mb-4">{item}</h3>
            <div className="h-[1px] w-12 bg-yellow-500 mx-auto transition-all group-hover:w-full" />
          </div>
        ))}
      </section>

      <footer className="glass-card p-8 border border-yellow-500/20 rounded-3xl">
        <p className="text-yellow-500 font-mono text-sm mb-2">Order via WhatsApp or Call</p>
        <p className="text-white tracking-widest text-lg">0720580353 / 0751509732</p>
      </footer>
    </div>
  );
}