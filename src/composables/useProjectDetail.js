import { ref, watch } from 'vue'
import { fetchProjectBySlug } from '@/services/api'

export function useProjectDetail(slugRef) {
    const project = ref(null)
    const loading = ref(true)
    const error = ref('')

    const loadProject = async () => {
        const slug = slugRef.value
        if (!slug) {
            project.value = null
            error.value = 'Slug inválido'
            loading.value = false
            return
        }

        loading.value = true
        error.value = ''
        project.value = null

        try {
            const data = await fetchProjectBySlug(slug)

            if (!data) {
                error.value = 'Proyecto no encontrado'
            } else {
                project.value = data
            }
        } catch (err) {
            console.error(err)
            error.value = 'Error al cargar el proyecto'
        } finally {
            loading.value = false
        }
    }

    watch(slugRef, () => {
        loadProject()
    }, { immediate: true })

    return {
        project,
        loading,
        error,
        reload: loadProject
    }
}
