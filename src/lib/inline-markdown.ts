/**
 * Tiny inline-markdown helper.
 *
 * Supports a single markdown feature: `*text*` -> `<em>text</em>`. Used for
 * affinity titles where a few words need italicizing (book/film titles) but
 * pulling in a full markdown parser would be overkill.
 *
 * The input is HTML-escaped first, so any HTML in the source string is
 * neutralized before we splice in our `<em>` tags. The output is therefore
 * safe to render via `set:html`.
 */
const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const emphasize = (s: string): string =>
  escapeHtml(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');

/** Plain-text version (asterisks stripped) — useful for `aria-label` or `alt`. */
export const stripEmphasis = (s: string): string => s.replace(/\*([^*]+)\*/g, '$1');
