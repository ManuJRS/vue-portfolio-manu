const baseURL = import.meta.env.VITE_STRAPI_URL
const apiBase = `${baseURL}api`


export async function apiFetch(path, options = {}) {
    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
    }

    const token = import.meta.env.VITE_STRAPI_TOKEN
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    const res = await fetch(`${apiBase}${path}`, {
        ...options,
        headers,
    })

    if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(`API error ${res.status}: ${text || res.statusText}`)
    }

    return res.json()
}
