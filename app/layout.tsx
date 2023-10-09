import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "indoorpig.party",
  description: "work in progress",
};

// interface Props {
//   selectedNavItem: string;
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <main className="bg-default-base text-fg-default min-h-screen flex flex-row gap-8">
          {/* <Sidebar selectedNavItem={selectedNavItem} /> */}
          <section className="w-full">{children}</section>
        </main>
      </body>
    </html>
  );
}
