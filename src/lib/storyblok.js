import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Page from "@/components/sb/Page";
import Hero from "@/components/sb/landing/Hero";
import Header from "@/components/sb/layout/header/Header";
import MenuItem from "@/components/sb/layout/header/MenuItem";
import Footer from "@/components/sb/layout/footer/Footer";
import FooterColumn from "@/components/sb/layout/footer/FooterColumn";
import FooterLink from "@/components/sb/layout/footer/FooterLink";
import PromoBanner from "@/components/sb/layout/header/PromoBanner";
import CTA from "@/components/sb/reusable/CTA";
import Slide from "@/components/sb/landing/Slide";
import Product from "@/components/sb/reusable/Product";
import ProductShowcase from "@/components/sb/landing/ProductShowcase";
import Review from "@/components/sb/reusable/Review";
import Reviews from "@/components/sb/reusable/Reviews";
import SectionBanner from "@/components/sb/reusable/SectionBanner";
import About from "@/components/sb/about/About";
import Press from "@/components/sb/reusable/Press";
import ProductGrid from "@/components/sb/products/ProductGrid";
import Filter from "@/components/sb/products/Filter";

export const components = {
  // Add your components here
  page: Page,
  hero: Hero,
  header: Header,
  menu_item: MenuItem,
  footer: Footer,
  footer_column: FooterColumn,
  footer_link: FooterLink,
  promo_banner: PromoBanner,
  click_to_action: CTA,
  review: Review,
  reviews: Reviews,
  slide: Slide,
  product: Product,
  product_showcase: ProductShowcase,
  section_banner: SectionBanner,
  about: About,
  press_logos: Press,
  products_page: ProductGrid,
  filter: Filter,
};

/**
 * Get the Storyblok API exports a StoryblokApi object to be used in the application
 * @returns {StoryblokApi}
 */
export const getStoryblokApi = storyblokInit({
  accessToken:
    process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});

export const getStoryblokConfig = async () => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/config", {
    version: "draft",
  });
  return data.story.content;
};
