import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "indoorpig.party | toaster",
  description: "pop those toasts",
};

export default function ToasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
