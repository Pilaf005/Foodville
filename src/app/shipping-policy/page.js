export default function ShippingPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-4 pb-[20px] sm:px-6 sm:py-6 space-y-8">
      <div className="border-b border-cardline pb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-ink uppercase tracking-tight">Shipping Policy</h1>
        <p className="text-xs text-muted mt-2">Last updated: July 2025 &nbsp;|&nbsp; Foodville Consumer Products Pvt. Ltd.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Overview</h2>
        <p className="text-sm text-muted leading-relaxed">
          At Foodville, we are committed to delivering your orders quickly, safely, and with care. We ship across 24,000+ PIN codes in India through our trusted courier partners. Please read our shipping policy to understand delivery timelines, charges, and procedures.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Order Processing Time</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li>All orders are processed within <strong className="text-ink">1–2 business days</strong> of payment confirmation.</li>
          <li>Orders placed on weekends or public holidays will be processed on the next working business day.</li>
          <li>You will receive an order confirmation email/message with your order details immediately after placing the order.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Delivery Timelines</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-muted border border-cardline rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-olive/10 text-ink font-bold">
                <th className="text-left px-4 py-3">Location</th>
                <th className="text-left px-4 py-3">Estimated Delivery</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-cardline">
                <td className="px-4 py-3">Delhi NCR (Noida, Ghaziabad, Faridabad, Gurugram)</td>
                <td className="px-4 py-3 font-semibold text-olive">1–2 Business Days</td>
              </tr>
              <tr className="border-t border-cardline bg-cream/30">
                <td className="px-4 py-3">Major Metro Cities (Mumbai, Bangalore, Chennai, Hyderabad, Pune)</td>
                <td className="px-4 py-3 font-semibold text-olive">3–5 Business Days</td>
              </tr>
              <tr className="border-t border-cardline">
                <td className="px-4 py-3">Other Cities & Towns (Tier 2 & 3)</td>
                <td className="px-4 py-3 font-semibold text-olive">4–7 Business Days</td>
              </tr>
              <tr className="border-t border-cardline bg-cream/30">
                <td className="px-4 py-3">Remote Areas & J&K / North East</td>
                <td className="px-4 py-3 font-semibold text-olive">7–12 Business Days</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted leading-relaxed">
          These are estimated timelines. Actual delivery may vary due to courier delays, weather conditions, or high-demand periods like festivals.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Shipping Charges</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li><strong className="text-ink">Free Shipping</strong> on all orders above ₹499.</li>
          <li>A flat shipping charge of <strong className="text-ink">₹49</strong> is applied on orders below ₹499.</li>
          <li>Shipping charges, if applicable, are displayed at checkout before payment.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Order Tracking</h2>
        <p className="text-sm text-muted leading-relaxed">
          Once your order has been dispatched, you will receive a tracking link via WhatsApp or email. You can use this link to track your package in real time through our courier partner&apos;s website. If you do not receive a tracking update within 3 business days of ordering, please contact our support team.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Delivery Attempts & Failed Deliveries</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted pl-2">
          <li>Our courier partners will make up to <strong className="text-ink">3 delivery attempts</strong> at your address.</li>
          <li>If delivery fails after 3 attempts (due to no one available or incorrect address), the package will be returned to us.</li>
          <li>In case of a returned order, re-shipping charges will apply for re-dispatch.</li>
          <li>Please ensure the delivery address and contact number provided at checkout are accurate and active.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-extrabold text-ink uppercase tracking-wide border-l-4 border-olive pl-3">Damaged in Transit</h2>
        <p className="text-sm text-muted leading-relaxed">
          In the rare event that your order is damaged during transit, please photograph the package and the product immediately upon delivery and contact our support team within <strong className="text-ink">48 hours</strong>. We will arrange for a replacement or refund as per our Refund Policy.
        </p>
      </section>

      <section className="rounded-2xl bg-olive/5 border border-olive/20 p-5 space-y-2">
        <h3 className="text-xs font-black text-olive uppercase tracking-wide">Shipping Queries?</h3>
        <p className="text-xs text-muted leading-relaxed">For real-time order status or delivery concerns, reach out to us directly.</p>
        <div className="flex flex-wrap gap-4 pt-1 text-xs font-semibold">
          <a href="https://wa.me/919911575605" target="_blank" rel="noopener noreferrer" className="text-olive hover:underline">📱 WhatsApp: +91 9911575605</a>
          <a href="mailto:support@foodvilleindia.com" className="text-olive hover:underline">✉️ support@foodvilleindia.com</a>
        </div>
      </section>
    </div>
  );
}
