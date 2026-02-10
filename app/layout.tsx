import type { Metadata } from "next";
import "./globals.css";

// This is the metadata for your favicon and title
export const metadata: Metadata = {
  title: "Royal Chicken",
  description: "Elizabeth Wagura • Slaughter & Delivery Service",
  icons: {
    icon: '/icon.svg', 
  },
};

// THIS WAS MISSING: The default export function
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
