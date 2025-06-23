import "./globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chethaka Sathmal",
  description:
    "Portfolio of Chethaka Sathmal — I build websites and mobile apps using modern tools like Next.js and React Native.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} antialiased`}>
        <main>{children}</main>
        <Toaster
          position="top-center"
          toastOptions={{
            classNames: {
              description: "!text-gray-600",
            },
          }}
        />
      </body>
    </html>
  );
}
