"use client";
import { useState, useEffect } from "react";

const PRODUCTS = [
  { id: 1, name: "WHOLE CHICKEN", price: 500 },
  { id: 2, name: "LIVER", price: 30 },
  { id: 3, name: "GIZZARDS", price: 20 },
  { id: 4, name: "CHICKEN LEGS", price: 5 },
  { id: 5, name: "NECKS", price: 30 },
];

export default function Home() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [text, setText] = useState("");
  const fullText = "We deliver freshly slaughtered chicken and chicken parts straight to your doorstep.";

  // Typewriter Effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const updateCart = (id: number, delta: number) => {
    setCart((prev) => {
      const newQty = (prev[id] || 0) + delta;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const total = PRODUCTS.reduce((acc, p) => acc + (cart[p.id] || 0) * p.price, 0);

  const handleWhatsApp = () => {
    const phone = "254720580353";
    let msg = "Royal Chicken Order:%0A";
    PRODUCTS.forEach(p => { if(cart[p.id]) msg += `- ${p.name} (x${cart[p.id]})%0A`; });
    msg += `%0ATotal: KSH ${total}`;
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-4">
      {/* Hero Section */}
      <header className="text-center mb-24 max-w-4xl">
        <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-none mb-6 business-font italic">
          Royal <br /> <span className="gold-text">Chicken</span>
        </h1>
        
        {/* Typewriter Banner */}
        <div className="h-8 mb-8">
          <p className="text-yellow-500/80 font-mono text-sm tracking-wider uppercase">
            {text}<span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="space-y-2 text-gray-400 tracking-[0.2em] text-[10px] uppercase font-bold">
          <p>Elizabeth Wagura</p>
          <p>0720580353 / 0751509732</p>
          <p className="lowercase tracking-normal text-xs italic">liswagura@gmail.com</p>
        </div>
      </header>

      {/* Side-by-Side Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl mb-48">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="organic-blob group">
            <h3 className="text-xl font-light tracking-widest text-center mb-2 uppercase">{p.name}</h3>
            <p className="gold-text font-bold tracking-widest mb-8 text-2xl">KSH {p.price}</p>
            <button 
              onClick={() => updateCart(p.id, 1)}
              className="border border-white/30 rounded-full px-8 py-3 text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all uppercase"
            >
              {cart[p.id] ? `In Bag: ${cart[p.id]}` : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      {/* Floating Bottom Cart */}
      {total > 0 && (
        <div className="fixed bottom-10 z-50 flex flex-col items-center w-full max-w-md px-6 animate-in fade-in slide-in-from-bottom-10">
          <div className="w-full bg-white/5 border border-white/10 backdrop-blur-2xl p-6 rounded-[2.5rem] shadow-2xl">
             <div className="max-h-40 overflow-y-auto mb-4 pr-2 custom-scrollbar">
                {PRODUCTS.filter(p => cart[p.id]).map(p => (
                  <div key={p.id} className="flex justify-between items-center mb-2 text-xs">
                    <span className="tracking-widest uppercase">{p.name}</span>
                    <div className="flex items-center gap-4 bg-white/10 px-3 py-1 rounded-full">
                      <button onClick={() => updateCart(p.id, -1)} className="text-yellow-500 font-bold">-</button>
                      <span className="font-mono">{cart[p.id]}</span>
                      <button onClick={() => updateCart(p.id, 1)} className="text-yellow-500 font-bold">+</button>
                    </div>
                  </div>
                ))}
             </div>
             <button 
                onClick={handleWhatsApp}
                className="w-full bg-yellow-500 text-black py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform"
              >
                Checkout: KSH {total}
              </button>
          </div>
        </div>
      )}
    </div>
  );
}
