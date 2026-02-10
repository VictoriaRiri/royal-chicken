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

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-black text-white">
      <header className="mt-20 mb-24 text-center">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
          ROYAL <span className="text-yellow-500">CHICKEN</span>
        </h1>
        <p className="text-gray-500 tracking-[0.5em] text-[10px] mt-4 uppercase">Elizabeth Wagura • Boutique Slaughter</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-40">
        {PRODUCTS.map((p) => (
          <div 
            key={p.id}
            onClick={() => addToCart(p.id)}
            className="product-card group relative p-12 bg-white/[0.02] border border-white/10 rounded-[3rem] cursor-pointer hover:border-yellow-500/50 transition-all duration-500 flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-2xl font-bold tracking-widest mb-2">{p.name}</h3>
            <p className="text-yellow-500 font-mono">KSH {p.price}</p>
            
            {cart[p.id] > 0 && (
              <div className="mt-4 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-black">
                {cart[p.id]} IN CART
              </div>
            )}
          </div>
        ))}
      </div>

      {total > 0 && (
        <div className="fixed bottom-10 z-50">
          <button className="bg-yellow-500 text-black px-16 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition-transform active:scale-95">
            CHECKOUT: KSH {total}
          </button>
        </div>
      )}
    </div>
  );
}
