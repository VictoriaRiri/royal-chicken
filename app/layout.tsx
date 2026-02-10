import type { Metadata } from "next";
import "./globals.css";
import RoyalScene from "../components/RoyalScene";

export const metadata: Metadata = {
  title: "Royal Chicken | Premium Atelier",
  description: "Slaughter & Delivery Service by Elizabeth Wagura",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        href: "/icon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden">
        {/* Render 3D Scene in the background */}
        <RoyalScene />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
