"use client";
import "./globals.css";
import { CookiesProvider } from "react-cookie";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <body>{children}</body>
        </CookiesProvider>
      </body>
    </html>
  );
}
