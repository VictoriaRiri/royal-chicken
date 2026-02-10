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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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

  // If we aren't on the client yet, show a black screen to prevent mismatch
  if (!isClient) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4">
      {/* Hero Section */}
      <header className="text-center mb-16 max-w-5xl">
        <h1 className="text-[12vw] md:text-[10rem] font-bold tracking-tighter leading-none mb-4 business-font italic">
          Royal <br /> <span className="gold-text">Chicken</span>
        </h1>
        
        {/* CSS-Only Typewriter (Zero JS logic = No crashes) */}
        <div className="flex justify-center mb-10">
          <p className="text-yellow-500 font-mono text-[10px] md:text-xs tracking-tighter uppercase overflow-hidden border-r-2 border-yellow-500 whitespace-nowrap animate-typewriter-effect max-w-fit">
            We deliver freshly slaughtered chicken straight to your doorstep.
          </p>
        </div>

        <div className="space-y-3 text-gray-400 tracking-[0.3em] text-[10px] uppercase font-bold">
          <p className="text-white border-b border-white/10 pb-2 inline-block">Elizabeth Wagura</p>
          <p>0720580353 • 0751509732</p>
          <p className="lowercase tracking-normal text-xs italic text-yellow-500/50">liswagura@gmail.com</p>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-48">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="organic-blob group">
            <h3 className="text-xl font-light tracking-widest text-center mb-2 uppercase">{p.name}</h3>
            <p className="gold-text font-bold tracking-widest text-2xl">KES {p.price}</p>
            <button 
              onClick={() => updateCart(p.id, 1)}
              className="mt-8 border border-white/20 rounded-full px-10 py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
            >
              {cart[p.id] ? `Added (${cart[p.id]})` : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      {/* Floating Bottom Cart */}
      {total > 0 && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center px-4 z-50">
          <div className="w-full max-w-lg bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl">
             <div className="max-h-32 overflow-y-auto mb-4 space-y-2">
                {PRODUCTS.filter(p => cart[p.id]).map(p => (
                  <div key={p.id} className="flex justify-between items-center text-[10px] tracking-widest uppercase">
                    <span>{p.name}</span>
                    <div className="flex items-center gap-4">
                      <button onClick={() => updateCart(p.id, -1)} className="text-yellow-500 text-xl">-</button>
                      <span className="text-white">{cart[p.id]}</span>
                      <button onClick={() => updateCart(p.id, 1)} className="text-yellow-500 text-xl">+</button>
                    </div>
                  </div>
                ))}
             </div>
             <button 
                onClick={handleWhatsApp}
                className="w-full bg-yellow-500 text-black py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] active:scale-95 transition-all shadow-lg"
              >
                Go to Cart • KES {total}
              </button>
          </div>
        </div>
      )}
    </div>
  );
}
