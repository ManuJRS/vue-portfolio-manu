import { computed, unref } from 'vue'

/**
 * entryRef: ref() o computed() con el dato de Strapi (home, info, project, etc.)
 * options:
 *  - seoKey: nombre del campo seo en Strapi (por defecto "seo")
 *  - fallbackTitle: string o función (entry) => string
 */
export function useSeo(entryRef, options = {}) {
    const {
        seoKey = 'seo',
        fallbackTitle = 'ManuDev'
    } = options

    const baseUrl = import.meta.env.VITE_STRAPI_URL || ''

    const seoProps = computed(() => {
        const entry = unref(entryRef)

        const resolveFallbackTitle = () => {
            if (typeof fallbackTitle === 'function') {
                return fallbackTitle(entry)
            }
            return fallbackTitle
        }

        if (!entry) {
            return {
                title: resolveFallbackTitle(),
                description: '',
                image: '',
                noIndex: false
            }
        }

        // Soportar:
        // - entry.seo
        // - entry.attributes.seo (por si algún tipo viene anidado)
        const rawSeo =
            entry[seoKey] ||
            entry.attributes?.[seoKey] ||
            entry.attributes?.seo

        if (!rawSeo) {
            return {
                title: resolveFallbackTitle(),
                description: '',
                image: '',
                noIndex: false
            }
        }

        const seo = rawSeo

        let image = ''
        if (seo.shareImage) {
            const img = seo.shareImage
            image =
                img.url ||
                img.formats?.medium?.url ||
                img.formats?.small?.url ||
                img.formats?.thumbnail?.url ||
                ''

            if (image && !image.startsWith('http')) {
                image = `${baseUrl}${image}`
            }
        }

        return {
            title: seo.metaTitle || resolveFallbackTitle(),
            description: seo.metaDescription || '',
            image,
            noIndex: !!seo.noIndex
        }
    })

    return {
        seoProps
    }
}
