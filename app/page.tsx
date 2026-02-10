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

  // This ensures the page only renders interactive parts once the browser is ready
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

  if (!isClient) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      <header className="text-center mb-16 max-w-4xl">
        <h1 className="text-[12vw] md:text-[9rem] font-bold tracking-tighter leading-none mb-6 italic business-font">
          Royal <br /> <span className="gold-text">Chicken</span>
        </h1>
        
        <div className="flex justify-center mb-8">
          <p className="text-yellow-500 font-mono text-[10px] md:text-xs tracking-widest uppercase overflow-hidden border-r-2 border-yellow-500 whitespace-nowrap animate-typewriter-effect">
            Freshly slaughtered chicken delivered to your doorstep.
          </p>
        </div>

        <div className="space-y-2 text-gray-500 tracking-[0.3em] text-[9px] uppercase font-bold">
          <p className="text-white">Elizabeth Wagura</p>
          <p>0720580353 • 0751509732</p>
          <p className="lowercase tracking-normal italic text-yellow-500/40 font-normal">liswagura@gmail.com</p>
        </div>
      </header>

      {/* Side-by-Side Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-40">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="organic-blob group">
            <h3 className="text-lg font-light tracking-[0.2em] text-center mb-2 uppercase">{p.name}</h3>
            <p className="gold-text font-bold tracking-widest text-xl italic text-center">KSH {p.price}</p>
            <button 
              onClick={() => updateCart(p.id, 1)}
              className="mt-6 border border-white/20 rounded-full px-8 py-2 text-[9px] tracking-widest uppercase hover:bg-white hover:text-black transition-all"
            >
              {cart[p.id] ? `In Bag: ${cart[p.id]}` : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      {/* Cart Bottom UI */}
      {total > 0 && (
        <div className="fixed bottom-8 left-0 right-0 flex justify-center px-6 z-50">
          <div className="w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-2xl p-6 rounded-[2rem] shadow-2xl">
             <div className="max-h-28 overflow-y-auto mb-4 space-y-2">
                {PRODUCTS.filter(p => cart[p.id]).map(p => (
                  <div key={p.id} className="flex justify-between items-center text-[10px] tracking-widest uppercase">
                    <span>{p.name}</span>
                    <div className="flex items-center gap-4">
                      <button onClick={() => updateCart(p.id, -1)} className="text-yellow-500 text-lg">-</button>
                      <span className="font-mono">{cart[p.id]}</span>
                      <button onClick={() => updateCart(p.id, 1)} className="text-yellow-500 text-lg">+</button>
                    </div>
                  </div>
                ))}
             </div>
             <button onClick={handleWhatsApp} className="w-full bg-yellow-500 text-black py-4 rounded-xl font-black text-[10px] tracking-[0.3em] uppercase">
                Checkout: KSH {total}
              </button>
          </div>
        </div>
      )}
    </div>
  );
}
