/**
 * Canonical site URL for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com).
 * On Vercel, VERCEL_URL is used when unset.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}
