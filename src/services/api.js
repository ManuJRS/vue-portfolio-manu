const BASE_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

export async function fetchProjectBySlug(slug) {
    const url = `${BASE_URL}/api/projects?filters[slug][$eq]=${slug}&populate[componentes][populate]=*`;
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

export async function fetchInfo() {
    // Strapi 5: populate en estilo array
    const url = `${BASE_URL}/api/info?populate[0]=imginfo&populate[1]=hability.imageicon`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Error al cargar página de info');
    }

    const json = await res.json();
    return json.data; // single type
}
