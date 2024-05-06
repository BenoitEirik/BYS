interface AbstractBlock {
  name: string
  description: string
  category: any

  generateSearchParams(): string
}