import Link from "next/link"

const features = [
  {
    title: "Gestion des élèves",
    description: "Suivez les inscriptions, dossiers et parcours scolaires de chaque élève en un clin d'œil.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="18" cy="14" r="6" fill="#6366f1" />
        <path d="M6 38c0-6.627 5.373-12 12-12s12 5.373 12 12" fill="#818cf8" />
        <circle cx="34" cy="12" r="5" fill="#a5b4fc" />
        <path d="M24 36c0-5.523 4.477-10 10-10 1.5 0 2.916.336 4.176.936C37.15 23.668 34.042 22 30.5 22c-3.184 0-5.976 1.364-7.946 3.54" fill="#c7d2fe" />
        <circle cx="40" cy="8" r="3" fill="#f97316" />
        <path d="M8 10h8M12 6v8" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" />
        <rect x="36" y="30" width="8" height="8" rx="2" fill="#10b981" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Suivi des notes",
    description: "Saisissez, consultez et analysez les bulletins et performances de vos élèves.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="8" width="28" height="32" rx="3" fill="#e0e7ff" />
        <rect x="10" y="14" width="20" height="2" rx="1" fill="#6366f1" />
        <rect x="10" y="19" width="16" height="2" rx="1" fill="#818cf8" />
        <rect x="10" y="24" width="18" height="2" rx="1" fill="#a5b4fc" />
        <rect x="10" y="29" width="12" height="2" rx="1" fill="#c7d2fe" />
        <circle cx="38" cy="16" r="6" fill="#10b981" />
        <path d="M35.5 16l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="34" y="26" width="10" height="14" rx="2" fill="#f97316" opacity="0.7" />
        <path d="M37 31h4M37 34h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Gestion financière",
    description: "Gérez les frais scolaires, paiements et suivez les revenus avec des rapports détaillés.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="12" width="40" height="26" rx="3" fill="#e0e7ff" />
        <rect x="4" y="12" width="40" height="8" rx="3" fill="#4f46e5" />
        <circle cx="36" cy="16" r="2" fill="#f97316" />
        <circle cx="32" cy="16" r="2" fill="#10b981" />
        <rect x="10" y="26" width="12" height="6" rx="1" fill="#818cf8" />
        <rect x="26" y="26" width="12" height="6" rx="1" fill="#a5b4fc" />
        <text x="24" y="44" textAnchor="middle" fill="#4f46e5" fontSize="6" fontWeight="bold">$</text>
        <path d="M16 22h16" stroke="white" strokeWidth="1" />
        <circle cx="10" cy="8" r="3" fill="#f97316" />
        <path d="M9 8h2M10 7v2" stroke="white" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Rapports intelligents",
    description: "Générez des statistiques et rapports IA pour une prise de décision éclairée.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="6" width="36" height="36" rx="4" fill="#e0e7ff" />
        <path d="M14 34V22M22 34V16M30 34V26M38 34V20" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 18l8-6 8 4 8-8" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="18" r="2" fill="#f97316" />
        <circle cx="18" cy="12" r="2" fill="#f97316" />
        <circle cx="26" cy="16" r="2" fill="#f97316" />
        <circle cx="34" cy="8" r="2" fill="#f97316" />
        <path d="M36 8l2-2 2 2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8" y="36" width="32" height="2" rx="1" fill="#c7d2fe" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-600 to-brand-400 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg text-gray-900">EPL Les Lumières</span>
          </div>
          <Link href="/auth/login" className="btn-primary text-sm px-5 py-2">
            Se connecter
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-hero-gradient pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-accent-400 rounded-full animate-bounce-subtle" />
                Plateforme moderne de gestion scolaire
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                EPL Les{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-400">
                  Lumières
                </span>
              </h1>
              <p className="text-lg text-white/80 max-w-lg mb-8 leading-relaxed">
                La plateforme de gestion scolaire intelligente. Simplifiez l&apos;administration, suivez les performances et prenez des décisions éclairées.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/auth/login" className="btn-primary text-base px-8 py-3.5">
                  Commencer maintenant
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-all duration-200">
                  En savoir plus
                </a>
              </div>
            </div>

            {/* Right: SVG Illustration */}
            <div className="hidden lg:flex justify-center animate-fade-in">
              <svg viewBox="0 0 500 400" fill="none" className="w-full max-w-lg drop-shadow-2xl animate-float">
                {/* Sky background */}
                <rect x="0" y="0" width="500" height="400" rx="24" fill="#e0e7ff" opacity="0.3" />
                
                {/* Ground / grass */}
                <ellipse cx="250" cy="370" rx="230" ry="30" fill="#10b981" opacity="0.15" />
                
                {/* School building - main */}
                <rect x="120" y="140" width="260" height="180" rx="8" fill="#4f46e5" />
                <rect x="120" y="140" width="260" height="30" rx="8" fill="#312e81" />
                
                {/* Roof */}
                <path d="M100 145 L250 60 L400 145" fill="#312e81" />
                <path d="M110 145 L250 70 L390 145" fill="#4338ca" />
                
                {/* Flag on roof */}
                <line x1="250" y1="60" x2="250" y2="30" stroke="#818cf8" strokeWidth="2" />
                <rect x="250" y="30" width="18" height="12" rx="2" fill="#f97316" />
                
                {/* Windows - row 1 */}
                <rect x="140" y="185" width="30" height="30" rx="4" fill="#818cf8" />
                <rect x="140" y="185" width="30" height="15" rx="4" fill="#a5b4fc" />
                <rect x="190" y="185" width="30" height="30" rx="4" fill="#818cf8" />
                <rect x="190" y="185" width="30" height="15" rx="4" fill="#a5b4fc" />
                <rect x="280" y="185" width="30" height="30" rx="4" fill="#818cf8" />
                <rect x="280" y="185" width="30" height="15" rx="4" fill="#a5b4fc" />
                <rect x="330" y="185" width="30" height="30" rx="4" fill="#818cf8" />
                <rect x="330" y="185" width="30" height="15" rx="4" fill="#a5b4fc" />
                
                {/* Windows - row 2 */}
                <rect x="140" y="235" width="30" height="30" rx="4" fill="#818cf8" />
                <rect x="140" y="235" width="30" height="15" rx="4" fill="#c7d2fe" />
                <rect x="190" y="235" width="30" height="30" rx="4" fill="#818cf8" />
                <rect x="190" y="235" width="30" height="15" rx="4" fill="#c7d2fe" />
                <rect x="280" y="235" width="30" height="30" rx="4" fill="#818cf8" />
                <rect x="280" y="235" width="30" height="15" rx="4" fill="#c7d2fe" />
                <rect x="330" y="235" width="30" height="30" rx="4" fill="#818cf8" />
                <rect x="330" y="235" width="30" height="15" rx="4" fill="#c7d2fe" />
                
                {/* Door */}
                <rect x="225" y="270" width="50" height="50" rx="6" fill="#1e1b4b" />
                <rect x="225" y="270" width="50" height="25" rx="6" fill="#312e81" />
                <circle cx="265" cy="298" r="3" fill="#f97316" />
                
                {/* Clock on building */}
                <circle cx="250" cy="155" r="10" fill="white" />
                <circle cx="250" cy="155" r="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="250" y1="155" x2="250" y2="149" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="250" y1="155" x2="254" y2="155" stroke="#1e1b4b" strokeWidth="1" strokeLinecap="round" />
                
                {/* Student 1 - left */}
                <circle cx="70" cy="310" r="14" fill="#f97316" />
                <circle cx="70" cy="306" r="5" fill="#fed7aa" />
                <rect x="58" y="318" width="24" height="28" rx="4" fill="#6366f1" />
                <rect x="60" y="346" width="8" height="16" rx="2" fill="#312e81" />
                <rect x="72" y="346" width="8" height="16" rx="2" fill="#312e81" />
                <rect x="48" y="322" width="12" height="4" rx="2" fill="#fed7aa" transform="rotate(-20 48 322)" />
                <rect x="82" y="320" width="12" height="4" rx="2" fill="#fed7aa" transform="rotate(15 82 320)" />
                
                {/* Student 2 - right */}
                <circle cx="430" cy="310" r="14" fill="#10b981" />
                <circle cx="430" cy="306" r="5" fill="#d1fae5" />
                <rect x="418" y="318" width="24" height="28" rx="4" fill="#4f46e5" />
                <rect x="420" y="346" width="8" height="16" rx="2" fill="#1e1b4b" />
                <rect x="432" y="346" width="8" height="16" rx="2" fill="#1e1b4b" />
                <rect x="408" y="322" width="12" height="4" rx="2" fill="#d1fae5" transform="rotate(-15 408 322)" />
                <rect x="442" y="320" width="12" height="4" rx="2" fill="#d1fae5" transform="rotate(20 442 320)" />
                
                {/* Floating graduation cap */}
                <g transform="translate(80, 80) rotate(-10)">
                  <polygon points="0,-12 20,0 0,12 -20,0" fill="#1e1b4b" />
                  <rect x="-2" y="0" width="4" height="8" fill="#312e81" />
                  <circle cx="0" cy="-12" r="3" fill="#f97316" />
                  <path d="M-20 0 L-22 10" stroke="#1e1b4b" strokeWidth="1.5" />
                  <circle cx="-22" cy="12" r="2" fill="#f97316" />
                </g>
                
                {/* Floating book */}
                <g transform="translate(400, 60) rotate(12)">
                  <rect x="-16" y="-10" width="32" height="22" rx="2" fill="#f97316" />
                  <rect x="-14" y="-8" width="28" height="18" rx="1" fill="#fed7aa" />
                  <line x1="0" y1="-8" x2="0" y2="10" stroke="#f97316" strokeWidth="1" />
                  <rect x="-12" y="-4" width="10" height="2" rx="1" fill="#fb923c" />
                  <rect x="-12" y="0" width="8" height="2" rx="1" fill="#fb923c" />
                  <rect x="4" y="-4" width="10" height="2" rx="1" fill="#fb923c" />
                  <rect x="4" y="0" width="8" height="2" rx="1" fill="#fb923c" />
                </g>
                
                {/* Floating star */}
                <g transform="translate(350, 100)">
                  <polygon points="0,-10 3,-3 10,-3 5,2 7,10 0,5 -7,10 -5,2 -10,-3 -3,-3" fill="#f97316" opacity="0.8" />
                </g>
                
                {/* Floating star 2 */}
                <g transform="translate(150, 50)">
                  <polygon points="0,-8 2,-2 8,-2 4,1 5,8 0,4 -5,8 -4,1 -8,-2 -2,-2" fill="#fbbf24" opacity="0.6" />
                </g>
                
                {/* Clouds */}
                <g opacity="0.5">
                  <ellipse cx="60" cy="60" rx="30" ry="12" fill="white" />
                  <ellipse cx="45" cy="55" rx="18" ry="10" fill="white" />
                  <ellipse cx="75" cy="55" rx="20" ry="10" fill="white" />
                </g>
                <g opacity="0.4">
                  <ellipse cx="420" cy="45" rx="25" ry="10" fill="white" />
                  <ellipse cx="405" cy="40" rx="15" ry="8" fill="white" />
                  <ellipse cx="435" cy="40" rx="18" ry="8" fill="white" />
                </g>
                
                {/* Trees */}
                <rect x="30" y="310" width="6" height="40" rx="2" fill="#7c3aed" opacity="0.4" />
                <ellipse cx="33" cy="305" rx="18" ry="16" fill="#10b981" opacity="0.4" />
                <rect x="464" y="315" width="6" height="35" rx="2" fill="#7c3aed" opacity="0.4" />
                <ellipse cx="467" cy="310" rx="16" ry="14" fill="#10b981" opacity="0.4" />
                
                {/* Sun */}
                <circle cx="450" cy="40" r="22" fill="#f97316" opacity="0.2" />
                <circle cx="450" cy="40" r="16" fill="#f97316" opacity="0.3" />
                <circle cx="450" cy="40" r="8" fill="#fbbf24" opacity="0.6" />
                
                {/* Path to school */}
                <path d="M250 320 Q250 350 200 380" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.5" />
                <path d="M250 320 Q250 350 300 380" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <svg viewBox="0 0 1440 80" fill="none" className="w-full -mb-px">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#f8fafc" />
        </svg>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-slide-up">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Tout ce dont vous avez{" "}
              <span className="gradient-text">besoin</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Une suite complète d&apos;outils pour moderniser la gestion de votre établissement scolaire.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="glass-card-hover p-6 group cursor-default animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-hero-gradient rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden animate-slide-up">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Prêt à transformer votre école ?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Rejoignez les établissements qui font confiance à EPL Les Lumières pour leur gestion quotidienne.
              </p>
              <Link href="/auth/login" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-700 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
                Accéder à la plateforme
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-brand-600 to-brand-400 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="font-display font-bold text-sm text-gray-900">EPL Les Lumières</span>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} EPL Les Lumières. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Link href="/legal/terms" className="hover:text-brand-600 transition-colors">Conditions d&apos;utilisation</Link>
              <span>·</span>
              <Link href="/legal/privacy" className="hover:text-brand-600 transition-colors">Politique de confidentialité</Link>
              <span>·</span>
              <Link href="/legal/cookies" className="hover:text-brand-600 transition-colors">Politique de cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
