import { issueSignedToken, presignUrl } from "@vercel/blob";

const LINK_VALID_HOURS = 72;

export function isBlobConfigured() {
  return !!process.env.BLOB_READ_WRITE_TOKEN;
}

export async function getProductDownloadUrl(pathname: string): Promise<string> {
  const token = await issueSignedToken({
    pathname,
    operations: ["get"],
    validUntil: Date.now() + 7 * 24 * 60 * 60 * 1000, // max 7 days, we cap below
  });

  const { presignedUrl } = await presignUrl(token, {
    operation: "get",
    pathname,
    access: "private",
    validUntil: Date.now() + LINK_VALID_HOURS * 60 * 60 * 1000,
  });

  return presignedUrl;
}
