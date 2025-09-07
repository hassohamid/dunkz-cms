import "./globals.css";
import StoryBlokProvider from "@/components/StoryBlokProvider";
import { Inter } from "next/font/google";
import { getStoryblokConfig } from "@/lib/storyblok";
import SmoothScrolling from "@/components/SmoothScroll";
import Shell from "@/components/sb/layout/Shell";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const config = await getStoryblokConfig();

  return (
    <StoryBlokProvider>
      <html lang="en">
        <body className={inter.className}>
          <SmoothScrolling />
          <Shell>{children}</Shell>
        </body>
      </html>
    </StoryBlokProvider>
  );
}
