/** Prefix root-relative URLs with the deployment base; preserve external URLs and anchors. */
export function siteUrl(url: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!url.startsWith("/") || url.startsWith("//") || !base) return url;
  if (url === base || url.startsWith(`${base}/`)) return url;
  return `${base}${url}`;
}
