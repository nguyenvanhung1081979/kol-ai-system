import { issueSignedToken, presignUrl } from "@vercel/blob";

const LINK_VALID_HOURS = 72;

export function isBlobConfigured() {
  // Private Blob stores provisioned via the newer Vercel flow authenticate over OIDC
  // (VERCEL_OIDC_TOKEN, injected automatically at runtime) paired with BLOB_STORE_ID,
  // instead of a static BLOB_READ_WRITE_TOKEN.
  return !!process.env.BLOB_STORE_ID || !!process.env.BLOB_READ_WRITE_TOKEN;
}

export async function getProductDownloadUrl(pathname: string): Promise<string> {
  const storeId = process.env.BLOB_STORE_ID;

  const token = await issueSignedToken({
    pathname,
    operations: ["get"],
    validUntil: Date.now() + 7 * 24 * 60 * 60 * 1000, // max 7 days, we cap below
    ...(storeId ? { storeId } : {}),
  });

  const { presignedUrl } = await presignUrl(token, {
    operation: "get",
    pathname,
    access: "private",
    validUntil: Date.now() + LINK_VALID_HOURS * 60 * 60 * 1000,
  });

  return presignedUrl;
}
