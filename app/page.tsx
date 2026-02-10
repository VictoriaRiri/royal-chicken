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
    <div className="min-h-screen flex flex-col items-center py-12 px-6">
      <header className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none text-[#FF5F15] drop-shadow-sm">
          Royal <br />Chicken
        </h1>
        <p className="bg-[#FF5F15] text-white px-4 py-1 inline-block mt-4 font-bold rounded-lg rotate-2">
          ELIZABETH WAGURA • 0720580353
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {PRODUCTS.map((p) => (
          <div 
            key={p.id}
            onClick={() => addToCart(p.id)}
            className="product-card group p-10 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <h3 className="text-3xl font-black mb-1">{p.name}</h3>
            <p className="text-[#FF5F15] text-2xl font-black italic underline decoration-black">
              KSH {p.price}
            </p>
            
            {cart[p.id] > 0 && (
              <div className="mt-4 bg-black text-white px-4 py-1 inline-block font-black text-sm rounded-md">
                {cart[p.id]} IN BAG
              </div>
            )}
          </div>
        ))}
      </div>

      {total > 0 && (
        <div className="fixed bottom-8 w-full px-6 flex justify-center">
          <button className="bg-[#FF5F15] text-white border-4 border-black px-10 py-5 rounded-2xl text-3xl font-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
            CHECKOUT: KSH {total}
          </button>
        </div>
      )}
    </div>
  );
}
