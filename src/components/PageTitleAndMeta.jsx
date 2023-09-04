import { useEffect } from "react";

export function usePageTitleAndMeta(title, description) {
  useEffect(() => {
    // Set the page title
    document.title = title;

    // Add a meta description tag
    const metaTag = document.createElement("meta");
    metaTag.name = "description";
    metaTag.content = description;
    document.head.appendChild(metaTag);

    // Clean up the added meta tag and reset the title when the component is unmounted
    return () => {
      document.title = "Bear Digital Studios"; // Reset the title
      document.head.removeChild(metaTag);
    };
  }, [title, description]);
}
