import { getStoryblokApi } from "@/lib/storyblok";

export default async function sitemap() {
  const storyblokApi = getStoryblokApi();

  // Get all stories
  const { data } = await storyblokApi.get("cdn/stories", {
    version: "published",
    per_page: 100,
  });

  const stories = data.stories.map((story) => ({
    url: `https://dunkz-cms.vercel.app/${story.full_slug}`,
    lastModified: new Date(story.published_at),
    changeFrequency: "weekly",
    priority: story.full_slug === "home" ? 1 : 0.8,
  }));

  return [
    {
      url: "https://dunkz-cms.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...stories,
  ];
}
