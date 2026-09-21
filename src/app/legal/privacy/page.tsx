"use client"

import Link from "next/link"

export default function PrivacyPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Politique de confidentialité</h1>
          </div>
          <p className="text-sm text-gray-500">Dernière mise à jour : 20 septembre 2026</p>
        </div>

        <div className="space-y-6">
          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              L&apos;Établissement Privé Lycéal Les Lumières (ci-après « l&apos;établissement ») s&apos;engage à protéger la vie privée des utilisateurs de sa plateforme de gestion scolaire. La présente politique de confidentialité décrit comment nous collectons, utilisons, partageons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation congolaise en vigueur.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Données collectées</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Nous collectons les catégories de données suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li><strong>Données d&apos;identification</strong> : nom, prénom, date de naissance, sexe, nationalité</li>
              <li><strong>Données de contact</strong> : adresse, téléphone, adresse électronique</li>
              <li><strong>Données scolaires</strong> : classe, série, numéro matricule, résultats scolaires, assiduité</li>
              <li><strong>Données financières</strong> : frais scolaires, paiements, soldes</li>
              <li><strong>Données de connexion</strong> : identifiant, mot de passe hashé, adresse IP, journaux d&apos;activité</li>
              <li><strong>Données de navigation</strong> : pages visitées, durée des sessions, paramètres de l&apos;appareil</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Finalités du traitement</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Vos données personnelles sont traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Gestion de l&apos;inscription et du suivi scolaire des élèves</li>
              <li>Communication entre l&apos;administration, les enseignants, les parents et les élèves</li>
              <li>Établissement des bulletins, relevés de notes et attestations</li>
              <li>Gestion financière et suivi des paiements</li>
              <li>Envoi de notifications et d&apos;annonces relatives à la vie scolaire</li>
              <li>Élaboration de statistiques anonymisées à des fins pédagogiques</li>
              <li>Assurance de la sécurité de la plateforme et prévention des fraudes</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Base légale</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Le traitement de vos données repose sur les bases légales suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li><strong>Exécution du contrat</strong> : traitement nécessaire pour l&apos;exécution du contrat de scolarisation</li>
              <li><strong>Obligation légale</strong> : traitement imposé par la législation scolaire en vigueur</li>
              <li><strong>Intérêt légitime</strong> : traitement nécessaire pour assurer le bon fonctionnement de la plateforme</li>
              <li><strong>Consentement</strong> : pour les cookies et traitements non essentiels</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Durée de conservation</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Vos données personnelles sont conservées pour les durées suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li><strong>Données scolaires</strong> : pendant toute la durée de la scolarité et 10 ans après</li>
              <li><strong>Données financières</strong> : pendant 5 ans conformément aux obligations comptables</li>
              <li><strong>Données de connexion</strong> : pendant 12 mois</li>
              <li><strong>Données de navigation</strong> : pendant 13 mois maximum</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Destinataires des données</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Vos données peuvent être destinées aux catégories de destinataires suivants :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>L&apos;administration de l&apos;établissement</li>
              <li>Les enseignants (pour les données pédagogiques de leurs classes)</li>
              <li>Les parents d&apos;élèves (pour les données de leurs enfants)</li>
              <li>Les services d&apos;hébergement de données (sous-traitants techniques)</li>
              <li>Les autorités éducatives (en cas d&apos;obligation légale)</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Transferts internationaux</h2>
            <p className="text-gray-600 leading-relaxed">
              Vos données sont hébergées sur des serveurs situés dans l&apos;Union européenne. En cas de transfert de données hors de l&apos;UE, nous nous assurons que des garanties appropriées sont mises en place, notamment des clauses contractuelles types ou des décisions d&apos;adéquation conformes au RGPD.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Vos droits</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification</strong> : corriger les données inexactes ou incomplètes</li>
              <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit de limitation</strong> : demander la limitation du traitement</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              Pour exercer ces droits, contactez notre délégué à la protection des données à l&apos;adresse : dpo@epl-les-lumieres.cd
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Sécurité des données</h2>
            <p className="text-gray-600 leading-relaxed">
              Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction. Ces mesures incluent le chiffrement des données, le contrôle d&apos;accès basé sur les rôles, la journalisation des opérations et des audits de sécurité réguliers.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              La plateforme utilise des cookies pour assurer son bon fonctionnement et améliorer l&apos;expérience utilisateur. Pour plus de détails, veuillez consulter notre{" "}
              <Link href="/legal/cookies" className="text-brand-600 hover:text-brand-700 underline">
                Politique de cookies
              </Link>.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Modifications</h2>
            <p className="text-gray-600 leading-relaxed">
              La présente politique de confidentialité peut être modifiée à tout moment. Nous vous informerons de toute modification significative par notification sur la plateforme ou par courriel. La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">12. Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pour toute question relative à la protection de vos données personnelles, vous pouvez contacter notre délégué à la protection des données :
            </p>
            <div className="bg-brand-50 rounded-xl p-4 space-y-2">
              <p className="text-gray-700"><strong>Délégué à la protection des données</strong></p>
              <p className="text-gray-600">Email : dpo@epl-les-lumieres.cd</p>
              <p className="text-gray-600">Adresse : Avenue de la République, Kinshasa, RDC</p>
              <p className="text-gray-600">Téléphone : +243 81 234 5678</p>
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
