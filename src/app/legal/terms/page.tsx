"use client"

import Link from "next/link"

export default function TermsPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Politique d&apos;utilisation</h1>
          </div>
          <p className="text-sm text-gray-500">Dernière mise à jour : 20 septembre 2026</p>
        </div>

        <div className="space-y-6">
          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              La plateforme EPL Les Lumières (ci-après « la Plateforme ») est un système de gestion scolaire en ligne développé pour faciliter l&apos;administration, la communication et le suivi pédagogique au sein de l&apos;Établissement Privé Lycéal Les Lumières. Les présentes conditions d&apos;utilisation (ci-après « les Conditions ») régissent l&apos;accès et l&apos;utilisation de la Plateforme par tout utilisateur.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Acceptation des conditions</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              En accédant ou en utilisant la Plateforme, vous déclarez avoir pris connaissance des présentes Conditions et les accepter sans réserve. Si vous n&apos;acceptez pas ces Conditions, vous ne devez pas utiliser la Plateforme.
            </p>
            <p className="text-gray-600 leading-relaxed">
              L&apos;établissement scolaire se réserve le droit de modifier ces Conditions à tout moment. Les utilisateurs seront informés de toute modification substantielle par notification sur la Plateforme ou par courriel.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Description du service</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              La Plateforme offre les fonctionnalités suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Gestion des inscriptions et des dossiers des élèves</li>
              <li>Suivi des notes, bulletins et résultats scolaires</li>
              <li>Gestion de l&apos;emploi du temps et des absences</li>
              <li>Communication entre l&apos;administration, les enseignants, les parents et les élèves</li>
              <li>Gestion financière et suivi des frais scolaires</li>
              <li>Génération de rapports et statistiques</li>
              <li>Envoi de notifications et d&apos;annonces</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Inscription et compte</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              L&apos;accès à la Plateforme nécessite la création d&apos;un compte utilisateur. Lors de l&apos;inscription, vous vous engagez à :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Fournir des informations exactes, complètes et à jour</li>
              <li>Maintenir la confidentialité de vos identifiants de connexion</li>
              <li>Notifier immédiatement l&apos;administration de toute utilisation non autorisée de votre compte</li>
              <li>Ne pas partager vos identifiants avec des tiers</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              L&apos;établissement se réserve le droit de suspendre ou de supprimer tout compte en cas de non-respect des présentes Conditions.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Utilisation acceptable</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Vous vous engagez à utiliser la Plateforme uniquement à des fins légitimes et conformément aux lois en vigueur. Il est interdit de :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Utiliser la Plateforme à des fins illicites ou frauduleuses</li>
              <li>Tenter d&apos;accéder sans autorisation aux systèmes ou données de la Plateforme</li>
              <li>Introduire des virus, malwares ou tout autre code nuisible</li>
              <li>Perturber ou interrompre le fonctionnement de la Plateforme</li>
              <li>Collecter ou extraire des données personnelles d&apos;autres utilisateurs</li>
              <li>Usurper l&apos;identité d&apos;un autre utilisateur</li>
              <li>Diffuser du contenu injurieux, diffamatoire ou discriminator</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Propriété intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">
              L&apos;ensemble du contenu de la Plateforme, y compris mais sans s&apos;limiter aux textes, images, graphismes, logos, icônes, logiciels et bases de données, est la propriété de l&apos;établissement ou de ses partenaires et est protégé par les lois relatives à la propriété intellectuelle. Toute reproduction, distribution, modification ou utilisation non autorisée de ces éléments est strictement interdite.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Limitation de responsabilité</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              L&apos;établissement s&apos;efforce d&apos;assurer un accès continu et sécurisé à la Plateforme. Toutefois, il ne garantit pas :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>L&apos;absence totale d&apos;interruption ou d&apos;erreur technique</li>
              <li>L&apos;exactitude ou l&apos;exhaustivité des informations disponibles</li>
              <li>L&apos;absence de virus ou d&apos;éléments nuisibles</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              En aucun cas, l&apos;établissement ne saurait être tenu responsable des dommages directs ou indirects résultant de l&apos;utilisation de la Plateforme.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Modification des conditions</h2>
            <p className="text-gray-600 leading-relaxed">
              L&apos;établissement se réserve le droit de modifier les présentes Conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur la Plateforme. Il est conseillé aux utilisateurs de consulter régulièrement cette page pour prendre connaissance d&apos;éventuelles mises à jour.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Droit applicable</h2>
            <p className="text-gray-600 leading-relaxed">
              Les présentes Conditions sont régies par le droit congolais. En cas de litige, les parties s&apos;engagent à rechercher une solution amiable avant toute action judiciaire. À défaut, le litige sera soumis aux tribunaux compétents de Kinshasa.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pour toute question relative aux présentes conditions d&apos;utilisation, vous pouvez nous contacter :
            </p>
            <div className="bg-brand-50 rounded-xl p-4 space-y-2">
              <p className="text-gray-700"><strong>Établissement Privé Lycéal Les Lumières</strong></p>
              <p className="text-gray-600">Adresse : Avenue de la République, Kinshasa, RDC</p>
              <p className="text-gray-600">Téléphone : +243 81 234 5678</p>
              <p className="text-gray-600">Email : contact@epl-les-lumieres.cd</p>
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
