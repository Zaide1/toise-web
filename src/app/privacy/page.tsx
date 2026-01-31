import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ChompMate",
  description: "How ChompMate collects and uses information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Privacy Policy (ChompMate)
          </h1>
          <p className="text-sm font-semibold text-[var(--muted)]">
            <strong className="font-semibold text-[var(--text)]">Last updated:</strong> 19 January
            2026
          </p>
        </header>

        <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
          This Privacy Policy explains how{" "}
          <strong className="font-semibold text-[var(--text)]">Toise LTD</strong> ("we", "us", "our")
          collects, uses, and shares information when you use the{" "}
          <strong className="font-semibold text-[var(--text)]">ChompMate mobile app</strong> and our{" "}
          <strong className="font-semibold text-[var(--text)]">website</strong> (including our waitlist).
        </p>

        <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
          If you have questions or want to exercise your privacy rights, contact us at:{" "}
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
          <h2 className="text-2xl font-semibold text-[var(--text)]">1) Scope</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            This policy applies to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>
              The <strong className="font-semibold text-[var(--text)]">ChompMate app</strong> (including
              account, logging, scan features, notifications, and subscriptions).
            </li>
            <li>
              The <strong className="font-semibold text-[var(--text)]">ChompMate website</strong>, including
              our <strong className="font-semibold text-[var(--text)]">waitlist</strong>.
            </li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            If you use third-party services through ChompMate (e.g., Apple, Google), their own privacy
            policies may also apply.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">2) Information we collect</h2>

          <h3 className="text-lg font-semibold text-[var(--text)]">A) Website waitlist</h3>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            When you join the waitlist, we collect:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>
              <strong className="font-semibold text-[var(--text)]">Email address</strong>
            </li>
            <li>
              Your answers to product questions, such as:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Primary goal</li>
                <li>Experience level</li>
                <li>Biggest pain points (1–2 selections)</li>
                <li>Preferred logging method</li>
                <li>Dietary preferences (optional)</li>
                <li>Device type (e.g., iPhone/Android)</li>
              </ul>
            </li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We may also collect limited technical data to help prevent abuse (e.g.,{" "}
            <strong className="font-semibold text-[var(--text)]">hashed IP</strong> and{" "}
            <strong className="font-semibold text-[var(--text)]">user agent</strong>) plus a timestamp of
            submission.
          </p>

          <h3 className="text-lg font-semibold text-[var(--text)]">B) Account &amp; identity (app)</h3>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            If you create an account, we may collect:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>
              A unique <strong className="font-semibold text-[var(--text)]">account identifier</strong>
              (e.g., a Firebase UID mapped to an internal user ID)
            </li>
            <li>
              <strong className="font-semibold text-[var(--text)]">Email address</strong> (if provided by
              your sign-in method)
            </li>
            <li>
              Your sign-in <strong className="font-semibold text-[var(--text)]">provider(s)</strong> (e.g.,
              Apple/Google/email)
            </li>
            <li>
              Your <strong className="font-semibold text-[var(--text)]">timezone</strong> (used to
              calculate day boundaries correctly)
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-[var(--text)]">C) Profile &amp; goal information (app)</h3>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            If you provide it, we collect information used to personalize your experience, such as:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>Gender (optional)</li>
            <li>Birthdate (optional)</li>
            <li>Height, weight, activity level (optional)</li>
            <li>Goal focus and planning inputs (e.g., goal type, rate per week, and related notes)</li>
          </ul>

          <h3 className="text-lg font-semibold text-[var(--text)]">D) Nutrition and health-related logs (app)</h3>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            ChompMate is a nutrition tracking product, so we collect the data you enter or generate
            through the app, including:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>
              Meals and meal items (name, grams, calories, protein/carbs/fat, timestamps, and
              metadata)
            </li>
            <li>
              Daily totals and metrics (calories/macros/water; nutrition score; progress fields)
            </li>
            <li>Weight entries (weight value, timestamp, source, optional notes)</li>
            <li>Water entries (amount and timestamp)</li>
            <li>Targets and target history (macro/calorie targets, recalculations, and overrides)</li>
            <li>Notification preferences (e.g., recap enabled, quiet hours)</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <strong className="font-semibold text-[var(--text)]">Note:</strong> Depending on your
            jurisdiction, nutrition logs and weight data may be considered{" "}
            <strong className="font-semibold text-[var(--text)]">health-related</strong> information. You
            control whether you enter it.
          </p>

          <h3 className="text-lg font-semibold text-[var(--text)]">E) Photos and scan-related information (app)</h3>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            If you use scan or AI-enabled features, we may process:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>Images you upload (e.g., a plate photo, nutrition label, barcode, pack front)</li>
            <li>Scan session metadata (status, timestamps, latency, error codes)</li>
            <li>Scan outputs and results (structured JSON outputs and related metadata)</li>
            <li>An image hash (e.g., SHA-256) for deduplication and caching</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We aim to collect and store only what is needed to provide scan functionality and
            improve performance. Some scan results may be cached for faster responses and may
            expire.
          </p>

          <h3 className="text-lg font-semibold text-[var(--text)]">F) Push notification identifiers (app)</h3>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            If you enable push notifications, we may collect:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>
              A device identifier used for notifications (e.g., OneSignal player ID)
            </li>
            <li>Platform (iOS/Android/web)</li>
            <li>Whether the device is active</li>
            <li>Your notification preferences (e.g., quiet hours, recap toggles)</li>
          </ul>

          <h3 className="text-lg font-semibold text-[var(--text)]">
            G) Purchases and subscriptions (RevenueCat / app stores)
          </h3>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            If you purchase a subscription or use paid features, we may collect and store
            subscription-related information such as:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>Subscription status (active/inactive), tier/entitlement, start/end dates</li>
            <li>Purchase and renewal events</li>
            <li>App store product identifiers and a purchase receipt or transaction reference</li>
            <li>A linkage between your ChompMate account and your subscription/entitlements</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <strong className="font-semibold text-[var(--text)]">Payments are processed by Apple/Google</strong>
            (and/or their payment processors). We do not receive or store your full payment card
            details. We use <strong className="font-semibold text-[var(--text)]">RevenueCat</strong> to
            manage subscription status and entitlements.
          </p>

          <h3 className="text-lg font-semibold text-[var(--text)]">H) Diagnostics and crash analytics (Crashlytics)</h3>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            To improve stability and fix bugs, we may collect diagnostics such as:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>Crash logs, stack traces, and performance signals</li>
            <li>Device and OS information</li>
            <li>App version/build information</li>
            <li>Timestamps related to crashes or errors</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We do not intentionally send your meal entries or other sensitive content in crash logs,
            but some information may be included depending on the nature of an error.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">3) How we use information</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We use your information to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>Provide the app and website functionality (including the waitlist)</li>
            <li>Create and maintain your account</li>
            <li>Calculate targets, daily totals, and progress indicators</li>
            <li>Provide scan features and return results to you</li>
            <li>
              Generate personalized recommendations and plan-related outputs based on the
              information you provide
            </li>
            <li>Send notifications if you enable them (including reminders and recaps)</li>
            <li>Prevent abuse, spam, and fraud (especially for the waitlist)</li>
            <li>Diagnose issues, improve performance, and develop new features</li>
            <li>Communicate with you about beta access and product updates if you join the waitlist</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">4) AI processing (Gemini and similar services)</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            Some ChompMate features use AI services (for example, to interpret food images, generate scan
            outputs, produce meal comments, or help generate plans and recommendations). When you
            use these features:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>
              We may send <strong className="font-semibold text-[var(--text)]">inputs you provide</strong>
              to an AI service provider (e.g., <strong className="font-semibold text-[var(--text)]">an image you upload</strong>
              and/or relevant context such as <strong className="font-semibold text-[var(--text)]">goals, preferences, meal summaries, and macros</strong>)
              in order to generate the requested output.
            </li>
            <li>The AI provider processes the inputs and returns an output to ChompMate, which we then show to you.</li>
            <li>
              AI providers may retain and process data according to their terms and the configuration we
              use. We aim to <strong className="font-semibold text-[var(--text)]">minimize</strong> the data shared
              and send only what is necessary to deliver the feature.
            </li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            If you prefer not to have your images or data processed this way, you can avoid AI-enabled
            scan features and use manual logging instead.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">5) Legal bases (UK/EU users)</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            If you are in the UK/EU, we process personal data under these legal bases:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>
              <strong className="font-semibold text-[var(--text)]">Contract</strong>: to provide the ChompMate app
              and features you request.
            </li>
            <li>
              <strong className="font-semibold text-[var(--text)]">Legitimate interests</strong>: to maintain
              security, prevent abuse, and improve the product.
            </li>
            <li>
              <strong className="font-semibold text-[var(--text)]">Consent</strong>: where required (for
              example, certain notifications and device permissions).
            </li>
            <li>
              <strong className="font-semibold text-[var(--text)]">Legal obligation</strong>: if required to
              comply with law.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">6) How we share information</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We do <strong className="font-semibold text-[var(--text)]">not sell</strong> your personal information.
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We may share information with service providers (“processors”) who process data on our
            behalf to operate ChompMate, such as:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>
              <strong className="font-semibold text-[var(--text)]">Database/storage</strong> (e.g., Supabase)
            </li>
            <li>
              <strong className="font-semibold text-[var(--text)]">Authentication</strong> (e.g., Firebase)
            </li>
            <li>
              <strong className="font-semibold text-[var(--text)]">Push notifications</strong> (e.g., OneSignal)
            </li>
            <li>
              <strong className="font-semibold text-[var(--text)]">Crash analytics</strong> (e.g., Crashlytics)
            </li>
            <li>
              <strong className="font-semibold text-[var(--text)]">AI processing</strong> (e.g., Gemini) for
              AI-enabled features you use
            </li>
            <li>
              <strong className="font-semibold text-[var(--text)]">Subscription management</strong> (e.g.,
              RevenueCat) and <strong className="font-semibold text-[var(--text)]">app stores/payment processors</strong> (Apple/Google)
              to process purchases and manage entitlements
            </li>
            <li>
              <strong className="font-semibold text-[var(--text)]">Hosting/infrastructure</strong> for the
              website and backend
            </li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We share only what is needed for the provider to perform its role.
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We may also share information if required by law, to enforce our terms, or to protect
            rights, safety, and security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">7) Data retention</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We keep data for as long as needed to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>Provide the service, maintain your account, and support your use of ChompMate</li>
            <li>Meet legal, accounting, or reporting requirements</li>
            <li>Resolve disputes and enforce agreements</li>
            <li>Improve product performance and reliability</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">Examples:</p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>
              Waitlist entries: retained until no longer needed for beta rollout and product research,
              or until you ask us to delete them.
            </li>
            <li>Scan caches: stored temporarily for performance and may expire automatically.</li>
            <li>Account data and logs: retained while your account is active. You can request deletion.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">8) Security</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We use reasonable safeguards to protect information, including access controls and
            secure storage practices. However, no method of transmission or storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">9) Your choices and rights</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            Depending on your location, you may have rights to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            <li>Access the information we hold about you</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to or restrict certain processing</li>
            <li>Export your data (where available)</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            To make a request, contact:{" "}
            <strong className="font-semibold text-[var(--text)]">
              <a
                className="underline decoration-[var(--muted)] underline-offset-4"
                href="mailto:hello@chompmate.app"
              >
                hello@chompmate.app
              </a>
            </strong>
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            Include the email tied to your account or waitlist signup.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">10) Children’s privacy</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            ChompMate is not intended for children under <strong className="font-semibold text-[var(--text)]">13</strong>
            (or the minimum age required in your jurisdiction). If you believe a child has provided
            personal information, contact us and we will take appropriate steps to delete it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">11) International transfers</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            Your information may be processed in countries other than where you live, depending on
            our service providers. Where required, we use appropriate safeguards for international
            transfers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text)]">12) Changes to this policy</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            We may update this policy from time to time. We will update the “Last updated” date and
            may provide additional notice within the app or on the website if changes are material.
          </p>
        </section>
      </div>
    </main>
  );
}
