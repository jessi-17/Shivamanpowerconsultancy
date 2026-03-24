'use client'

import { useEffect, useState } from 'react'

// ⚠️  Replace this with your real Google Ads Tag ID (e.g. "AW-123456789")
const GOOGLE_ADS_TAG_ID = 'AW-XXXXXXXXXX'

const CONSENT_KEY = 'cookie_consent'

function loadGoogleAds(tagId: string) {
  if (typeof window === 'undefined') return

  // Avoid loading the script twice
  if (document.querySelector(`script[src*="${tagId}"]`)) return

  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${tagId}`
  script.async = true
  document.head.appendChild(script)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any).dataLayer = (window as any).dataLayer || []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function gtag(...args: any[]) { (window as any).dataLayer.push(args) }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any).gtag = gtag
  gtag('js', new Date())
  gtag('config', tagId)
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === 'accepted') {
      loadGoogleAds(GOOGLE_ADS_TAG_ID)
    } else if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
    loadGoogleAds(GOOGLE_ADS_TAG_ID)
  }

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm text-gray-600">
          We use cookies to improve your experience and show you relevant ads.
          By accepting, you agree to our use of cookies for personalised advertising.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
