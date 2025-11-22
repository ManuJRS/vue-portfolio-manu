const BASE_URL = import.meta.env.VITE_STRAPI_URL || '';

export function getMediaUrl(file) {
    if (!file) return '';

    const formats = file.formats || {};
    const url =
        file.url ||
        formats.large?.url ||
        formats.medium?.url ||
        formats.small?.url ||
        formats.thumbnail?.url;

    if (!url) return '';

    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }

    return `${BASE_URL}${url}`;
}
