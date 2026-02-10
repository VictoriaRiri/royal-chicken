"use client";
import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Whole Chicken", price: 500 },
  { id: 2, name: "Liver", price: 30 },
  { id: 3, name: "Gizzards", price: 20 },
  { id: 4, name: "Chicken Legs", price: 5 },
  { id: 5, name: "Necks", price: 30 },
];

export default function Home() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const total = PRODUCTS.reduce((acc, p) => acc + (cart[p.id] || 0) * p.price, 0);

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6">
      <header className="text-center mb-24">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none italic">
          ROYAL <br /><span className="text-yellow-500">CHICKEN</span>
        </h1>
        <p className="text-gray-500 tracking-[0.4em] uppercase text-[10px] mt-6 font-bold">
          Elizabeth Wagura • 0720580353
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-40">
        {PRODUCTS.map((p) => (
          <div 
            key={p.id}
            onClick={() => addToCart(p.id)}
            className="product-card group relative p-12 bg-white/[0.03] border border-white/10 rounded-[3rem] cursor-pointer hover:border-yellow-500/50 transition-all duration-500"
          >
            <h3 className="text-3xl font-bold mb-2 tracking-tight">{p.name}</h3>
            <p className="text-yellow-500 text-xl font-mono uppercase">KSH {p.price}</p>
            
            {cart[p.id] > 0 && (
              <div className="mt-6 inline-block bg-yellow-500 text-black px-6 py-2 rounded-full text-xs font-black">
                {cart[p.id]} IN CART
              </div>
            )}
          </div>
        ))}
      </div>

      {total > 0 && (
        <div className="fixed bottom-10 z-50">
          <button className="bg-yellow-500 text-black px-12 py-6 rounded-full text-3xl font-black shadow-[0_20px_50px_rgba(234,179,8,0.3)] hover:scale-105 active:scale-95 transition-all">
            CHECKOUT: KSH {total}
          </button>
        </div>
      )}
    </div>
  );
}
