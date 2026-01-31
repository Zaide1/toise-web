import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — ChompMate",
  description: "Terms governing use of the ChompMate app and website.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Terms of Service (ChompMate)
          </h1>
          <p className="text-sm font-semibold text-[var(--muted)]">
            <strong className="font-semibold text-[var(--text)]">Last updated:</strong> 19 January
            2026
          </p>
        </header>

        <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
          These Terms of Service ("Terms") govern your use of the{" "}
          <strong className="font-semibold text-[var(--text)]">ChompMate</strong> mobile app and our website
          (together, the "Services"). By accessing or using the Services, you agree to these Terms.
        </p>

        <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
          If you do not agree, do not use the Services.
        </p>

        <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
          Contact us:{" "}
          <strong className="font-semibold text-[var(--text)]">
            <a
              className="underline decoration-[var(--muted)] underline-offset-4"
              href="mailto:hello@chompmate.app"
            >
              hello@chompmate.app
            </a>
          </strong>
        </p>

        <hr className="border-black/10" />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">1) Who we are</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            ChompMate is provided by <strong className="font-semibold text-[var(--text)]">Toise LTD</strong>{" "}
            ("we", "us", "our"). We may update the name of the legal entity as the business is formally
            incorporated; these Terms still apply.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">2) Eligibility</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            You must be at least <strong className="font-semibold text-[var(--text)]">13 years old</strong>
            (or the minimum age required in your jurisdiction) to use the Services. If you are under
            18, you must have permission from a parent or guardian.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">3) Accounts</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            To use certain features, you may need to create an account. You agree to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>Provide accurate information where required</li>
            <li>Keep your account secure</li>
            <li>Notify us if you suspect unauthorized access</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            You are responsible for activity that occurs under your account.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">4) The Services</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            ChompMate helps you track meals, nutrition, and related habits, and may provide summaries,
            targets, recommendations, and AI-assisted features (such as scan or planning outputs).
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            The Services may change over time. We may add, remove, or modify features at any time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">5) Not medical advice</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            ChompMate is provided for <strong className="font-semibold text-[var(--text)]">informational and lifestyle purposes only</strong> and is{" "}
            <strong className="font-semibold text-[var(--text)]">not medical advice</strong>. We are not a medical
            provider. Always seek advice from a qualified health professional before making health or
            dietary changes, especially if you have a medical condition.
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            If you believe you may have a medical emergency, contact emergency services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">6) Your content</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            You may input content such as meal logs, notes, photos, and other data ("User Content").
            You retain ownership of your User Content.
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            You grant ChompMate a limited license to host, process, and display your User Content solely
            to operate and improve the Services (for example, to store meals, generate totals, or
            process scan outputs).
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            You are responsible for ensuring you have the rights to upload any content you submit.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">7) Acceptable use</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            You agree not to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>Misuse the Services (e.g., attempt unauthorized access, disrupt systems, or probe security)</li>
            <li>Use the Services for unlawful activities</li>
            <li>Upload malicious code or harmful content</li>
            <li>Harass, abuse, or harm others</li>
            <li>Attempt to scrape or exfiltrate data</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We may suspend or terminate access if we believe you violate these Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">8) AI features</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            Some features may use AI services to generate outputs (e.g., scan interpretation, meal
            comments, or plan suggestions). AI outputs can be incorrect or incomplete. You are
            responsible for verifying important information, including nutrition and allergy-related
            details.
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We may change AI providers, models, or prompts to improve quality or control costs.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">9) Subscriptions, payments, and refunds</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            Some features may require a paid subscription ("ChompMate Pro" or similar). Subscriptions are
            processed through Apple/Google and may be managed via{" "}
            <strong className="font-semibold text-[var(--text)]">RevenueCat</strong>.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>Prices, billing periods, and renewal terms are shown at purchase.</li>
            <li>Subscriptions may renew automatically unless you cancel through your app store settings.</li>
            <li>Refunds are handled according to Apple/Google’s policies (and applicable law).</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We do not store your full payment card details.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">10) Third-party services</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            The Services may rely on third-party services (e.g., authentication, hosting, notifications,
            analytics, AI providers). Your use of those services may be governed by their terms.
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We are not responsible for third-party services outside of our control.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">11) Availability and changes</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We do not guarantee the Services will be uninterrupted or error-free. We may:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>Perform maintenance</li>
            <li>Modify or discontinue parts of the Services</li>
            <li>Introduce limits (e.g., rate limits, storage caps)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">12) Termination</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            You can stop using the Services at any time. We may suspend or terminate your access if:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>You violate these Terms</li>
            <li>We believe your use creates risk or legal exposure</li>
            <li>We discontinue the Services</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            Where required, we will provide notice. Certain sections of these Terms survive termination
            (including disclaimers and limitations of liability).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">13) Disclaimers</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <strong className="font-semibold text-[var(--text)]">THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.”</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, AND NON-INFRINGEMENT.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">14) Limitation of liability</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <strong className="font-semibold text-[var(--text)]">TO THE MAXIMUM EXTENT PERMITTED BY LAW, CHOMPMATE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICES.</strong>
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <strong className="font-semibold text-[var(--text)]">OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE SERVICES WILL NOT EXCEED THE AMOUNT YOU PAID (IF ANY) TO USE THE SERVICES IN THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR £50 IF YOU HAVE PAID NOTHING, WHICHEVER IS GREATER.</strong>
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            Some jurisdictions do not allow certain limitations, so some of the above may not apply to you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">15) Indemnity</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            You agree to indemnify and hold ChompMate harmless from claims arising out of your use of the
            Services or your violation of these Terms, to the extent permitted by law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">16) Governing law</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            These Terms are governed by the laws of{" "}
            <strong className="font-semibold text-[var(--text)]">England and Wales</strong> (or update
            this section to match your operating jurisdiction). Courts in that jurisdiction will have
            exclusive authority, unless applicable law says otherwise.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">17) Changes to these Terms</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We may update these Terms from time to time. We will update the “Last updated” date and
            may provide additional notice if changes are material. Continued use of the Services after
            changes means you accept the updated Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">18) Contact</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            Questions about these Terms? Contact:{" "}
            <strong className="font-semibold text-[var(--text)]">
              <a
                className="underline decoration-[var(--muted)] underline-offset-4"
                href="mailto:hello@chompmate.app"
              >
                hello@chompmate.app
              </a>
            </strong>
          </p>
        </section>
      </div>
    </main>
  );
}
