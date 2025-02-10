import App from "@/app";
import "@/shared/styles/global.scss";

import type { Metadata } from "next";
import { Roboto, Roboto_Serif } from "next/font/google";
import { PropsWithChildren } from "react";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
