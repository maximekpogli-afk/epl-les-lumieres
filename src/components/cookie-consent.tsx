"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const STORAGE_KEY = "epl_cookie_consent"

interface ConsentState {
  technical: boolean
  analytics: boolean
  functional: boolean
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({
    technical: true,
    analytics: false,
    functional: false,
  })

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setTimeout(() => setVisible(true), 1000)
    }
  }, [])

  const saveConsent = (state: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    setVisible(false)
    setShowPanel(false)
  }

  const acceptAll = () => {
    saveConsent({ technical: true, analytics: true, functional: true })
  }

  const technicalOnly = () => {
    saveConsent({ technical: true, analytics: false, functional: false })
  }

  const refuseAll = () => {
    saveConsent({ technical: true, analytics: false, functional: false })
  }

  const saveCustom = () => {
    saveConsent({ ...consent, technical: true })
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto glass-card p-6 shadow-float animate-slide-up border border-surface-200">
        {!showPanel ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Nous utilisons des cookies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nous utilisons des cookies pour assurer le bon fonctionnement de la plateforme, analyser son utilisation et améliorer votre expérience. Vous pouvez personnaliser vos choix à tout moment.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button onClick={acceptAll} className="flex-1 px-4 py-2.5 bg-emerald-600 text-white rounded-xl font-medium text-sm hover:bg-emerald-700 transition-colors">
                Tout accepter
              </button>
              <button onClick={technicalOnly} className="flex-1 px-4 py-2.5 bg-gray-200 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-300 transition-colors">
                Techniques uniquement
              </button>
              <button onClick={() => setShowPanel(true)} className="flex-1 px-4 py-2.5 bg-brand-100 text-brand-700 rounded-xl font-medium text-sm hover:bg-brand-200 transition-colors">
                Personnaliser
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
              <Link href="/legal/cookies" className="hover:text-brand-600 transition-colors underline">
                Politique de cookies
              </Link>
              <button onClick={refuseAll} className="hover:text-brand-600 transition-colors underline">
                Tout refuser
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Personnaliser mes cookies</h3>
              <button onClick={() => setShowPanel(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-50 border border-surface-200">
                <div className="flex-1 pr-4">
                  <p className="font-medium text-gray-900 text-sm">Cookies techniques</p>
                  <p className="text-xs text-gray-500 mt-0.5">Indispensables au fonctionnement de la plateforme</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-6 bg-emerald-500 rounded-full flex items-center justify-center cursor-not-allowed opacity-70">
                    <div className="w-4 h-4 bg-white rounded-full transform translate-x-2"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-50 border border-surface-200">
                <div className="flex-1 pr-4">
                  <p className="font-medium text-gray-900 text-sm">Cookies analytiques</p>
                  <p className="text-xs text-gray-500 mt-0.5">Mesure d&apos;audience et statistiques d&apos;utilisation</p>
                </div>
                <button
                  onClick={() => setConsent((prev) => ({ ...prev, analytics: !prev.analytics }))}
                  className={`w-10 h-6 rounded-full flex items-center transition-colors ${consent.analytics ? "bg-brand-500" : "bg-gray-300"}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${consent.analytics ? "translate-x-5" : "translate-x-1"}`}></div>
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-50 border border-surface-200">
                <div className="flex-1 pr-4">
                  <p className="font-medium text-gray-900 text-sm">Cookies fonctionnels</p>
                  <p className="text-xs text-gray-500 mt-0.5">Préférences et personnalisation de l&apos;expérience</p>
                </div>
                <button
                  onClick={() => setConsent((prev) => ({ ...prev, functional: !prev.functional }))}
                  className={`w-10 h-6 rounded-full flex items-center transition-colors ${consent.functional ? "bg-brand-500" : "bg-gray-300"}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${consent.functional ? "translate-x-5" : "translate-x-1"}`}></div>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button onClick={saveCustom} className="flex-1 px-4 py-2.5 bg-brand-600 text-white rounded-xl font-medium text-sm hover:bg-brand-700 transition-colors">
                Enregistrer mes choix
              </button>
              <button onClick={refuseAll} className="flex-1 px-4 py-2.5 bg-gray-200 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-300 transition-colors">
                Tout refuser
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
