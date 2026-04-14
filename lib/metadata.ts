import type { Metadata, Viewport } from "next";
import { seoContent } from "@/content/seo";
import { getSiteUrl } from "@/lib/site";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export function buildRootMetadata(): Metadata {
  const metadataBase = new URL(getSiteUrl());

  return {
    metadataBase,
    title: {
      default: seoContent.defaultTitle,
      template: seoContent.titleTemplate,
    },
    description: seoContent.description,
    applicationName: seoContent.siteName,
    authors: [{ name: seoContent.siteName, url: metadataBase.href }],
    creator: seoContent.siteName,
    publisher: seoContent.siteName,
    keywords: [...seoContent.keywords],
    category: "technology",
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: seoContent.locale,
      url: metadataBase.href,
      siteName: seoContent.siteName,
      title: seoContent.defaultTitle,
      description: seoContent.description,
    },
    twitter: {
      card: "summary",
      title: seoContent.defaultTitle,
      description: seoContent.description,
      ...(seoContent.twitterHandle
        ? { creator: seoContent.twitterHandle }
        : {}),
    },
    ...(googleVerification
      ? {
          verification: {
            google: googleVerification,
          },
        }
      : {}),
  };
}

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0f14" },
    { media: "(prefers-color-scheme: light)", color: "#0b0f14" },
  ],
  colorScheme: "dark",
};

export function getPersonWebsiteJsonLd(): Record<string, unknown> {
  const base = getSiteUrl().replace(/\/$/, "");
  const personId = `${base}/#person`;
  const websiteId = `${base}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: base,
        name: seoContent.siteName,
        description: seoContent.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: seoContent.siteName,
        url: base,
        jobTitle: "Full Stack Engineer & Product Designer",
        email: "TheNasky@gmail.com",
        sameAs: [
          "https://github.com/TheNasky",
          "https://www.linkedin.com/in/valentin-ballesteros/",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buenos Aires",
          addressCountry: "AR",
        },
      },
    ],
  };
}
