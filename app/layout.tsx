import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Royal Chicken",
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* Simple CSS glow instead of 3D - zero chance of crashing */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-500/5 blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
