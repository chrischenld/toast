import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "indoorpig.party | sjc",
  description: "flying",
};

export default function SjcLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
