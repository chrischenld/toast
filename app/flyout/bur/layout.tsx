import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "indoorpig.party | bur",
  description: "flying",
};

export default function BurLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
