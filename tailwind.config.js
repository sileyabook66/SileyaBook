// Charte graphique SileyaBook — voir design-tokens.md à la racine pour la
// documentation complète (justification des couleurs, usage prévu de
// chaque police, règles d'usage de accent-rare).
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fond: '#F2E9D8', // ivoire manuscrit
        texte: '#22201B', // charcoal encre
        primaire: '#1B2A4A', // indigo profond
        'primaire-clair': '#2E4374', // bleu encre
        accent: '#C98A2C', // ocre doré
        'accent-rare': '#A83232', // rouge bogolan — usage très limité, jamais en fond (voir design-tokens.md)
      },
      fontFamily: {
        // Display/titres — weights 500 à 700, utiliser l'italique pour les
        // accents (voir design-tokens.md).
        display: ['"Fraunces"', 'serif'],
        // Corps de texte.
        body: ['"Work Sans"', 'sans-serif'],
        // Utilitaire/données (chiffres, métadonnées, code).
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
