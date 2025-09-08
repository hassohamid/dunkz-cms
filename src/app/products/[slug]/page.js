import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  try {
    const { slug } = await params;
    const response = await fetchData(slug);

    if (!response?.data?.story) {
      return notFound();
    }

    return (
      <div className="page">
        <StoryblokStory story={response.data.story} />
      </div>
    );
  } catch (error) {
    console.error("Error in ProductPage:", error);
    return notFound();
  }
}

async function fetchData(slug) {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/products/${slug}`, {
    version: "draft",
  });
}
