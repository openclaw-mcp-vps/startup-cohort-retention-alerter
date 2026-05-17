export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Early-Stage SaaS Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Get alerts when cohort retention drops
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Mixpanel, Amplitude, or PostHog. Set your thresholds. Get a Slack ping the moment weekly or monthly retention dips — before churn becomes a crisis.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $39/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: '1', title: 'Connect analytics', desc: 'Link your Mixpanel, Amplitude, or PostHog account via API key in seconds.' },
          { step: '2', title: 'Set thresholds', desc: 'Define acceptable retention floors per cohort week or month.' },
          { step: '3', title: 'Get Slack alerts', desc: 'Receive instant notifications with trend data when retention dips.' },
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[#8b949e]">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20 flex justify-center">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm text-center">
          <h2 className="text-white text-2xl font-bold mb-1">Founder Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stop churn early</p>
          <div className="text-5xl font-extrabold text-white mb-1">$39<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-xs text-[#484f58] mb-6">Billed monthly · Cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Mixpanel, Amplitude & PostHog',
              'Daily automated retention checks',
              'Slack alerts with trend charts',
              'Configurable thresholds per cohort',
              'Historical retention data storage',
              'Up to 10,000 users tracked',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-white text-2xl font-bold text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which analytics platforms are supported?',
              a: 'Mixpanel, Amplitude, and PostHog are supported via their official APIs. You just provide an API key — no SDK changes needed.',
            },
            {
              q: 'How quickly will I get alerted?',
              a: 'Retention is checked daily. If a cohort drops below your threshold, a Slack message is sent within minutes of the check completing.',
            },
            {
              q: 'What happens if I cancel?',
              a: 'You keep access until the end of your billing period. No data is deleted immediately — you have 30 days to export your historical retention data.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Cohort Retention Alerter. Built for founders who care about retention.
      </footer>
    </main>
  )
}
