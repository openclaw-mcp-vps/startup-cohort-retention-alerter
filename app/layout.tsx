import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cohort Retention Alerter — Get alerts when retention drops',
  description: 'Connect to Mixpanel, Amplitude, or PostHog and get Slack alerts when weekly or monthly cohort retention dips below your thresholds.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d318886e-43c9-4ba1-8238-cb93c1ba55a1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
