"use client"

import { useRouter } from "next/navigation"
import {
  FileText, Award, FileCheck, Megaphone, Receipt, ClipboardList,
  ArrowLeft, ChevronRight, Sparkles
} from "lucide-react"

const documents = [
  {
    title: "Bulletin Scolaire",
    description: "Générer les bulletins de notes des élèves par trimestre avec mentions et appréciations.",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    href: "/dashboard/documents/bulletin",
  },
  {
    title: "Relevé de Notes",
    description: "Relevé complet des notes sur les 3 trimestres pour chaque élève.",
    icon: ClipboardList,
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    href: "/dashboard/documents/releve",
  },
  {
    title: "Communiqué Officiel",
    description: "Créer des communiqués officiels de la direction pour les parents et élèves.",
    icon: Megaphone,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    href: "/dashboard/documents/communique",
  },
  {
    title: "PV de Délibération",
    description: "Procès-verbal du conseil de classe avec classement et décisions.",
    icon: FileCheck,
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
    href: "/dashboard/documents/pv",
  },
  {
    title: "Certificat de Scolarité",
    description: "Attestation officielle d'inscription et de scolarité pour les élèves.",
    icon: Award,
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    href: "/dashboard/documents/certificat",
  },
  {
    title: "Reçu de Paiement",
    description: "Reçu officiel pour tout paiement de frais scolaires.",
    icon: Receipt,
    color: "from-teal-500 to-teal-600",
    bg: "bg-teal-50",
    href: "/dashboard/documents/recu",
  },
]

export default function DocumentsPage() {
  const router = useRouter()

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push("/dashboard")}
          className="p-2 rounded-xl hover:bg-surface-100 transition-colors text-gray-500"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Centre de Documents
              </h1>
              <p className="text-gray-500 mt-0.5">
                Générez tous les documents administratifs et scolaires
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {documents.map((doc) => {
          const Icon = doc.icon
          return (
            <button
              key={doc.href}
              onClick={() => router.push(doc.href)}
              className="glass-card-hover p-6 text-left group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${doc.color} flex items-center justify-center mb-4 shadow-lg transition-transform group-hover:scale-110`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-lg">{doc.title}</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">{doc.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-600 group-hover:text-brand-700 transition-colors">
                Générer <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          )
        })}
      </div>

      <div className="glass-card p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
            <Sparkles className="h-5 w-5 text-brand-600" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-gray-900">Comment télécharger en PDF</h3>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              Après avoir généré un document, cliquez sur <strong>« Imprimer / Télécharger PDF »</strong> puis
              dans la fenêtre d&apos;impression, sélectionnez <strong>« Enregistrer en PDF »</strong> comme
              destination. Vous pouvez également utiliser <kbd className="px-1.5 py-0.5 bg-surface-100 rounded text-xs font-mono">Ctrl+P</kbd> (ou <kbd className="px-1.5 py-0.5 bg-surface-100 rounded text-xs font-mono">⌘+P</kbd> sur Mac).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
