const BASE_URL = import.meta.env.VITE_STRAPI_URL;

export async function fetchProjectBySlug(slug) {
    const url = `${BASE_URL}/api/projects?filters[slug][$eq]=${slug}&populate=*`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Error al cargar proyecto');
    }

    const json = await res.json();
    const item = json.data[0];

    if (!item) return null;

    const { id, ...rest } = item;
    return { id, ...rest };
}
