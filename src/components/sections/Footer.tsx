export const Footer = () => {
  return (
    <footer className="bg-[var(--page-bg)] pb-16 pt-12">
      <div className="page-container">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 rounded-full border border-black/10 bg-white/80 px-8 py-6 text-sm text-[var(--muted)] shadow-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm font-semibold tracking-[0.08em] text-[var(--text)] sm:text-left">
            ChompMate
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
            <a className="transition-opacity hover:opacity-70" href="mailto:hello@chompmate.app">
              Contact
            </a>
            <a className="transition-opacity hover:opacity-70" href="/privacy">
              Privacy
            </a>
            <a className="transition-opacity hover:opacity-70" href="/terms">
              Terms
            </a>
            <a className="transition-opacity hover:opacity-70" href="/delete-account">
              Delete Account
            </a>
            <a className="transition-opacity hover:opacity-70" href="/sources">
              Sources
            </a>
          </div>
          <div className="text-xs text-center sm:text-right">© 2025 Toise LTD. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
