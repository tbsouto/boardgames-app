import type {
  Metadata,
  Viewport,
} from "next";

import "./globals.css";

export const metadata:
Metadata = {

  title:
    "BoardGames",

  description:
    "Colección de juegos",

};

export const viewport:
Viewport = {

  themeColor:
    "#111827",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="es">

      <body>

        {children}

      </body>

    </html>

  );

}