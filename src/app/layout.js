import "./globals.css";
import StoryBlokProvider from "@/components/StoryBlokProvider";
import { getStoryblokApi } from "@/lib/storyblok";
import Header from "@/components/sb/header/Header";
import Footer from "@/components/sb/footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/config", {
    version: "draft",
  });

  const config = data.story.content;

  return (
    <StoryBlokProvider>
      <html lang="en">
        <body>
          {config.header?.[0] && <Header blok={config.header[0]} />}

          {children}
          {config.footer?.[0] && <Footer blok={config.footer[0]} />}
        </body>
      </html>
    </StoryBlokProvider>
  );
}
