import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js MDX Blog",
  description: "Simple Homepage & blog made with Next.js, MDX and Shadcn UI.",
  openGraph: {
    title: "Next.js MDX Blog",
    description: "Simple Homepage & blog made with Next.js, MDX and Shadcn UI.",
    url: "<サイトのurl>",
    siteName: "Next.js MDX Blog",
    images: [
      {
        width: "1200",
        height: "675",
        url: "<サイトのurl>/ogp-home.png",
      },
    ],
    locale: "jp",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
