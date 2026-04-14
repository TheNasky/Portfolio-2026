import { getPersonWebsiteJsonLd } from "@/lib/metadata";

export function JsonLd() {
  const data = getPersonWebsiteJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
