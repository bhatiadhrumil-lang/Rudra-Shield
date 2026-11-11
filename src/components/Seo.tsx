import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
};

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function Seo({ title, description, path, image = "/brand/og-image.jpg", noindex = false }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes("RudraShield") ? title : `${title} | RudraShield Cyber Systems`;
    const canonicalUrl = `${window.location.origin}${path}`;
    const ogImage = image.startsWith("http") ? image : `${window.location.origin}${image}`;

    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", ogImage);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const schemaElement = document.getElementById("organization-schema");
    if (schemaElement?.textContent) {
      try {
        const schema = JSON.parse(schemaElement.textContent) as Record<string, unknown>;
        schema.url = `${window.location.origin}/`;
        schema.logo = `${window.location.origin}/brand/logo-emblem.webp`;
        schemaElement.textContent = JSON.stringify(schema);
      } catch {}
    }
  }, [title, description, path, image, noindex]);

  return null;
}
