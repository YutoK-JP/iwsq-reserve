import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from '@/app/ui/header';
import { SideNav } from '@/app/ui/dashboard/sidenav'
import "@/app/global.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IWスクエア",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex flex-col h-full">
        <Header subtitle="ダッシュボード" />
        <div className="flex-none flex w-full h-full">
          <div className="w-1/5 h-full border-r-4"><SideNav /></div>
          <div className="w-2/3 h-full p-4 border-2">{children}</div>
        </div>
      </div>
  );
}
