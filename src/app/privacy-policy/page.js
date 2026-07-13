export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-4 pb-[20px] sm:px-6 sm:py-6 space-y-8">
      <div className="border-b border-cardline pb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-ink uppercase tracking-tight">Privacy Policy</h1>
        <p className="text-xs text-muted mt-2">Last updated: July 2025 &nbsp;|&nbsp; Foodville Consumer Products Pvt. Ltd.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Introduction</h2>
        <p className="text-sm text-muted leading-relaxed">
          Foodville Consumer Products Private Limited (&quot;Foodville&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and the choices you have regarding your information when you use our website or services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Information We Collect</h2>
        <p className="text-sm text-muted leading-relaxed">We may collect the following types of information:</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li><strong className="text-ink">Personal Information:</strong> Name, email address, phone number, and delivery address provided during checkout or account creation.</li>
          <li><strong className="text-ink">Order Information:</strong> Products purchased, order history, and payment method (we do not store full card details).</li>
          <li><strong className="text-ink">Usage Data:</strong> Pages visited, search queries, and browsing behavior on our site to improve your experience.</li>
          <li><strong className="text-ink">Device Data:</strong> IP address, browser type, and device identifiers for analytics and security purposes.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li>To process and fulfill your orders and send delivery updates.</li>
          <li>To respond to customer service requests and support queries.</li>
          <li>To send order confirmations, invoices, and important service notifications.</li>
          <li>To improve our website, products, and overall customer experience.</li>
          <li>To send promotional offers and newsletters (only with your consent).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Data Sharing & Disclosure</h2>
        <p className="text-sm text-muted leading-relaxed">
          We do not sell, trade, or rent your personal information to third parties. We may share your data only in the following cases:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li>With delivery partners to fulfill your orders.</li>
          <li>With payment processors to complete secure transactions.</li>
          <li>When required by law or court order.</li>
          <li>To protect the rights or safety of Foodville, our customers, or the public.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Data Security</h2>
        <p className="text-sm text-muted leading-relaxed">
          We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse. Our website uses HTTPS encryption to secure all data in transit. However, no method of transmission over the internet is 100% secure, and we encourage you to safeguard your account credentials.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Your Rights</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li>You may request access to the personal data we hold about you.</li>
          <li>You may request correction or deletion of your personal information.</li>
          <li>You may opt out of marketing communications at any time.</li>
          <li>You may request data portability where technically feasible.</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed mt-2">To exercise any of these rights, contact us at <strong className="text-ink">support@foodvilleindia.com</strong>.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Changes to This Policy</h2>
        <p className="text-sm text-muted leading-relaxed">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date. We encourage you to review this policy periodically to stay informed.
        </p>
      </section>

      <section className="rounded-2xl bg-olive/5 border border-olive/20 p-5 space-y-2">
        <h3 className="text-xs font-black text-olive uppercase tracking-wide">Contact Us</h3>
        <p className="text-xs text-muted leading-relaxed">Foodville Consumer Products Pvt. Ltd. | H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001</p>
        <div className="flex flex-wrap gap-4 pt-1 text-xs font-semibold">
          <a href="https://wa.me/919911575605" target="_blank" rel="noopener noreferrer" className="text-olive hover:underline">📱 +91 9911575605</a>
          <a href="mailto:support@foodvilleindia.com" className="text-olive hover:underline">✉️ support@foodvilleindia.com</a>
        </div>
      </section>
    </div>
  );
}
