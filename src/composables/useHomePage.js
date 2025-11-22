import { ref, onMounted } from 'vue'
import { fetchHomePage } from '../services/home.service'

export function useHomePage() {
  const home = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const loadHome = async () => {
    loading.value = true
    error.value = null

    try {
      home.value = await fetchHomePage()
    } catch (err) {
      console.error(err)
      error.value = err?.message || 'Error al cargar la página'
    } finally {
      loading.value = false
    }
  }

  onMounted(loadHome)

  return {
    home,
    loading,
    error,
    reload: loadHome
  }
}
