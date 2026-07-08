export default function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8">
      <div className="border-b border-cardline pb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-ink uppercase tracking-tight">Refund Policy</h1>
        <p className="text-xs text-muted mt-2">Last updated: July 2025 &nbsp;|&nbsp; Foodville Consumer Products Pvt. Ltd.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Overview</h2>
        <p className="text-sm text-muted leading-relaxed">
          At Foodville Consumer Products Private Limited, we take great pride in the quality of our products. Every item is carefully checked before dispatch. However, if you are not fully satisfied with your purchase, we are here to help. Please read our refund policy carefully before initiating a request.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Eligibility for Refund</h2>
        <p className="text-sm text-muted leading-relaxed">You are eligible to request a refund or replacement if:</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li>You received a damaged, broken, or leaking product.</li>
          <li>You received an incorrect product (wrong item or wrong quantity).</li>
          <li>The product was expired at the time of delivery.</li>
          <li>The product has a quality defect that was not caused by mishandling after delivery.</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed mt-2">
          Refund requests must be raised within <strong className="text-ink">7 days</strong> of delivery. Requests raised after this period may not be accepted.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">How to Raise a Refund Request</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-muted pl-2">
          <li>Contact our support team via WhatsApp at <strong className="text-ink">+91 9911575605</strong> or email at <strong className="text-ink">support@foodvilleindia.com</strong>.</li>
          <li>Share your order details, a brief description of the issue, and clear photographs of the product and packaging.</li>
          <li>Our team will review your request within <strong className="text-ink">1–2 business days</strong>.</li>
          <li>Upon approval, we will initiate a refund or replacement as per your preference.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Refund Method & Timeline</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li>Refunds are processed to the original payment method (UPI, bank account, or card).</li>
          <li>Processing typically takes <strong className="text-ink">5–7 business days</strong> after approval.</li>
          <li>For Cash on Delivery orders, refunds are issued via bank transfer. Please share your account details when raising the request.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Non-Refundable Cases</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li>Products that have been opened, used, or tampered with by the customer.</li>
          <li>Requests raised after the 7-day window without prior communication.</li>
          <li>Products damaged due to improper storage or mishandling by the customer after delivery.</li>
          <li>Change of mind or personal preference after purchase.</li>
        </ul>
      </section>

      <section className="rounded-2xl bg-olive/5 border border-olive/20 p-5 space-y-2">
        <h3 className="text-xs font-black text-olive uppercase tracking-wide">Need Help?</h3>
        <p className="text-xs text-muted leading-relaxed">
          For any refund-related queries, our team is available on WhatsApp and Email. We aim to resolve all issues fairly and promptly.
        </p>
        <div className="flex flex-wrap gap-4 pt-1 text-xs font-semibold">
          <a href="https://wa.me/919911575605" target="_blank" rel="noopener noreferrer" className="text-olive hover:underline">📱 WhatsApp: +91 9911575605</a>
          <a href="mailto:support@foodvilleindia.com" className="text-olive hover:underline">✉️ support@foodvilleindia.com</a>
        </div>
      </section>
    </div>
  );
}
