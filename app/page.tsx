"use client";
import React, { useState } from 'react';

const PRODUCTS = [
  { id: 1, title: "Whole Chicken", price: 800 },
  { id: 2, title: "Chicken Parts", price: 450 },
  { id: 3, title: "Special Cuts", price: 600 },
];

export default function Home() {
  const [cart, setCart] = useState<{title: string, qty: number}[]>([]);

  const addToCart = (title: string) => {
    setCart(prev => {
      const exists = prev.find(i => i.title === title);
      return exists 
        ? prev.map(i => i.title === title ? {...i, qty: i.qty + 1} : i)
        : [...prev, { title, qty: 1 }];
    });
  };

  const checkout = () => {
    const message = `Order for Elizabeth Wagura: ${cart.map(i => `${i.qty}x ${i.title}`).join(", ")}`;
    window.open(`https://wa.me/254720580353?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8 pt-32 text-center">
      <h1 className="text-6xl md:text-8xl font-bold tracking-[0.5em] uppercase mb-4">
        Royal <span className="text-yellow-500">Chicken</span>
      </h1>
      <p className="text-gray-500 tracking-widest text-xs mb-20">ELIZABETH WAGURA • 0720580353</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="glass-card p-12 flex flex-col items-center">
            <h2 className="text-xl font-light tracking-widest mb-4 uppercase">{p.title}</h2>
            <p className="text-yellow-500 font-mono mb-8 text-sm">KES {p.price}</p>
            <button 
              onClick={() => addToCart(p.title)}
              className="mt-auto px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <button 
          onClick={checkout}
          className="fixed bottom-10 bg-yellow-500 text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform"
        >
          Checkout ({cart.reduce((a, b) => a + b.qty, 0)})
        </button>
      )}
    </div>
  );
}