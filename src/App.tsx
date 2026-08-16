// Écran de démarrage minimal — sert uniquement à vérifier visuellement
// que la charte graphique (couleurs + polices, voir tailwind.config.js et
// design-tokens.md) est bien appliquée. À remplacer par le routage réel
// une fois les pages studio/dashboard/admin construites.
function App() {
  const swatches: { name: string; className: string }[] = [
    { name: 'fond', className: 'bg-fond' },
    { name: 'texte', className: 'bg-texte' },
    { name: 'primaire', className: 'bg-primaire' },
    { name: 'primaire-clair', className: 'bg-primaire-clair' },
    { name: 'accent', className: 'bg-accent' },
    { name: 'accent-rare', className: 'bg-accent-rare' },
  ]

  return (
    <div className="min-h-screen bg-fond text-texte px-6 py-10">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="font-display font-semibold text-4xl italic text-primaire">SileyaBook</h1>
          <p className="font-body text-primaire-clair mt-2">Aperçu de la charte graphique — Fraunces / Work Sans / IBM Plex Mono</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {swatches.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-1">
              <div className={`w-16 h-16 rounded ${s.className}`} style={{ border: '1px solid rgba(34,32,27,0.2)' }} />
              <span className="font-mono text-xs">{s.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-display font-bold text-2xl">Titre en Fraunces</h2>
          <p className="font-body">Corps de texte en Work Sans — le texte courant du site utilise cette police.</p>
          <p className="font-mono text-sm text-primaire-clair">donnée / métadonnée en IBM Plex Mono</p>
        </div>

        <button className="self-start rounded px-5 py-2 font-body font-medium bg-accent text-fond">
          Bouton accent
        </button>
      </div>
    </div>
  )
}

export default App
