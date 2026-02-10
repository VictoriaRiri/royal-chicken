"use client";
import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Whole Chicken", price: 500, unit: "pc" },
  { id: 2, name: "Liver", price: 30, unit: "pc" },
  { id: 3, name: "Gizzards", price: 20, unit: "pc" },
  { id: 4, name: "Chicken Legs", price: 5, unit: "pc" },
  { id: 5, name: "Necks", price: 30, unit: "pc" },
];

export default function Home() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const total = PRODUCTS.reduce((acc, p) => acc + (cart[p.id] || 0) * p.price, 0);

  return (
    <div className="min-h-screen flex flex-col items-center p-8 font-quirky">
      <header className="mt-20 mb-20 text-center">
        <h1 className="text-8xl md:text-9xl text-white font-black tracking-tighter">
          ROYAL <span className="text-yellow-500">CHICKEN</span>
        </h1>
        <p className="text-gray-400 text-lg uppercase tracking-widest mt-4">Elizabeth Wagura Boutique</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-32">
        {PRODUCTS.map((p) => (
          <div 
            key={p.id}
            onClick={() => addToCart(p.id)}
            className="product-card group relative p-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 hover:border-yellow-500/50"
          >
            <h3 className="text-4xl text-white mb-2">{p.name}</h3>
            <p className="text-yellow-500 text-2xl font-bold">Ksh {p.price} <span className="text-xs opacity-50">/{p.unit}</span></p>
            
            {cart[p.id] > 0 && (
              <div className="absolute top-4 right-4 bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {cart[p.id]}
              </div>
            )}
            
            <button className="mt-8 text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity border-b border-yellow-500">
              TAP TO ADD
            </button>
          </div>
        ))}
      </div>

      {total > 0 && (
        <div className="fixed bottom-10 z-50 animate-bounce">
          <button className="bg-yellow-500 text-black px-12 py-5 rounded-full text-2xl font-black shadow-[0_0_30px_rgba(255,215,0,0.4)]">
            CHECKOUT: KSH {total}
          </button>
        </div>
      )}
    </div>
  );
}
