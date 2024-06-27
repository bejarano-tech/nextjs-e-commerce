import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { CartProvider } from "@/context/CartContext";
import { ReactNode } from "react";
import { SearchProvider } from "@/context/SearchContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs E-Commerce",
  description: "Nextjs E-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <CartProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
