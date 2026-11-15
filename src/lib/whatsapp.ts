import { WHATSAPP_NUMBER } from './site';

// WhatsApp send helpers — shared by the online order flow and the
// festival enquiry form. The stall's number lives in ONE place
// (WHATSAPP_NUMBER in src/lib/site.ts) and is EMPTY until the client
// gives it. waLink() returns null while it is unset, so the UI can
// fall back to a "Copy details" button instead of a dead link.
export function waLink(message: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Copy text to the clipboard, with a plain-textarea fallback for
// browsers without the async clipboard API. Returns true on success.
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
}
