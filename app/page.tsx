"use client";
import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "WHOLE CHICKEN", price: 500 },
  { id: 2, name: "LIVER", price: 30 },
  { id: 3, name: "GIZZARDS", price: 20 },
  { id: 4, name: "CHICKEN LEGS", price: 5 },
  { id: 5, name: "NECKS", price: 30 },
];

export default function Home() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [showCartPanel, setShowCartPanel] = useState(false);

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
    <div className="min-h-screen bg-black flex flex-col items-center py-20 px-4 relative overflow-x-hidden">
      <header className="text-center mb-20 z-10">
        <h1 className="text-[15vw] md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-4 text-white uppercase">
          ROYAL <br /> <span className="text-yellow-500">CHICKEN</span>
        </h1>
        <p className="text-gray-500 tracking-[0.4em] uppercase text-xs font-medium">
          ELIZABETH WAGURA • 0720580353
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl mb-40 z-10">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="organic-blob group">
            <h3 className="text-xl font-light tracking-widest text-center mb-2 uppercase">{p.name}</h3>
            <p className="text-yellow-500 font-bold tracking-widest mb-6">KSH {p.price}</p>
            <button 
              onClick={() => updateCart(p.id, 1)}
              className="add-to-cart hover:bg-white hover:text-black transition-all"
            >
              {cart[p.id] ? `IN BAG: ${cart[p.id]}` : "ADD TO CART"}
            </button>
          </div>
        ))}
      </div>

      {total > 0 && (
        <div className="fixed bottom-10 flex flex-col items-center gap-4 z-50">
          <button 
            onClick={() => setShowCartPanel(!showCartPanel)}
            className="bg-white/10 border border-white/20 backdrop-blur-xl text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-white/20 transition-all"
          >
            {showCartPanel ? "CLOSE CART" : `VIEW CART (KSH ${total})`}
          </button>
          
          {showCartPanel && (
            <div className="bg-black/90 border border-white/10 p-6 rounded-[2rem] backdrop-blur-2xl w-[300px] shadow-2xl animate-in fade-in slide-in-from-bottom-4">
              <p className="text-xs text-gray-500 mb-4 tracking-widest uppercase">Your Selection</p>
              {PRODUCTS.filter(p => cart[p.id]).map(p => (
                <div key={p.id} className="flex justify-between items-center mb-3">
                  <span className="text-sm">{p.name}</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateCart(p.id, -1)} className="text-yellow-500 font-bold px-2">-</button>
                    <span>{cart[p.id]}</span>
                    <button onClick={() => updateCart(p.id, 1)} className="text-yellow-500 font-bold px-2">+</button>
                  </div>
                </div>
              ))}
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-yellow-500 text-black py-4 rounded-xl font-black mt-4 hover:scale-[1.02] active:scale-95 transition-all uppercase text-sm"
              >
                CHECKOUT ON WHATSAPP
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
