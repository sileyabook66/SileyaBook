# Design tokens — SileyaBook

Référence pour la charte graphique du projet. Toute valeur ci-dessous est
définie dans `tailwind.config.js` — ne pas redéfinir ces couleurs/polices
ailleurs, toujours passer par les classes Tailwind (`bg-accent`,
`font-display`, etc.).

## Couleurs

| Nom Tailwind      | Valeur    | Rôle                                  |
|--------------------|-----------|----------------------------------------|
| `fond`             | `#F2E9D8` | Ivoire manuscrit — fond principal      |
| `texte`            | `#22201B` | Charcoal encre — texte courant         |
| `primaire`         | `#1B2A4A` | Indigo profond — éléments principaux   |
| `primaire-clair`   | `#2E4374` | Bleu encre — variante secondaire       |
| `accent`           | `#C98A2C` | Ocre doré — call-to-action, mise en avant |
| `accent-rare`      | `#A83232` | Rouge bogolan — **usage très limité, jamais en fond** |

**Règle `accent-rare`** : réservé aux accents ponctuels (ex. un badge, un
soulignement, un état d'alerte discret) — jamais comme couleur de fond
d'une surface, même petite. Sa rareté est ce qui lui donne du poids
visuel ; l'utiliser plus largement le banalise.

## Typographie

Toutes chargées depuis Google Fonts (voir `index.html`).

| Nom Tailwind | Police         | Usage                                                        |
|--------------|----------------|---------------------------------------------------------------|
| `font-display` | Fraunces (variable) | Titres, display. Poids 500 à 700 uniquement. Utiliser l'italique pour les accents (citations, mots mis en valeur), pas pour du texte courant. |
| `font-body`    | Work Sans      | Corps de texte, UI, formulaires.                              |
| `font-mono`    | IBM Plex Mono  | Données, métadonnées, chiffres, code — jamais pour du texte narratif. |

Poids Work Sans chargés : 400/500/600/700. Poids IBM Plex Mono chargés :
400/500. Si un poids supplémentaire est nécessaire, l'ajouter à l'URL
Google Fonts dans `index.html` plutôt que de charger une police système
de repli avec un poids différent.

## Où c'est défini

- `tailwind.config.js` — noms de couleurs/polices utilisables dans les
  classes (`bg-fond`, `text-primaire`, `font-display`, ...).
- `index.html` — import Google Fonts (Fraunces variable + italique,
  Work Sans, IBM Plex Mono).
- `src/index.css` — styles de base (`body` en `fond`/`texte`/`font-body`,
  titres en `font-display`).
