import { ref, onMounted } from 'vue'
import { fetchInfo } from '@/services/api'

export function useInfoPage() {
    const info = ref(null)
    const loading = ref(true)
    const error = ref('')

    const getMediaUrl = (file) => {
        if (!file) return ''
        const baseUrl = import.meta.env.VITE_STRAPI_URL || ''
        const url =
            file.formats?.medium?.url ||
            file.formats?.small?.url ||
            file.formats?.thumbnail?.url ||
            file.url

        if (!url) return ''
        if (url.startsWith('http')) return url
        return `${baseUrl}${url}`
    }

    const load = async () => {
        loading.value = true
        error.value = ''

        try {
            info.value = await fetchInfo()
        } catch (e) {
            error.value = 'Error al cargar la página de información'
        } finally {
            loading.value = false
        }
    }

    onMounted(load)

    return {
        info,
        loading,
        error,
        getMediaUrl,
        reload: load
    }

}
