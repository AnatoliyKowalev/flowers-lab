import type { Metadata } from "next";
import { Rubik, Lora } from "next/font/google";
import AppLayout from "@/components/layouts/app-layout";

import "./globals.css";
import "@/resources/styles/main.css";

const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
  variable: "--font-rubik",
  display: "swap",
});

const lora = Lora({
  weight: ["400"],
  subsets: ["cyrillic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flower Lab",
  description:
    "Вишуканий магазин квітів, де кожна композиція створена з любов’ю та турботою...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${rubik.variable} ${lora.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="font-rubik text-foreground antialiased light">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
