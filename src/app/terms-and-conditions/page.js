export default function TermsAndConditionsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8">
      <div className="border-b border-cardline pb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-ink uppercase tracking-tight">Terms and Conditions</h1>
        <p className="text-xs text-muted mt-2">Last updated: July 2025 &nbsp;|&nbsp; Foodville Consumer Products Pvt. Ltd.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Acceptance of Terms</h2>
        <p className="text-sm text-muted leading-relaxed">
          By accessing or using the Foodville website and placing an order with us, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services. Foodville Consumer Products Private Limited reserves the right to update these terms at any time.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Products & Pricing</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li>All product descriptions, images, and prices on our website are for informational purposes and are subject to change without prior notice.</li>
          <li>Prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.</li>
          <li>We reserve the right to refuse or cancel any order in case of pricing errors, stock unavailability, or suspected fraud.</li>
          <li>Product images are representative only; actual packaging may vary slightly.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Orders & Payment</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li>Orders are confirmed only upon successful payment or acceptance of a Cash on Delivery (COD) order.</li>
          <li>We accept payments via UPI, debit/credit cards, net banking, and COD where available.</li>
          <li>Foodville does not store your full payment card details. All transactions are processed through secure, PCI-compliant payment gateways.</li>
          <li>In case of a payment failure, please ensure the amount has been debited before retrying. Contact support if charged without order confirmation.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Use of the Website</h2>
        <p className="text-sm text-muted leading-relaxed">You agree to use this website only for lawful purposes. You must not:</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li>Use the site in any way that violates applicable local, national, or international laws.</li>
          <li>Transmit any unsolicited or unauthorized advertising material.</li>
          <li>Attempt to gain unauthorized access to any part of our website or systems.</li>
          <li>Reproduce, duplicate, or resell any part of our website content without written permission.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Intellectual Property</h2>
        <p className="text-sm text-muted leading-relaxed">
          All content on this website — including logos, product images, text, and design elements — is the intellectual property of Foodville Consumer Products Private Limited. Unauthorized reproduction, distribution, or use of any content without prior written consent is strictly prohibited.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Limitation of Liability</h2>
        <p className="text-sm text-muted leading-relaxed">
          Foodville shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the purchase price of the specific product in question. We are not responsible for delays caused by courier partners, natural disasters, or circumstances beyond our control.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Governing Law</h2>
        <p className="text-sm text-muted leading-relaxed">
          These Terms and Conditions are governed by the laws of India. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Ghaziabad, Uttar Pradesh.
        </p>
      </section>

      <section className="rounded-2xl bg-olive/5 border border-olive/20 p-5 space-y-2">
        <h3 className="text-xs font-black text-olive uppercase tracking-wide">Questions?</h3>
        <p className="text-xs text-muted leading-relaxed">For any questions about these terms, contact our team directly.</p>
        <div className="flex flex-wrap gap-4 pt-1 text-xs font-semibold">
          <a href="https://wa.me/919911575605" target="_blank" rel="noopener noreferrer" className="text-olive hover:underline">📱 +91 9911575605</a>
          <a href="mailto:support@foodvilleindia.com" className="text-olive hover:underline">✉️ support@foodvilleindia.com</a>
        </div>
      </section>
    </div>
  );
}
