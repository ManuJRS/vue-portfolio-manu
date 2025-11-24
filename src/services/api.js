const BASE_URL = import.meta.env.VITE_STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

const defaultHeaders = {};

if (STRAPI_TOKEN) {
    defaultHeaders.Authorization = `Bearer ${STRAPI_TOKEN}`;
}

async function doFetch(url) {
    const res = await fetch(url, {
        headers: defaultHeaders
    });

    if (!res.ok) {
        console.error('Error Strapi:', res.status, res.statusText, url);
        throw new Error(`Error al llamar a ${url}`);
    }

    return res.json();
}

// === TUS FUNCIONES ===

export async function fetchProjectBySlug(slug) {
    const encodedSlug = encodeURIComponent(slug);

    const url = `${BASE_URL}api/projects` +
        `?filters[slug][$eq]=${encodedSlug}` +
        `&populate[componentes][populate]=*` +
        `&populate[seo][populate]=shareImage`;

    const json = await doFetch(url);
    const item = json.data?.[0];

    if (!item) return null;

    const { id, ...rest } = item;
    return { id, ...rest };
}

export async function fetchInfo() {
    const url = `${BASE_URL}api/info` +
        `?populate[imginfo][populate]=*` +
        `&populate[hability][populate]=*` +
        `&populate[seo][populate]=shareImage`;

    const json = await doFetch(url);
    return json.data;
}

export async function fetchLayout() {
    const url = `${BASE_URL}api/layout?populate[navItems]=*`;

    const json = await doFetch(url);
    return json.data;
}
