import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import "./index.css";

const garamond = localfont({
  src: [
    {
      path: "../../public/fonts/Garamond_Premier_Pro_Display.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Garamond_Premier_Pro_Display.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/Garamond_Premier_Pro_Display.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Garamond_Premier_Pro_Display.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Garamond_Premier_Pro_Display.otf",
      weight: "600",
    },
  ],
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  title: "Dxter - from Ullife.ai",
  description: "Enjoy your project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${garamond.variable} antialiased`}>{children}</body>
    </html>
  );
}
