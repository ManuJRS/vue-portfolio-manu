import { apiFetch } from './http'

export async function fetchHomePage() {
    const response = await apiFetch('/home?populate[Sections][populate]=*&populate[seo][populate]=shareImage')
    if (!response || !response.data) {
        throw new Error('No se pudo obtener la página de inicio')
    }
    return response.data
}