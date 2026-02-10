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

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const total = PRODUCTS.reduce((acc, p) => acc + (cart[p.id] || 0) * p.price, 0);

  const handleCheckout = () => {
    const phone = "254720580353"; // Elizabeth's number in international format
    let message = "Hello Royal Chicken, I would like to order:%0A";
    
    PRODUCTS.forEach(p => {
      if (cart[p.id]) {
        message += `- ${p.name} (x${cart[p.id]})%0A`;
      }
    });
    
    message += `%0ATotal: KSH ${total}`;
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-20 px-4">
      <header className="text-center mb-20">
        <h1 className="text-8xl md:text-[10rem] font-bold tracking-tighter leading-none mb-4 text-white">
          ROYAL <br /> <span className="text-yellow-500">CHICKEN</span>
        </h1>
        <p className="text-gray-500 tracking-[0.4em] uppercase text-xs">
          ELIZABETH WAGURA • 0720580353
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl mb-32">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="organic-blob">
            <h3 className="text-xl font-light tracking-widest text-center mb-2">{p.name}</h3>
            <p className="text-yellow-500 font-bold tracking-widest">KSH {p.price}</p>
            <button 
              onClick={() => addToCart(p.id)}
              className="add-to-cart active:bg-white active:text-black transition-colors"
            >
              {cart[p.id] ? `ADDED (${cart[p.id]})` : "ADD TO CART"}
            </button>
          </div>
        ))}
      </div>

      {total > 0 && (
        <div className="fixed bottom-10 z-50">
          <button 
            onClick={handleCheckout}
            className="bg-yellow-500 text-black px-12 py-5 rounded-full text-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            ORDER VIA WHATSAPP (KSH {total})
          </button>
        </div>
      )}
    </div>
  );
}
