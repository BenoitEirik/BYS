export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      title: 'Build Your Search.',
      operator_categories: {
        keywords: 'Keywords',
        specific: 'Specific operators'
      },
      blocks: {
        keywords: {
          title: 'Add a word or a phrase',
          placeholder: 'Write a word or a phrase',
          checkbox_exact_match: 'Exact match',
          exclude: 'Exclude from search'
        },
        logical: {
          title: 'Word or phrase comparison',
          placeholder_select: 'Select an operator',
          or: 'OR',
          and: 'AND'
        },
        filetype: {
          title: 'Search for specific files',
          placeholder_input: 'pdf, doc, txt...',
          placeholder_select: 'Select an extension'
        }
      }
    },
    fr: {
      title: 'Build Your Search.',
      operator_categories: {
        keywords: 'Mots-clés',
        specific: 'Opérateurs spécifiques'
      },
      blocks: {
        keywords: {
          title: 'Ajouter un mot ou une phrase',
          placeholder: 'Écrivez un mot ou une phrase',
          checkbox_exact_match: 'Mot ou expression exacte',
          exclude: 'Exclure le mot ou l\'expression'
        },
        logical: {
          title: 'Comparaison de mot ou phrase',
          placeholder_select: 'Sélectionner un opérateur',
          or: 'OU',
          and: 'ET'
        },
        filetype: {
          title: 'Recherche de fichiers spécifiques',
          placeholder_input: 'pdf, doc, txt...',
          placeholder_select: 'Selectionnez une extension'
        }
      }
    }
  }
}))
