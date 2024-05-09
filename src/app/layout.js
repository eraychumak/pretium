import { Roboto, Roboto_Condensed } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: 'Pretium',
  description: 'Predict what size lorry you need depending on volume moving.',
}

const fontRoboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "700"]
});

const fontRobotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
  weight: ["400", "700"]
});


export default function RootLayout({
  children,
}) {
  const fonts = `${fontRoboto.variable} ${fontRobotoCondensed.variable}`;

  return (
    <html lang="en">
      <body className={fonts}>{children}</body>
    </html>
  )
}