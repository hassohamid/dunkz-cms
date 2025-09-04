import "./globals.css";
import StoryBlokProvider from "@/components/StoryBlokProvider";
import Header from "@/components/sb/header/Header";
import Footer from "@/components/sb/footer/Footer";
import { Inter } from "next/font/google";
import { getStoryblokConfig } from "@/lib/storyblok";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const config = await getStoryblokConfig();

  return (
    <StoryBlokProvider>
      <html lang="en">
        <body className={inter.className}>
          {config.header?.[0] && <Header blok={config.header[0]} />}

          {children}
          {config.footer?.[0] && <Footer blok={config.footer[0]} />}
        </body>
      </html>
    </StoryBlokProvider>
  );
}
