import type {
  Metadata,
  Viewport,
} from "next";

import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "BoardGames",
  description: "Colección de juegos",
};

export const viewport: Viewport = {
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}