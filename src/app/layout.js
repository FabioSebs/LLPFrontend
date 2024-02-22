"use client";
import "./globals.css";
import { CookiesProvider } from "next-client-cookies/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const loginClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CookiesProvider>
          <QueryClientProvider client={loginClient}>
            <body>{children}</body>
          </QueryClientProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
