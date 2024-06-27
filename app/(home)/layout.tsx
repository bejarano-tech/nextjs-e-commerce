import { Header } from "@/components/layout/Header";
import { ReactNode } from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
