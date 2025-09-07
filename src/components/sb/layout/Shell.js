import { getStoryblokConfig } from "@/lib/storyblok";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default async function Shell({ children }) {
  const config = await getStoryblokConfig();

  return (
    <>
      {config.header?.[0] && <Header blok={config.header[0]} />}
      {children}
      {config.footer?.[0] && <Footer blok={config.footer[0]} />}
    </>
  );
}
