import { Header } from "@/components/layout/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header showSearch={false} />
      {children}
    </>
  );
}
