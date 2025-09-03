import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Page from "@/components/sb/Page";
import Hero from "@/components/sb/Hero";
import Header from "@/components/sb/Header";
import MenuItem from "@/components/sb/MenuItem";
import Footer from "@/components/sb/Footer";
import FooterColumn from "@/components/sb/FooterColumn";
import FooterLink from "@/components/sb/FooterLink";
import PromoBanner from "@/components/sb/PromoBanner";

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
