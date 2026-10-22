import { PERSONAL_INFO } from '../data/portfolioData';

/**
 * Downloads the user's authentic CV PDF document directly.
 * Uses Blob fetch & createObjectURL for maximum reliability inside iframe / web preview environments,
 * with graceful fallback to standard anchor download.
 */
export async function downloadCvFile(customFilename?: string): Promise<boolean> {
  const filename = customFilename || PERSONAL_INFO.cvFilename;
  const targetUrl = PERSONAL_INFO.cvUrl;

  try {
    const response = await fetch(targetUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch CV file: ${response.statusText}`);
    }
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => window.URL.revokeObjectURL(blobUrl), 2000);
    return true;
  } catch (error) {
    console.warn('Direct blob download failed, falling back to window/anchor open:', error);
    const fallbackLink = document.createElement('a');
    fallbackLink.href = targetUrl;
    fallbackLink.download = filename;
    fallbackLink.target = '_blank';
    fallbackLink.rel = 'noopener noreferrer';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
    return false;
  }
}
