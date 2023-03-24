export const usePreview = () => {
  const { query } = useRoute()
  const config = useRuntimeConfig()

  return ref(
    query.preview && query.secret === config.public.contentfulPreviewSecret
  )
}
