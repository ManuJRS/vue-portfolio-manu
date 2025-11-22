import { apiFetch } from './http'

export async function fetchInfoPage() {
    const response = await apiFetch(
        '/info?populate[seo][populate]=shareImage'
    )

    if (!response || !response.data) {
        throw new Error('No se pudo obtener la página de info')
    }

    return response.data
}
