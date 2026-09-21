"use client"

import Link from "next/link"

const cookies = [
  {
    name: "session_id",
    finality: "Maintien de la session utilisateur et authentification",
    duration: "Session",
    type: "Technique",
  },
  {
    name: "csrf_token",
    finality: "Protection contre les attaques de falsification de requêtes",
    duration: "Session",
    type: "Technique",
  },
  {
    name: "analytics_id",
    finality: "Mesure d&apos;audience et analyse de l&apos;utilisation de la plateforme",
    duration: "13 mois",
    type: "Analytique",
  },
  {
    name: "preferences",
    finality: "Sauvegarde des préférences utilisateur (langue, thème, affichage)",
    duration: "6 mois",
    type: "Fonctionnel",
  },
  {
    name: "consent_status",
    finality: "Mémorisation du consentement aux cookies de l&apos;utilisateur",
    duration: "12 mois",
    type: "Technique",
  },
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-surface-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Politique de cookies</h1>
          </div>
          <p className="text-sm text-gray-500">Dernière mise à jour : 20 septembre 2026</p>
        </div>

        <div className="space-y-6">
          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette, smartphone) lors de votre visite sur la plateforme. Les cookies permettent de reconnaître votre appareil et de mémoriser certaines informations sur vos préférences ou actions passées.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Les cookies peuvent être permanents (persistants) ou temporaires (de session). Un cookie permanent reste sur votre appareil même après la fermeture du navigateur, tandis qu&apos;un cookie de session est supprimé à la fermeture de celui-ci.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Types de cookies utilisés</h2>
            <div className="space-y-4 mt-4">
              <div className="bg-brand-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  Cookies techniques
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ces cookies sont essentiels au fonctionnement de la plateforme. Ils vous permettent de naviguer entre les pages, d&apos;accéder aux zones sécurisées et d&apos;utiliser les fonctionnalités de base. Sans ces cookies, la plateforme ne peut pas fonctionner correctement.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  Cookies analytiques
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ces cookies collectent des informations anonymes sur la manière dont les utilisateurs interagissent avec la plateforme. Ils nous aident à comprendre le nombre de visiteurs, les pages les plus consultées et les éventuelles erreurs rencontrées, afin d&apos;améliorer nos services.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  Cookies fonctionnels
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ces cookies permettent de mémoriser vos choix et préférences (langue, thème d&apos;affichage, etc.) pour vous offrir une expérience personnalisée. Ils ne sont pas strictement nécessaires au fonctionnement de la plateforme.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Liste des cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Voici la liste détaillée des cookies utilisés sur la plateforme :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="text-xs text-gray-500 uppercase tracking-wider border-b border-surface-200">
                    <th className="px-4 py-3 font-semibold">Nom</th>
                    <th className="px-4 py-3 font-semibold">Finalité</th>
                    <th className="px-4 py-3 font-semibold">Durée</th>
                    <th className="px-4 py-3 font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((cookie) => (
                    <tr key={cookie.name} className="border-b border-surface-100 hover:bg-brand-50/50 transition-colors">
                      <td className="px-4 py-3 font-mono text-brand-700 font-medium">{cookie.name}</td>
                      <td className="px-4 py-3 text-gray-600" dangerouslySetInnerHTML={{ __html: cookie.finality }} />
                      <td className="px-4 py-3 text-gray-600">{cookie.duration}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          cookie.type === "Technique" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                          cookie.type === "Analytique" ? "bg-blue-50 text-blue-700 border border-blue-200" :
                          "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Gestion des cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Lors de votre première visite, un bandeau de consentement vous permet de choisir quels cookies accepter. Vous pouvez modifier vos choix à tout moment :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>En cliquant sur l&apos;icône de cookies présente dans le pied de page</li>
              <li>En configurant les paramètres de votre navigateur</li>
              <li>En nous contactant directement</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              La plupart des navigateurs permettent de bloquer ou supprimer les cookies. Toutefois, le blocage des cookies techniques peut empêcher l&apos;utilisation de certaines fonctionnalités de la plateforme.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Durée de conservation</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Les cookies sont conservés pour des durées variables selon leur type :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li><strong>Cookies de session</strong> : supprimés à la fermeture du navigateur</li>
              <li><strong>Cookies persistants</strong> : conservés pour une durée maximale de 13 mois</li>
              <li><strong>Cookies de consentement</strong> : conservés pendant 12 mois</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Modifications</h2>
            <p className="text-gray-600 leading-relaxed">
              La présente politique de cookies peut être modifiée à tout moment. Nous vous informerons de toute modification significative par notification sur la plateforme. La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pour toute question relative à notre politique de cookies, vous pouvez nous contacter :
            </p>
            <div className="bg-brand-50 rounded-xl p-4 space-y-2">
              <p className="text-gray-700"><strong>Établissement Privé Lycéal Les Lumières</strong></p>
              <p className="text-gray-600">Email : contact@epl-les-lumieres.cd</p>
              <p className="text-gray-600">Adresse : Avenue de la République, Kinshasa, RDC</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="btn-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
