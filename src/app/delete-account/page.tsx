import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account",
  description: "Instructions for requesting deletion of your ChompMate account and associated app data.",
};

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Delete Your ChompMate Account
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            To request deletion of your account and associated app data, email us at{" "}
            <a
              className="font-semibold text-[var(--text)] underline decoration-[var(--muted)] underline-offset-4"
              href="mailto:toiseapp@gmail.com?subject=Delete%20ChompMate%20account"
            >
              toiseapp@gmail.com
            </a>{" "}
            with the subject{" "}
            <strong className="font-semibold text-[var(--text)]">
              &ldquo;Delete ChompMate account&rdquo;
            </strong>
            .
          </p>
        </header>

        <section className="space-y-4">
          <p className="text-[15px] leading-relaxed text-[var(--muted)] sm:text-[16px]">
            Include the email linked to your ChompMate account. We will delete your account and
            associated app data.
          </p>
        </section>
      </div>
    </main>
  );
}
