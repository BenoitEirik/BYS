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
          checkbox_intitle: 'Search only in the page\'s title',
          checkbox_exclude: 'Exclude from search'
        },
        logical: {
          title: 'Word or phrase comparison',
          placeholder_select: 'Select an operator',
          or: 'OR',
          and: 'AND'
        },
        filetype: {
          title: 'Search for specific files',
          placeholder_input: 'e.g. pdf, doc, txt...',
          placeholder_select: 'Select an extension',
          or: 'OR'
        },
        site: {
          title: 'Search on a specific domain',
          placeholder: 'e.g. wikipedia.org or .org'
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
          checkbox_intitle: 'Rechercher uniquement dans le titre de la page',
          checkbox_exclude: 'Exclure de la recherche'
        },
        logical: {
          title: 'Comparaison de mot ou phrase',
          placeholder_select: 'Sélectionner un opérateur',
          or: 'OU',
          and: 'ET'
        },
        filetype: {
          title: 'Recherche de fichiers spécifiques',
          placeholder_input: 'ex: pdf, doc, txt...',
          placeholder_select: 'Selectionnez une extension',
          or: 'OU'
        },
        site: {
          title: 'Recherche sur un domaine spécifique',
          placeholder: 'ex. wikipedia.org ou .org'
        }
      }
    }
  }
}))
