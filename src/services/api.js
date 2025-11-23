const BASE_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

export async function fetchProjectBySlug(slug) {
    const encodedSlug = encodeURIComponent(slug)

    const url = `${BASE_URL}/api/projects` +
        `?filters[slug][$eq]=${encodedSlug}` +
        `&populate[componentes][populate]=*` +
        `&populate[seo][populate]=shareImage`

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error('Error al cargar proyecto')
    }

    const json = await res.json()
    const item = json.data?.[0]

    if (!item) return null


    // en Strapi 5 tus datos vienen planos, así que esto está OK
    const { id, ...rest } = item
    return { id, ...rest }
}


export async function fetchInfo() {
    const url = `${BASE_URL}/api/info?populate[imginfo][populate]=*&populate[hability][populate]=*&populate[seo][populate]=shareImage`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Error al cargar página de info');
    }

    const json = await res.json();
    return json.data;
}


export async function fetchLayout() {
    const res = await fetch(`${BASE_URL}/api/layout?populate[navItems]=*`)

    if (!res.ok) {
        throw new Error('Error fetching layout')
    }

    const json = await res.json()
    return json.data
}