import App from "@/app";
import "@/shared/styles/global.scss";

import type { Metadata } from "next";
import { Roboto, Roboto_Serif } from "next/font/google";
import { PropsWithChildren } from "react";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  preload: true,
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Modsen Twitter App",
  description: "Social network similar with twitter functionality",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoSerif.variable}`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
