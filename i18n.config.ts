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
          title: 'Add one or more keywords',
          input_placeholder: 'Writes one or more keywords'
        },
        filetype: {
          title: 'Search for specific files',
          placeholder: 'Select an extension'
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
          title: 'Ajouter un ou plusieurs mots-clés',
          placeholder: 'Écrivez un ou plusieurs mots-clés'
        },
        filetype: {
          title: 'Recherche de fichiers spécifiques',
          placeholder: 'Selectionnez une extension'
        }
      }
    }
  }
}))
