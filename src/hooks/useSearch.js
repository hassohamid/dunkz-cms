import { useState, useEffect } from "react";
import { getStoryblokApi } from "@/lib/storyblok";

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchQuery.length < 1) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const searchProducts = async () => {
      const { data } = await getStoryblokApi().get("cdn/stories", {
        starts_with: "products/",
        version: "published",
      });

      const filtered = data.stories
        .filter((story) => story.slug !== "products")
        .filter((story) =>
          story.content.name?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5);

      setResults(filtered);
      setShowResults(true);
    };

    searchProducts();
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    results,
    showResults,
    setShowResults,
  };
}
