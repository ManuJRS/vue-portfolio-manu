// src/composables/useLayout.js
import { ref, onMounted } from 'vue'
import { fetchLayout } from '@/services/api'

export function useLayout() {
    const layout = ref(null)
    const navItems = ref([])
    const loading = ref(true)
    const error = ref(null)
    const footerText = ref('Desarrollado por ManuDev')

    const loadLayout = async () => {
        loading.value = true
        error.value = null

        try {
            const data = await fetchLayout()
            layout.value = data
            navItems.value = data?.navItems || data?.attributes?.navItems || []
            footerText.value =
                data?.footerText ||
                data?.attributes?.footerText ||
                'Desarrollado por ManuDev'
        } catch (err) {
            console.error(err)
            error.value = 'Error al cargar layout'
        } finally {
            loading.value = false
        }
    }

    onMounted(loadLayout)

    return {
        layout,
        navItems,
        footerText,
        loading,
        error,
        reloadLayout: loadLayout
    }
}
