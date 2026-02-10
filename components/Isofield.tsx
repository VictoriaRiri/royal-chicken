"use client";

export default function Isofield() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      {/* Soft Gold Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-500/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-600/5 blur-[120px]" />
    </div>
  );
}
